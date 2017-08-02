import React from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { calculatePrice } from "../helpers";

const buildCartCells = cart => {
  return cart.map(item =>
    <tr key={item.id}>
      <td>{item.card.name}</td>
      <td>{item.list.name}</td>
      <td>{item.quantity}</td>
      <td>{calculatePrice(item.quantity, item.card.price)}</td>
    </tr>
  );
};

const ShoppingCart = ({ cart }) => {
  const cartCells = buildCartCells(cart);
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
                  <th>Quantity</th>
                  <th>Total</th>
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
