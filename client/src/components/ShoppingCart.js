import React from "react";
import {
  Grid,
  Row,
  Col,
  Table,
  Button,
  Popover,
  OverlayTrigger,
  Glyphicon
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import PropTypes from "prop-types";
import { calculatePrice, calculateTotal } from "../helpers";

const buildReturnAddressPopover = address => {
  return (
    <Popover id="popover-address">
      <p>{address.street_address_1}</p>
      <p>{address.street_address_2 || ""}</p>
      <p>{address.city}</p>
      <p>{address.state}</p>
      <p>{address.zipcode}</p>
    </Popover>
  );
};

const buildMessagePopover = message => {
  return (
    <Popover id="popover-message">
      <p>{message}</p>
    </Popover>
  );
};

const buildCartCells = (cart, onRemoveFromCart) => {
  return cart.map(item => {
    let messagePopover = buildMessagePopover(item.message);
    let returnAddressPopover = buildReturnAddressPopover(item.return_address);
    return (
      <tr key={item.id}>
        <td>{item.card.name}</td>
        <td>{item.list.name}</td>
        <td>
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={messagePopover}
          >
            <Glyphicon glyph="question-sign" />
          </OverlayTrigger>
        </td>
        <td>
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={returnAddressPopover}
          >
            <Glyphicon glyph="question-sign" />
          </OverlayTrigger>
        </td>
        <td>{item.quantity}</td>
        <td>{calculatePrice(item.quantity, item.card.price)}</td>
        <td>
          <Button onClick={e => onRemoveFromCart(e, item.id)} bsStyle="danger">
            Remove
          </Button>
        </td>
      </tr>
    );
  });
};

const ShoppingCart = ({ cart, onRemoveFromCart }) => {
  const cartCells = buildCartCells(cart, onRemoveFromCart);
  const total = calculateTotal(cart);

  return (
    <div className="shopping-cart">
      <Grid>
        <h1>Shopping Cart</h1>
        <Row>
          <Col xs={12}>
            <Table striped>
              <thead>
                <tr>
                  <th>Card Name</th>
                  <th>List Name</th>
                  <th>Message</th>
                  <th>Return Address</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {cartCells}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="checkout-button">
          <Col md={4} mdOffset={8}>
            <h3>Total: {total} </h3>
            {cart.length > 0 &&
              <LinkContainer to="/checkout">
                <Button bsStyle="info" bsSize="large" block>
                  <Glyphicon glyph="usd" />{" "}
                  Checkout
                </Button>
              </LinkContainer>}
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

ShoppingCart.propTypes = {
  cart: PropTypes.array.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired
};

export default ShoppingCart;
