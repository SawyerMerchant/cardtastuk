import React, { Component } from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import CheckoutSummary from "./CheckoutSummary";
import AddressFormFields from "./AddressFormFields";
import PropTypes from "prop-types";

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

    return (
      <Grid className="checkout">
        <Row>
          <h1>Checkout</h1>
          <Col md={6}>
            <form id="checkout-form">
              <h3>Billing Address</h3>
              <AddressFormFields />
            </form>
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

Checkout.propTypes = {
  cart: PropTypes.array.isRequired
};

export default Checkout;
