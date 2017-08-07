import React, { Component } from "react";
import { connect } from "react-redux";
import CardsAll from "../components/CardsAll";
import { filterCards } from "../helpers";
import { getAllCards } from "../actions/cardsAll";

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
    cards: filterCards(state.cardsAll.data, ownProps)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAllCards: () => {
      dispatch(getAllCards());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsAllContainer);
