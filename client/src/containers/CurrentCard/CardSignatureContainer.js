import React, { Component } from "react";
import { connect } from "react-redux";
import serialize from "form-serialize";
import CardSignature from "../../components/CurrentCard/CardSignature";
import { getCurrentCardInit } from "../../actions/currentCard";
import { setName } from "../../actions/userName";
import { withRouter } from "react-router-dom";

class CardSignatureContainer extends Component {
  componentDidMount() {
    this.props.getCurrentCard();
  }

  render() {
    return <CardSignature {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    card: state.currentCard.data,
    cardMessage: state.cardMessage || state.currentCard.data.default_greeting,
    userName: state.userName,
    currentList: state.currentList.data,
    signature: state.signature,
    cardFont: state.cardFont
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCurrentCard: () => {
      dispatch(getCurrentCardInit(ownProps.match.params.id));
    },
    onSetName: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      dispatch(setName(data.name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(CardSignatureContainer)
);
