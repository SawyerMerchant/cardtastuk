import React, { Component } from "react";
import { Collapse, Button, Well } from "react-bootstrap";
import SignaturePadContainer from "../containers/SignaturePadContainer";

class SignaturePadCollapsible extends Component {
  constructor(...args) {
    super(...args);

    this.state = {};
  }

  render() {
    return (
      <div className="signature-pad-collapsible">
        <Button
          bsStyle="success"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          Add your signature to the card
        </Button>
        <Collapse in={this.state.open}>
          <Well>
            <SignaturePadContainer />
          </Well>
        </Collapse>
      </div>
    );
  }
}

export default SignaturePadCollapsible;
