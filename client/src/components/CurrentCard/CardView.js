import React from "react";
import { Col } from "react-bootstrap";
import PropTypes from "prop-types";

const CardView = ({
  cardFont,
  currentList,
  cardMessage,
  signature,
  userName
}) => {
  let firstName;
  if (!currentList.first_record) {
    firstName = "<First Name>";
  } else {
    firstName = currentList.first_record.first_name;
  }
  return (
    <Col md={6} xs={12}>
      <div className="card-edit-container">
        <div className={`card-edit-message ${cardFont}`}>
          <p>{cardMessage}</p>
          <p className="signature">
            {signature
              ? <img src={signature} alt="User's signature" />
              : userName}
          </p>
        </div>
      </div>
    </Col>
  );
};

CardView.PropTypes = {
  cardFont: PropTypes.string,
  currentList: PropTypes.object,
  cardMessage: PropTypes.string,
  signature: PropTypes.string,
  userName: PropTypes.string
};

export default CardView;
