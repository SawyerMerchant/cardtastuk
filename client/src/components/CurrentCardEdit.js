import React from 'react';
import { Grid, Row, Col, Image, Button} from 'react-bootstrap';

const CurrentCardEdit = ({card}) => {
  return (
    <Grid>
      <Row>
          <h1 className="card-title">{card.name}</h1>
        <Col md={6} xs={12}>
          <Image responsive thumbnail src="/edit-bg.png" />
        </Col>
        <Col md={6} xs={12} className="card-details">
          <h2 className="card-title">{card.name}</h2>

          <p>Type a message and sign your name on the site and we'll mail them for you.</p>
        </Col>
      </Row>
    </Grid>
  )
};

export default CurrentCardEdit;