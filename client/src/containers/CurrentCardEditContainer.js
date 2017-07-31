import React, { Component } from "react";
import { connect } from "react-redux";
import CurrentCardEdit from "../components/CurrentCardEdit";
import { getCurrentCardInit } from "../actions/currentCard";
import { changeCardMessage } from "../actions/cardMessage";

class CurrentCardEditContainer extends Component {
  componentDidMount() {
    this.props.getCurrentCard();
  }

  render() {
    return <CurrentCardEdit {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    card: state.currentCard.data
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCurrentCard: () => {
      dispatch(getCurrentCardInit(ownProps.match.params.id));
    },
    onChangeMessage: e => {
      dispatch(changeCardMessage(e.target.value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CurrentCardEditContainer
);
