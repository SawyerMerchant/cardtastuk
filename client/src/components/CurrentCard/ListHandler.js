import React, { Component } from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import PropTypes from "prop-types";
import { getParams, flashMsgs } from "../../helpers";

import ListUploadContainer from "../../containers/CurrentCard/ListUploadContainer";
import FlashMessage from "../Shared/FlashMessage";
import PendingOrderDetails from "../Shared/PendingOrderDetails";
import BackBtn from "./BackBtn";
import Crumbs from "./Crumbs";
import UploadInstructionsModal from "./UploadInstructionsModal";
import ListSelect from "./ListSelect";
import CardView from "./CardView";

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

class ListHandler extends Component {
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
            <Crumbs card={card} position={2} />
            <CardView
              cardFont={cardFont}
              currentList={currentList}
              cardMessage={cardMessage}
              signature={signature}
              userName={userName}
            />
            <Col md={6} xs={12} className="card-details">
              <h2>2. Upload a List of Users</h2>

              <ListUploadContainer />

              <UploadInstructionsModal />

              <ListSelect lists={lists} setCurrentList={setCurrentList} />

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

              <BackBtn history={history} card={card} stage="/signature" />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

ListHandler.propTypes = {
  card: PropTypes.object.isRequired,
  cardMessage: PropTypes.string,
  lists: PropTypes.array.isRequired,
  currentList: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  setCurrentList: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default ListHandler;
