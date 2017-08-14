import React from "react";
import { Jumbotron, Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <Jumbotron className="landing-page">
        <Grid>
          <Row>
            <Col md={4} mdOffset={8} xs={10} xsOffset={1}>
              <h1>A card for every moment.</h1>
            </Col>
          </Row>
        </Grid>
      </Jumbotron>
      <Grid>
        <Row>
          <h2>
            View our selection of cards
            {" "}
            <Link to="/cards">
              here.
            </Link>
          </h2>
        </Row>
      </Grid>
    </div>
  );
};

export default LandingPage;
