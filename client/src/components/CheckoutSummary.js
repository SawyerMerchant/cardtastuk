import React from "react";
import { Table, Popover, OverlayTrigger, Glyphicon } from "react-bootstrap";
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

const buildCartCells = cart => {
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
      </tr>
    );
  });
};

const CheckoutSummary = ({ cart }) => {
  const cartCells = buildCartCells(cart);
  const total = calculateTotal(cart);

  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>Card Name</th>
            <th>List Name</th>
            <th>Message</th>
            <th>Return Address</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartCells}
        </tbody>
      </Table>
      <h3>Total: {total}</h3>
    </div>
  );
};

CheckoutSummary.propTypes = {
  cart: PropTypes.array.isRequired
};

export default CheckoutSummary;
