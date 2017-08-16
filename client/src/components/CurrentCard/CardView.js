import React from "react";
import { Col } from "react-bootstrap";

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

export default CardView;
