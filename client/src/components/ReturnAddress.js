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
import PropTypes from "prop-types";
import PendingOrderDetails from "./PendingOrderDetails";
import BackBtn from "./BackBtn";
import USAStatesDropdown from "./USAStatesDropdown";

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
      userName,
      isAuthenticated,
      onAddToCart,
      history,
      signature,
      cardFont
    } = this.props;
    return (
      <Grid className="return-address">
        <Row>
          <h1 className="card-title">{card.name}</h1>
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
          <Col md={6} xs={12} className="card-details">
            <h2>3. Enter a Return Address</h2>

            <p>Let your recipients know where to send a message back.</p>

            <br />
            <form
              id="add-to-cart"
              onSubmit={e =>
                onAddToCart(
                  e,
                  card,
                  currentList,
                  cardMessage,
                  isAuthenticated,
                  signature,
                  userName,
                  cardFont
                )}
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
                {/* <FormControl type="text" name="state" required /> */}
                <USAStatesDropdown />
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

              <PendingOrderDetails card={card} currentList={currentList} />

              <Button bsStyle="info" bsSize="large" type="submit" block>
                <Glyphicon glyph="shopping-cart" />{" "}
                Add To Cart
              </Button>
            </form>

            <BackBtn history={history} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

ReturnAddress.propTypes = {
  card: PropTypes.object.isRequired,
  cardMessage: PropTypes.string,
  currentList: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default ReturnAddress;
