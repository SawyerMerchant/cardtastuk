import React, { Component } from 'react';
import { Grid, Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Upload extends Component {
  componentWillMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push('/auth');
    }
  }

  render() {
    const { card, cardMessage } = this.props;

    return (
      <Grid className="upload">
      <Row>
        <h1 className="card-title">{card.name}</h1>
        <Col md={6} xs={12}>
          <div className="card-edit-container">
            <div className="card-edit-message">
              <p>Dear &lt;First Name&gt;,</p>
              <p>{cardMessage}</p>
              <p>Sincerely, &lt;User&gt;</p>
            </div>
          </div>
        </Col>
        <Col md={6} xs={12} className="card-details">
          <h2 className="card-title">2. Upload a list of users</h2>

          <p>
            If you've already uploaded a list of users, go ahead and choose a list now.
          </p>
          <p>
            Otherwise, upload users here.
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
  }
}

export default Upload;
