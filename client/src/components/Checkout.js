import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

class Checkout extends Component {
  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push("/auth");
    }
  }

  render() {
    return (
      <Grid className="checkout">
        <Row>
          <h1>Checkout</h1>
          <Col />
        </Row>
      </Grid>
    );
  }
}

export default Checkout;
