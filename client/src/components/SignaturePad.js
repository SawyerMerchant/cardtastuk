import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Point from "../helpers/points_util";
import Bezier from "../helpers/bezier_util";

const velocityFilterWeight = 0.7;
const minWidth = 0.5;
const maxWidth = 2.5;
const dotSize = 1.5;
const penColor = "black";
let canvas;
let context;
let mouseButtonDown = false;

// adapted into ES6 class from
// https://github.com/StrollHealth/react-signature/tree/master/src
class ReactSignature extends Component {
  componentDidMount = () => {
    canvas = this.refs.canvas;
    this.points = [];
    context = canvas.getContext("2d");
  };

  handleClear = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    this.reset();
    this.props.onClearSignature();
  };

  toDataURL = () => {
    return canvas.toDataURL.apply(canvas, arguments);
  };

  fromDataURL = dataURL => {
    var image = new Image(),
      ratio = window.devicePixelRatio || 1,
      width = canvas.width / ratio,
      height = canvas.height / ratio;
    this.reset();
    image.src = dataURL;
    image.onload = function() {
      context.drawImage(image, 0, 0, width, height);
    };
    this.isEmpty = false;
  };

  handleMouseDown = e => {
    mouseButtonDown = true;
    this.strokeBegin(e);
  };

  handleMouseMove = e => {
    if (e.target === canvas) {
      e.preventDefault();
    }
    if (mouseButtonDown) {
      this.strokeUpdate(e);
    }
  };

  handleMouseUp = e => {
    mouseButtonDown = false;
    this.strokeEnd(e);
  };

  handleTouchStart = e => {
    let touch = e.touches[0];

    let mouseEvent = new MouseEvent("mousedown", {
      clientX: touch.clientX,
      clientY: touch.clientY
    });

    this.handleMouseDown(mouseEvent);
  };

  handleTouchMove = e => {
    let touch = e.touches[0];

    let mouseEvent = new MouseEvent("mousemove", {
      clientX: touch.clientX,
      clientY: touch.clientY
    });

    this.handleMouseMove(mouseEvent);
  };

  handleTouchEnd = e => {
    let mouseEvent = new MouseEvent("mouseup", {});
    this.handleMouseUp(mouseEvent);
  };

  strokeUpdate = e => {
    var point = this.createPoint(e);
    this.addPoint(point);
  };

  strokeBegin = e => {
    this.reset();
    this.strokeUpdate(e);
  };

  strokeDraw = point => {
    context.beginPath();
    this.drawPoint(point.x, point.y, dotSize);
    context.closePath();
    context.fill();
  };

  strokeEnd = e => {
    var canDrawCurve = this.points.length > 2,
      point = this.points[0];

    if (!canDrawCurve && point) {
      this.strokeDraw(point);
    }
  };

  createPoint = e => {
    var rect = canvas.getBoundingClientRect();
    return new Point(e.clientX - rect.left, e.clientY - rect.top);
  };

  addPoint = point => {
    var c2, c3, curve, tmp;
    this.points.push(point);

    if (this.points.length > 2) {
      // To reduce the initial lag make it work with 3 points
      // by copying the first point to the beginning.
      if (this.points.length === 3) this.points.unshift(this.points[0]);

      tmp = this.calculateCurveControlPoints(
        this.points[0],
        this.points[1],
        this.points[2]
      );

      c2 = tmp.c2;
      tmp = this.calculateCurveControlPoints(
        this.points[1],
        this.points[2],
        this.points[3]
      );
      c3 = tmp.c1;
      curve = new Bezier(this.points[1], c2, c3, this.points[2]);
      this.addCurve(curve);

      // Remove the first element from the list,
      // so that we always have no more than 4 points in points array.
      this.points.shift();
    }
  };

  addCurve = curve => {
    var startPoint = curve.startPoint,
      endPoint = curve.endPoint,
      velocity,
      newWidth;
    velocity = endPoint.velocityFrom(startPoint);
    velocity =
      velocityFilterWeight * velocity +
      (1 - velocityFilterWeight) * this.lastVelocity;

    newWidth = this.strokeWidth(velocity);
    this.drawCurve(curve, this.lastWidth, newWidth);

    this.lastVelocity = velocity;
    this.lastWidth = newWidth;
  };

  calculateCurveControlPoints = (s1, s2, s3) => {
    var dx1 = s1.x - s2.x,
      dy1 = s1.y - s2.y,
      dx2 = s2.x - s3.x,
      dy2 = s2.y - s3.y,
      m1 = { x: (s1.x + s2.x) / 2.0, y: (s1.y + s2.y) / 2.0 },
      m2 = { x: (s2.x + s3.x) / 2.0, y: (s2.y + s3.y) / 2.0 },
      l1 = Math.sqrt(dx1 * dx1 + dy1 * dy1),
      l2 = Math.sqrt(dx2 * dx2 + dy2 * dy2),
      dxm = m1.x - m2.x,
      dym = m1.y - m2.y,
      k = l2 / (l1 + l2),
      cm = { x: m2.x + dxm * k, y: m2.y + dym * k },
      tx = s2.x - cm.x,
      ty = s2.y - cm.y;

    return {
      c1: new Point(m1.x + tx, m1.y + ty),
      c2: new Point(m2.x + tx, m2.y + ty)
    };
  };

  isEmpty = () => {
    return this.isEmpty;
  };

  reset = () => {
    this.points = [];
    this.lastVelocity = 0;
    this.lastWidth = (this.minWidth + this.maxWidth) / 2;
    this.isEmpty = true;
    context.fillStyle = penColor;
  };

  drawPoint = (x, y, size) => {
    context.moveTo(x, y);
    context.arc(x, y, size, 0, 2 * Math.PI, false);
    this.isEmpty = false;
  };

  drawCurve = (curve, startWidth, endWidth) => {
    var widthDelta = endWidth - startWidth,
      drawSteps,
      width,
      i,
      t,
      tt,
      ttt,
      u,
      uu,
      uuu,
      x,
      y;

    drawSteps = Math.floor(curve.length());
    context.beginPath();
    for (i = 0; i < drawSteps; i++) {
      t = i / drawSteps;
      tt = t * t;
      ttt = tt * t;
      u = 1 - t;
      uu = u * u;
      uuu = uu * u;

      x = uuu * curve.startPoint.x;
      x += 3 * uu * t * curve.control1.x;
      x += 3 * u * tt * curve.control2.x;
      x += ttt * curve.endPoint.x;

      y = uuu * curve.startPoint.y;
      y += 3 * uu * t * curve.control1.y;
      y += 3 * u * tt * curve.control2.y;
      y += ttt * curve.endPoint.y;

      width = startWidth + ttt * widthDelta;
      this.drawPoint(x, y, width);
    }
    context.closePath();
    context.fill();
  };

  strokeWidth = velocity => {
    return Math.max(maxWidth / (velocity + 1), minWidth);
  };

  handleSubmit = e => {
    e.preventDefault();
    let signature = this.toDataURL();
    this.props.onSetSignature(signature);
  };

  render() {
    return (
      <div className="signature-pad m-signature-pad">
        <form onSubmit={this.handleSubmit}>
          <canvas
            width={this.props.width}
            height={this.props.height}
            ref="canvas"
            onTouchStart={this.handleTouchStart}
            onTouchMove={this.handleTouchMove}
            onTouchEnd={this.handleTouchEnd}
            onMouseDown={this.handleMouseDown}
            onMouseMove={this.handleMouseMove}
            onMouseUp={this.handleMouseUp}
          />
          <Button bsStyle="success" type="submit">Save Signature</Button>
        </form>
        <Button bsStyle="warning" onClick={this.handleClear}>Clear</Button>
      </div>
    );
  }
}

ReactSignature.defaultProps = {
  width: 350,
  height: 125
};

export default ReactSignature;
