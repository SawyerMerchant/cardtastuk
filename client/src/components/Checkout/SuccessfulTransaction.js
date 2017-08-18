import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { getParams } from "../../helpers";

class SuccessfulTransaction extends Component {
  componentDidMount() {
    console.log(this.props);
    if (!this.props.isAuthenticated) {
      this.props.history.push("/auth?error=unauthenticated");
    }
  }

  render() {
    const { location } = this.props;
    let query = getParams(location.search);

    return (
      <Grid className="successful-transaction">
        <Row>
          <h1>Thank you for your order.</h1>
          <Col xs={12}>
            <h3>Order #: {query.id}</h3>
            <h3>Amount: ${query.amount / 100}</h3>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default SuccessfulTransaction;
