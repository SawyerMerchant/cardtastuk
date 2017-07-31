import React from "react";
import { Grid, Row, Col, Image, Button, FormControl } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CurrentCardEdit = ({ card, onChangeMessage }) => {
  return (
    <Grid>
      <Row>
        <h1 className="card-title">{card.name}</h1>
        <Col md={6} xs={12}>
          <div className="card-edit-container">
            <Image
              responsive
              thumbnail
              src="/edit-bg.png"
              className="card-edit-bg"
            />
            <div className="card-edit-message">
              <p>Dear &lt;First Name&gt;,</p>
              <form>
                <FormControl
                  componentClass="textarea"
                  defaultValue={card.default_greeting}
                  placeholder={card.default_greeting}
                  rows={11}
                  autoFocus
                  onChange={onChangeMessage}
                />
              </form>
              <p>Sincerely, &lt;User&gt;</p>
            </div>
          </div>
        </Col>
        <Col md={6} xs={12} className="card-details">
          <h2 className="card-title">1. Add a message</h2>

          <p>
            Type a message and sign your name on the site and we'll mail them
            for you.
          </p>

          <LinkContainer
            to={`/cards/${card.id}/upload`}
            className="card-details-button"
          >
            <Button bsStyle="info">
              Upload a list of users
            </Button>
          </LinkContainer>
        </Col>
      </Row>
    </Grid>
  );
};

export default CurrentCardEdit;
