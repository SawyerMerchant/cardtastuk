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
import { calculatePrice } from "../helpers";

const buildMessagePopover = message => {
  return (
    <Popover id="popover-positioned-bottom">
      <p>{message}</p>
    </Popover>
  );
};

const buildCartCells = (cart, onRemoveFromCart) => {
  return cart.map(item => {
    let messagePopover = buildMessagePopover(item.message);
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
      </Grid>
    </div>
  );
};

export default ShoppingCart;
