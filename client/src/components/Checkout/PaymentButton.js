import React, { Component } from "react";
import { Button } from "react-bootstrap";

class PaymentButton extends Component {
  constructor() {
    super();
    this.state = {
      disabled: false,
      innerText: "Make a Payment"
    };
  }

  handleClick = e => {
    this.setState({
      disabled: true,
      innerText: "Processing..."
    });
  };

  render() {
    return (
      <Button
        onClick={this.handleClick}
        bsStyle="info"
        bsSize="large"
        block
        disabled={this.state.disabled}
      >
        {this.state.innerText}
      </Button>
    );
  }
}

export default PaymentButton;
