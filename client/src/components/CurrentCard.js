import React from "react";
import { Grid, Row, Col, Image, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CurrentCard = ({ card }) => {
  return (
    <Grid>
      <Row>
        <h1 className="card-title">{card.name}</h1>
        <Col md={6} xs={12}>
          <Image responsive thumbnail src={card.large_img_url} />
        </Col>
        <Col md={6} xs={12} className="card-details">
          <h2 className="card-title">{card.name}</h2>

          <p>
            Type a message and sign your name on the site and we'll mail them
            for you.
          </p>

          <LinkContainer
            to={`/cards/${card.id}/edit`}
            className="card-details-button"
          >
            <Button bsStyle="info">
              Start Writing
            </Button>
          </LinkContainer>
        </Col>
      </Row>
    </Grid>
  );
};

export default CurrentCard;
