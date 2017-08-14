import React, { Component } from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import PropTypes from "prop-types";
import ListSelect from "./ListSelect";
import ListUploadContainer from "../../containers/CurrentCard/ListUploadContainer";
import FlashMessage from "../Shared/FlashMessage";
import UploadInstructionsModal from "./UploadInstructionsModal";
import PendingOrderDetails from "../Shared/PendingOrderDetails";
import BackBtn from "../Shared/BackBtn";
import { getParams, flashMsgs } from "../../helpers";

const buildFlash = status => {
  let message;
  let type;
  if (!status) {
    return null;
  }

  if (status === "success") {
    message = flashMsgs.successfulUpload;
    type = "info";
  } else if (status === "error") {
    message = flashMsgs.badUpload;
    type = "danger";
  }

  return <FlashMessage type={type} message={message} />;
};

const handleNextPageClick = (e, list) => {
  if (+list.count < 1) {
    e.preventDefault();
  }
};

class ListResolver extends Component {
  componentWillMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push(
        `/auth?error=unauthenticated&cardRedirectId=${this.props.card.id}`
      );
    }
  }

  render() {
    const {
      card,
      cardMessage,
      lists,
      userName,
      currentList,
      setCurrentList,
      history,
      location,
      signature,
      cardFont
    } = this.props;

    let query = getParams(location.search);
    let flash = buildFlash(query.status);

    return (
      <div>
        {flash}
        <Grid className="list-resolver">
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
              <h2 className="card-title">2. Upload a list of users</h2>

              <ListSelect lists={lists} setCurrentList={setCurrentList} />

              <ListUploadContainer />

              <UploadInstructionsModal />

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

              <BackBtn history={history} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

ListResolver.propTypes = {
  card: PropTypes.object.isRequired,
  cardMessage: PropTypes.string,
  lists: PropTypes.array.isRequired,
  currentList: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  setCurrentList: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default ListResolver;