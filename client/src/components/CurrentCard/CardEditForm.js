import React from "react";
import { Col, FormControl } from "react-bootstrap";

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
          <p>Dear &lt;First Name&gt;,</p>
          <form>
            <FormControl
              componentClass="textarea"
              defaultValue={message}
              placeholder={message}
              rows={8}
              autoFocus
              onChange={onChangeMessage}
            />
          </form>
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

export default CardEditForm;
