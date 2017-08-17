import React from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import PropTypes from "prop-types";
import { getParams, flashMsgs } from "../../helpers";
import FlashMessage from "../Shared/FlashMessage";
import BackBtn from "./BackBtn";
import Crumbs from "./Crumbs";
import CardView from "./CardView";
import SignaturePadCollapsible from "./SignaturePadCollapsible";
import UserNameCollapsible from "./UserNameCollapsible";

const buildFlash = error => {
  if (!error) {
    return null;
  }

  return <FlashMessage type="danger" message={flashMsgs.noSignature} />;
};

const handleClick = (e, userName, signature, history) => {
  let isUserNameEmpty = userName === "< User >" || userName === "";
  let isSignatureEmpy = signature === "";
  if (isUserNameEmpty && isSignatureEmpy) {
    e.preventDefault();
    history.push(`${window.location.pathname}?error=true`);
  }
};

const CardSignature = ({
  card,
  cardMessage,
  userName,
  currentList,
  history,
  location,
  signature,
  cardFont,
  onSetName
}) => {
  let query = getParams(location.search);
  let flash = buildFlash(query.error);

  return (
    <div>
      {flash}
      <Grid className="card-signature">
        <Row>
          <h1 className="card-title">{card.name}</h1>
          <Crumbs card={card} position={1} />
          <CardView
            cardFont={cardFont}
            currentList={currentList}
            cardMessage={cardMessage}
            signature={signature}
            userName={userName}
          />
          <Col md={6} xs={12} className="card-details">
            <h2>2. Add Your Signature</h2>

            <p>
              Now, you can either draw a signature using the pad below, or write
              in your name manually. You must use one of the options in order to
              continue.
            </p>

            <SignaturePadCollapsible />

            <h3> - Or - </h3>

            <UserNameCollapsible onSetName={onSetName} />

            <LinkContainer
              to={`/cards/${card.id}/upload`}
              className="card-details-button"
              onClick={e => handleClick(e, userName, signature, history)}
            >
              <Button bsStyle="info">
                Next: Upload a list of users
              </Button>
            </LinkContainer>

            <BackBtn history={history} card={card} stage="/edit" />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

CardSignature.propTypes = {
  card: PropTypes.object.isRequired,
  cardMessage: PropTypes.string,
  currentList: PropTypes.object.isRequired
};

export default CardSignature;
