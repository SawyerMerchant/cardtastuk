import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import ListSelect from "./ListSelect";
import ListUploadContainer from "../containers/ListUploadContainer";
import AddToCartWidget from "./AddToCartWidget";

class Upload extends Component {
  componentWillMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push("/auth?error=unauthenticated");
    }
  }

  render() {
    const {
      card,
      cardMessage,
      lists,
      currentList,
      user,
      setCurrentList,
      onAddToCart
    } = this.props;

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

            <ListSelect lists={lists} setCurrentList={setCurrentList} />

            <ListUploadContainer />

            <AddToCartWidget
              card={card}
              currentList={currentList}
              cardMessage={cardMessage}
              onAddToCart={onAddToCart}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Upload;
