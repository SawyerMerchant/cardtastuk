import React from "react";
import { Button } from "react-bootstrap";

const handleClick = (e, history) => {
  e.preventDefault();
  history.goBack();
};

const BackBtn = ({ history }) => {
  return (
    <Button
      className="back-btn"
      bsStyle="danger"
      onClick={e => handleClick(e, history)}
      block
    >
      Back
    </Button>
  );
};

export default BackBtn;
