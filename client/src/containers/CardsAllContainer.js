import React, { Component } from "react";
import { connect } from "react-redux";
import CardsAll from "../components/CardsAll";
import { getAllCards } from "../actions/cards";

class CardsAllContainer extends Component {
  componentDidMount() {
    this.props.getAllCards();
  }

  render() {
    return <CardsAll {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards.data
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
