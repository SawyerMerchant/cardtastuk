import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { getParams } from "../helpers";

const SuccessfulTransaction = ({ location }) => {
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
};

export default SuccessfulTransaction;
