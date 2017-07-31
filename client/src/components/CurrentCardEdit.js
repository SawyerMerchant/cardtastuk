import React from "react";
import { Grid, Row, Col, Image, Button, FormControl } from "react-bootstrap";

const CurrentCardEdit = ({ card }) => {
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
              <p>Dear First Name,</p>
              <form>
                <FormControl
                  componentClass="textarea"
                  defaultValue={card.default_greeting}
                  placeholder={card.default_greeting}
                  rows={11}
                  autoFocus
                />
              </form>
              <p>Sincerely, User</p>
            </div>
          </div>
        </Col>
        <Col md={6} xs={12} className="card-details">
          <h2 className="card-title">{card.name}</h2>

          <p>
            Type a message and sign your name on the site and we'll mail them
            for you.
          </p>
        </Col>
      </Row>
    </Grid>
  );
};

export default CurrentCardEdit;
