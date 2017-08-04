import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { calculateTotal } from "../helpers";
import CheckoutSummary from "./CheckoutSummary";

class Checkout extends Component {
  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push("/auth");
    }
  }

  handleToken = token => {
    let form = document.getElementById("checkout-form");
    this.props.onPayment(form, token, this.props.cart, this.props.user);
  };

  render() {
    const { cart } = this.props;
    const total = calculateTotal(cart);

    return (
      <Grid className="checkout">
        <Row>
          <h1>Checkout</h1>
          <Col md={6}>
            <form id="checkout-form">
              <h3>Billing Address</h3>
              <FormGroup controlId="street_address_1">
                <ControlLabel>Street Address 1</ControlLabel>
                <FormControl type="text" name="street_address_1" required />
              </FormGroup>
              <FormGroup controlId="street_address_2">
                <ControlLabel>Street Address 2</ControlLabel>
                <FormControl type="text" name="street_address_2" required />
              </FormGroup>
              <FormGroup controlId="city">
                <ControlLabel>City</ControlLabel>
                <FormControl type="text" name="city" required />
              </FormGroup>
              <FormGroup controlId="state">
                <ControlLabel>State</ControlLabel>
                <FormControl type="text" name="state" required />
              </FormGroup>
              <FormGroup controlId="zipcode">
                <ControlLabel>Zipcode</ControlLabel>
                <FormControl
                  type="number"
                  pattern="[0-9]{5}"
                  name="zipcode"
                  required
                />
              </FormGroup>
            </form>
            <h3>Total: {total}</h3>
          </Col>
          <Col md={6}>
            <CheckoutSummary cart={cart} />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <StripeCheckout
              token={this.handleToken}
              stripeKey="pk_test_Td1DI04fuOM1T6U801bhD7WC"
            >
              <Button bsStyle="info" bsSize="large" block>
                Make a Payment
              </Button>
            </StripeCheckout>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Checkout;
