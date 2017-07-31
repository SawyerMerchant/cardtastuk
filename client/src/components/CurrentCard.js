import React from 'react';
import { Grid, Row, Col, Image, Button} from 'react-bootstrap';

const CurrentCard = ({card}) => {
  return (
    <Grid>
      <Row>
          <h1 className="card-title">{card.name}</h1>
        <Col md={4} xs={12}>
          <Image responsive thumbnail src={card.large_img_url} />
        </Col>
        <Col md={6} mdOffset={1} className="card-details">
          <h2 className="card-title">{card.name}</h2>

          <p>Type a message and sign your name on the site and we'll mail them for you.</p>

          <Button bsStyle="info" className="card-details-button">
            Start Writing
          </Button>
        </Col>
      </Row>
    </Grid>
  )
};

export default CurrentCard;