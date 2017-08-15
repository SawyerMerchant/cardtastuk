import React, { Component } from "react";
import { connect } from "react-redux";
import Welcome from "../../components/Welcome";
// import { getCurrentCardInit } from "../../actions/currentCard";
// import { changeCardMessage } from "../../actions/cardMessage";
// import { setName } from "../../actions/userName";
import { withRouter } from "react-router-dom";
import { getParams } from "../../helpers";

class WelcomeContainer extends Component {
  componentDidMount() {
    let query = getParams(this.props.location.search);
    // this.props.getCurrentCard();
  }

  render() {
    return <Welcome {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCurrentCard: () => {
      // dispatch(getCurrentCardInit(ownProps.match.params.id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(WelcomeContainer)
);
