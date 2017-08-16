import React from "react";
import { Grid, Row, Col, Button, FormControl } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import PropTypes from "prop-types";
import FontPickerContainer from "../../containers/CurrentCard/FontPickerContainer";
import Crumbs from "./Crumbs";
import BackBtn from "../Shared/BackBtn";

const CurrentCardEdit = ({
  card,
  cardMessage,
  onChangeMessage,
  onSetName,
  history,
  signature,
  userName,
  cardFont
}) => {
  let message = cardMessage || card.default_greeting;
  return (
    <Grid className="current-card-edit">
      <Row>
        <h1 className="card-title">{card.name}</h1>
        <Crumbs card={card} position={0} />
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
        <Col md={6} xs={12} className="card-details">
          <h2>1. Write a Message</h2>

          <p>
            Write the message you would like to send to all your recipients in
            the card to the left. Then, pick a font that you would like to use
            for the message.
          </p>

          <FontPickerContainer />

          <LinkContainer
            to={`/cards/${card.id}/signature`}
            className="card-details-button"
          >
            <Button bsStyle="info">
              Next: Add a signature
            </Button>
          </LinkContainer>

          <BackBtn history={history} />
        </Col>
      </Row>
    </Grid>
  );
};

CurrentCardEdit.propTypes = {
  card: PropTypes.object.isRequired,
  onChangeMessage: PropTypes.func.isRequired
};

export default CurrentCardEdit;
