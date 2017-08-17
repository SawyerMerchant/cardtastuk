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
  return (
    <Col md={6} xs={12}>
      <div className="card-edit-container">
        <div className={`card-edit-message ${cardFont}`}>
          <p>Dear {currentList.first_record.first_name}</p>
          <p>{cardMessage}</p>
          <p className="signature">Sincerely,</p>
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
