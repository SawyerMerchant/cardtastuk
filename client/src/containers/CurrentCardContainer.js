import React, { Component } from "react";
import { connect } from "react-redux";
import CurrentCard from "../components/CurrentCard";
import { withRouter } from "react-router-dom";
import { getCurrentCardInit } from "../actions/currentCard";

class CurrentCardContainer extends Component {
  componentDidMount() {
    this.props.getCurrentCard();
  }

  render() {
    return <CurrentCard {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    card: state.currentCard.data,
    isFetching: state.currentCard.isFetching
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCurrentCard: () => {
      dispatch(getCurrentCardInit(ownProps.match.params.id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(CurrentCardContainer)
);
