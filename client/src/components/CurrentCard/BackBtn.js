import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const handleClick = (e, history, card, stage) => {
  e.preventDefault();
  if (stage === "index") {
    history.push("/cards");
  } else {
    let url = `/cards/${card.id}${stage}`;
    history.push(url);
  }
};

const BackBtn = ({ history, card, stage }) => {
  return (
    <Button
      className="back-btn"
      bsStyle="danger"
      onClick={e => handleClick(e, history, card, stage)}
      block
    >
      Back
    </Button>
  );
};

BackBtn.PropTypes = {
  card: PropTypes.object.isRequired,
  stage: PropTypes.string.isRequired
};

export default BackBtn;
