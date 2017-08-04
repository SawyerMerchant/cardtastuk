import React, { Component } from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ListSelect from "./ListSelect";
import ListUploadContainer from "../containers/ListUploadContainer";
import PendingOrderDetails from "./PendingOrderDetails";

const handleNextPageClick = (e, list) => {
  if (+list.count < 1) {
    e.preventDefault();
  }
};

class ListResolver extends Component {
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
      setCurrentList
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

            <PendingOrderDetails card={card} currentList={currentList} />

            <LinkContainer
              to={`/cards/${card.id}/address`}
              className="card-details-button"
              onClick={e => handleNextPageClick(e, currentList)}
            >
              <Button bsStyle="info">
                Next: Enter a return address
              </Button>
            </LinkContainer>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ListResolver;
