import React from "react";
import { Jumbotron, Grid, Row, Col, Panel, Image } from "react-bootstrap";

const buildTagsString = tags => {
  let tagString = "";
  tags.forEach((tag, index) => {
    if (index === tags.length - 1) {
      tagString += `${tag.name}`;
    } else {
      tagString += `${tag.name}, `;
    }
  });

  return tagString;
};

const buildCardPanels = cards => {
  return cards.map(card =>
    <Col md={4} xs={12} key={card.id}>
      <Panel header={card.name}>
        <Image src={card.medium_img_url} responsive thumbnail />
        <p>Category: {card.category.name}</p>
        <p>Tags: {buildTagsString(card.tags)}</p>
      </Panel>
    </Col>
  );
};

const CardsAll = ({ cards }) => {
  let cardPanels = buildCardPanels(cards);
  return (
    <div>
      <Jumbotron>
        <Grid>
          <h1>Find the perfect card for your loved ones today.</h1>
        </Grid>
      </Jumbotron>
      <Grid>
        <Row>
          {cardPanels}
        </Row>
      </Grid>
    </div>
  );
};

export default CardsAll;
