import React, { Component } from "react";
import { connect } from "react-redux";
import CurrentCard from "../components/CurrentCard";
import { getCurrentCard } from "../actions/currentCard";

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
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCurrentCard: () => {
      dispatch(getCurrentCard(ownProps.match.params.id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentCardContainer);
