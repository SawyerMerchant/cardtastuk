import React from "react";
import { Jumbotron, Grid, Row, Col, Panel, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


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
    <Col md={4} xs={12} key={card.id} className="card-panel">
        <LinkContainer to={`/cards/${card.id}`}>
      <Panel header={<h2 className="card-title">{card.name}</h2>}>
        <Image src={card.medium_img_url} responsive thumbnail />
        <p>Category: {card.category.name}</p>
        <p>Tags: {buildTagsString(card.tags)}</p>
      </Panel>
        </LinkContainer>
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
