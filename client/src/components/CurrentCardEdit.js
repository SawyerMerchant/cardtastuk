import React from "react";
import { Grid, Row, Col, Button, FormControl } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import BackBtn from "./BackBtn";

const CurrentCardEdit = ({ card, onChangeMessage, history }) => {
  return (
    <Grid className="current-card-edit">
      <Row>
        <h1 className="card-title">{card.name}</h1>
        <Col md={6} xs={12}>
          <div className="card-edit-container">
            <div className="card-edit-message">
              <p>Dear &lt;First Name&gt;,</p>
              <form>
                <FormControl
                  componentClass="textarea"
                  defaultValue={card.default_greeting}
                  placeholder={card.default_greeting}
                  rows={8}
                  autoFocus
                  onChange={onChangeMessage}
                />
              </form>
              <p className="signature">Sincerely, &lt;User&gt;</p>
            </div>
          </div>
        </Col>
        <Col md={6} xs={12} className="card-details">
          <h2 className="card-title">1. Add a message</h2>

          <p>
            Write the message you would like to send to all your recipients in
            the card to the left.
          </p>

          <LinkContainer
            to={`/cards/${card.id}/upload`}
            className="card-details-button"
          >
            <Button bsStyle="info">
              Next: Upload a list of users
            </Button>
          </LinkContainer>

          <BackBtn history={history} />
        </Col>
      </Row>
    </Grid>
  );
};

export default CurrentCardEdit;
