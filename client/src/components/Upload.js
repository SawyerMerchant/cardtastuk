import React, { Component } from "react";
import { Grid, Row, Col, Button, Glyphicon, FormGroup, ControlLabel, FormControl } from "react-bootstrap";

const buildListOptions = lists => {
  return lists.map(list => (
    <option key={list.id} value={list.id}>{list.name}</option>
  ));
};


class Upload extends Component {
  componentWillMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push("/auth?error=unauthenticated");
    }
  }

  render() {
    const { card, cardMessage, lists, currentList, user, setCurrentList } = this.props;
    const listOptions = buildListOptions(lists);

    return (
      <Grid className="upload">
        <Row>
          <h1 className="card-title">{card.name}</h1>
          <Col md={6} xs={12}>
            <div className="card-edit-container">
              <div className="card-edit-message">
                <p>Dear {currentList.first_person.fname}</p>
                <p>{cardMessage}</p>
                <p className="signature">Sincerely, {user.name}</p>
              </div>
            </div>
          </Col>
          <Col md={6} xs={12} className="card-details">
            <h2 className="card-title">2. Upload a list of users</h2>

            <p>
              If you've already uploaded a list of users, go ahead and choose a
              list now.
            </p>
            <form id="choose-list">
              <FormGroup controlId="list" onChange={(e) => setCurrentList(e, lists)}>
                <ControlLabel>Choose a group to receive your cards:</ControlLabel>
                <FormControl componentClass="select" name="list_id">
                  {listOptions}
                </FormControl>
              </FormGroup>
            </form>

            <p>
              Otherwise, upload a group of users here.
            </p>
            <form id="list-upload">
              <FormGroup controlId="list_upload">
                <ControlLabel>Select a CSV</ControlLabel>
                <FormControl type="file" name="list_upload" required />
              </FormGroup>
              <Button bsStyle="success" type="submit">
                Upload
              </Button>
            </form>

            <h3>Total:</h3>

            <form id="add-to-cart">
              <FormGroup controlId="quantity">
                <ControlLabel>Quantity</ControlLabel>
                <FormControl type="number" name="quantity" required />
              </FormGroup>
              <Button bsStyle="info" bsSize="large" type="submit" block>
                <Glyphicon glyph="shopping-cart" />{" "}
                Add To Cart
              </Button>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Upload;
