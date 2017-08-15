import React from "react";
import { Jumbotron, Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getParams } from "../../helpers";

const Welcome = ({ location }) => {
  let query = getParams(location.search);
  let target = query.target ? ` ${query.target}.` : ".";
  let referrer = query.referrer;

  return (
    <div>
      <Jumbotron className="welcome-page">
        <Grid>
          <Row>
            <Col md={4} mdOffset={8} xs={10} xsOffset={1}>
              <h1>Welcome{target}</h1>
              <h3>
                Thanks for stopping by to help {referrer} and the ORGANIZATION
              </h3>
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

export default Welcome;
