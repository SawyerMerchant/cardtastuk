import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Button,
  Glyphicon,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import PendingOrderDetails from "./PendingOrderDetails";

class ReturnAddress extends Component {
  componentWillMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push("/auth?error=unauthenticated");
    }
  }

  render() {
    const {
      card,
      cardMessage,
      currentList,
      user,
      isAuthenticated,
      onAddToCart
    } = this.props;
    return (
      <Grid className="return-address">
        <Row>
          <h1 className="card-title">{card.name}</h1>
          <Col md={6} xs={12}>
            <div className="card-edit-container">
              <div className="card-edit-message">
                <p>Dear {currentList.first_record.first_name}</p>
                <p>{cardMessage}</p>
                <p className="signature">Sincerely, {user.name}</p>
              </div>
            </div>
          </Col>
          <Col md={6} xs={12} className="card-details">
            <h3>3. Enter a Return Address</h3>
            <br />

            <PendingOrderDetails card={card} currentList={currentList} />

            <form
              id="add-to-cart"
              onSubmit={e =>
                onAddToCart(e, card, currentList, cardMessage, isAuthenticated)}
            >
              <FormGroup controlId="street_address_1">
                <ControlLabel>Street Address 1</ControlLabel>
                <FormControl type="text" name="street_address_1" required />
              </FormGroup>
              <FormGroup controlId="street_address_2">
                <ControlLabel>Street Address 2</ControlLabel>
                <FormControl type="text" name="street_address_2" />
              </FormGroup>
              <FormGroup controlId="city">
                <ControlLabel>City</ControlLabel>
                <FormControl type="text" name="city" required />
              </FormGroup>
              <FormGroup controlId="state">
                <ControlLabel>State</ControlLabel>
                <FormControl type="text" name="state" required />
              </FormGroup>
              <FormGroup controlId="zipcode">
                <ControlLabel>Zipcode</ControlLabel>
                <FormControl
                  type="number"
                  pattern="[0-9]{5}"
                  name="zipcode"
                  required
                />
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

export default ReturnAddress;
