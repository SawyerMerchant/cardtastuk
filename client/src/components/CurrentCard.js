import React from "react";
import {
  Grid,
  Row,
  Col,
  Image,
  Button,
  Popover,
  OverlayTrigger,
  Glyphicon
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import moneyFormatter from "money-formatter";
import PropTypes from "prop-types";
import BackBtn from "./BackBtn";
import Loader from "./Loader";

const buildPricingPopover = prices => {
  let price25 = moneyFormatter.format("USD", prices.x25 / 100);
  let price100 = moneyFormatter.format("USD", prices.x100 / 100);
  let price250 = moneyFormatter.format("USD", prices.x250 / 100);
  let price500 = moneyFormatter.format("USD", prices.x500 / 100);
  let price1000 = moneyFormatter.format("USD", prices.x1000 / 100);
  let price2000 = moneyFormatter.format("USD", prices.x2000 / 100);
  return (
    <Popover id="popover-positioned-top">
      <strong>Send More. Spend Less.</strong>
      <p>1 - 25 Cards = <strong>{price25}</strong></p>
      <p>26 - 100 Cards = <strong>{price100}</strong></p>
      <p>101 - 250 Cards = <strong>{price250}</strong></p>
      <p>251 - 500 Cards = <strong>{price500}</strong></p>
      <p>501 - 1000 Cards = <strong>{price1000}</strong></p>
      <p>More than 1000 Cards = <strong>{price2000}</strong></p>
    </Popover>
  );
};

const CurrentCard = ({ card, history, isFetching }) => {
  let pricingPopover = buildPricingPopover(card.price);
  let price25 = moneyFormatter.format("USD", card.price.x25 / 100);
  let price2000 = moneyFormatter.format("USD", card.price.x2000 / 100);

  return (
    <Grid className="current-card">
      <Row>
        <h1 className="card-title">{card.name}</h1>
        <Col md={6} xs={12}>
          {isFetching
            ? <Loader />
            : <Image responsive thumbnail src={card.large_img_url} />}
        </Col>
        <Col md={6} xs={12} className="card-details">
          <h2 className="card-title">{card.name}</h2>

          <h4>
            Stamped and mailed
            <br />
            {price2000} - {price25}
          </h4>
          <OverlayTrigger
            trigger="click"
            placement="top"
            overlay={pricingPopover}
          >
            <Button bsStyle="success" className="popover-button">
              <Glyphicon glyph="question-sign" />{" "}
            </Button>
          </OverlayTrigger>

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

          <BackBtn history={history} />
        </Col>
      </Row>
    </Grid>
  );
};

CurrentCard.propTypes = {
  card: PropTypes.object.isRequired
};

export default CurrentCard;
