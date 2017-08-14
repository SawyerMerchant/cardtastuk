import React, { Component } from "react";
import { Grid, Row, Col, Button, Glyphicon } from "react-bootstrap";
import PropTypes from "prop-types";
import PendingOrderDetails from "../Shared/PendingOrderDetails";
import AddressFormFields from "../FormElements/AddressFormFields";
import Crumbs from "./Crumbs";
import BackBtn from "../Shared/BackBtn";

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
          <Crumbs card={card} position={2}/>
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
              <AddressFormFields />

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
