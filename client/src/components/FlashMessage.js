import React, { Component } from "react";
import { Alert, Grid } from "react-bootstrap";

class FlashMessage extends Component {
  constructor() {
    super();
    this.state = {
      visible: true
    };
  }

  handleAlertDismiss = () => {
    this.setState({ visible: false });
  };

  render() {
    const { type, message } = this.props;
    if (this.state.visible) {
      return (
        <Alert bsStyle={ type } onDismiss={this.handleAlertDismiss}>
          <Grid>
            <h4>{message}</h4>
          </Grid>
        </Alert>
      );
    } else {
      return null;
    }
  }
}

export default FlashMessage;
