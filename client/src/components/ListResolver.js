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
      isAuthenticated,
      setCurrentList,
      onAddToCart
    } = this.props;
    return (
      <Grid className="list-resolver">
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
            <h2 className="card-title">2. Upload a list of users</h2>

            <ListSelect lists={lists} setCurrentList={setCurrentList} />

            <ListUploadContainer />

            <AddToCartWidget
              card={card}
              currentList={currentList}
              cardMessage={cardMessage}
              onAddToCart={onAddToCart}
              isAuthenticated={isAuthenticated}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Upload;
