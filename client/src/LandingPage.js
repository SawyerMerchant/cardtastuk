import React from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <Jumbotron className="landing-page">
      <Grid>
        <Row>
          <Col md={4} mdOffset={8} xs={10} xsOffset={1}>
            <h1>A card for every moment.</h1>
          </Col>
        </Row>
      </Grid>
    </Jumbotron>
  )
};

export default LandingPage;