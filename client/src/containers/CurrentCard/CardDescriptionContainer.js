import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CardDescription from "../../components/CurrentCard/CardDescription";
import { getCurrentCardInit } from "../../actions/currentCard";

class CardDescriptionContainer extends Component {
  componentDidMount() {
    this.props.getCurrentCard();
  }

  render() {
    return <CardDescription {...this.props} />;
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
  withRouter(CardDescriptionContainer)
);
