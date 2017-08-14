import React, { Component } from "react";
import {
  Collapse,
  Button,
  Well,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

class UserNameCollapsible extends Component {
  constructor(...args) {
    super(...args);

    this.state = {};
  }

  render() {
    const { onSetName } = this.props;

    return (
      <div className="username-collapsible">
        <Button
          bsStyle="success"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          Fill in your name
        </Button>
        <Collapse in={this.state.open}>
          <Well>
            <form onSubmit={onSetName}>
              <FormGroup controlId="name">
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text" name="name" />
              </FormGroup>
              <Button bsStyle="success" type="submit">Save Name</Button>
            </form>
          </Well>
        </Collapse>
      </div>
    );
  }
}

export default UserNameCollapsible;
