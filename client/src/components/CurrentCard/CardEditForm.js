import React from "react";
import { Col, FormControl } from "react-bootstrap";
import PropTypes from "prop-types";

const CardEditForm = ({
  message,
  cardFont,
  onChangeMessage,
  signature,
  userName
}) => {
  return (
    <Col md={6} xs={12}>
      <div className="card-edit-container">
        <div className={`card-edit-message ${cardFont}`}>
          <form>
            <FormControl
              componentClass="textarea"
              defaultValue={message}
              placeholder={message}
              maxLength={130}
              rows={8}
              autoFocus
              onChange={onChangeMessage}
            />
          </form>
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

CardEditForm.PropTypes = {
  message: PropTypes.string,
  cardFont: PropTypes.string,
  onChangeMessage: PropTypes.func,
  signature: PropTypes.string,
  userName: PropTypes.string
};

export default CardEditForm;
