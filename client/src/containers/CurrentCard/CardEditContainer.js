import React, { Component } from "react";
import { connect } from "react-redux";
import serialize from "form-serialize";
import CardEdit from "../../components/CurrentCard/CardEdit";
import { getCurrentCardInit } from "../../actions/currentCard";
import { changeCardMessage } from "../../actions/cardMessage";
import { setName } from "../../actions/userName";
import { withRouter } from "react-router-dom";

class CardEditContainer extends Component {
  componentDidMount() {
    this.props.getCurrentCard();
  }

  render() {
    return <CardEdit {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    card: state.currentCard.data,
    signature: state.signature,
    userName: state.userName,
    cardFont: state.cardFont
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCurrentCard: () => {
      dispatch(getCurrentCardInit(ownProps.match.params.id));
    },
    onChangeMessage: e => {
      dispatch(changeCardMessage(e.target.value));
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
  withRouter(CardEditContainer)
);
