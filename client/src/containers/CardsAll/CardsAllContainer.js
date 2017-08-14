import React, { Component } from "react";
import { connect } from "react-redux";
import CardsAll from "../../components/CardsAll";
import {
  filterCards,
  handlePageIncrement,
  handlePageDecrement
} from "../../helpers";
import { getAllCards } from "../../actions/cardsAll";
import { withRouter } from "react-router-dom";

class CardsAllContainer extends Component {
  componentDidMount() {
    this.props.getAllCards();
  }

  render() {
    return <CardsAll {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cards: filterCards(
      state.cardsAll.data,
      ownProps,
      state.currentCategory,
      state.currentTag
    ),
    isFetching: state.cardsAll.isFetching
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAllCards: () => {
      dispatch(getAllCards());
    },
    onPageIncrement: e => {
      e.preventDefault();
      let page = handlePageIncrement(ownProps);
      ownProps.history.push(`/cards?page=${page}`);
    },
    onPageDecrement: e => {
      e.preventDefault();
      let page = handlePageDecrement(ownProps);
      ownProps.history.push(`/cards?page=${page}`);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(CardsAllContainer)
);
