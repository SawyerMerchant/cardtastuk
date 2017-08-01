import React, { Component } from "react";
import { connect } from "react-redux";
import serialize from "form-serialize";
import Upload from "../components/Upload";
import { getCurrentCard } from "../actions/currentCard";
import { setCurrentList } from "../actions/currentList";
import { withRouter } from "react-router-dom";

class UploadContainer extends Component {
  componentDidMount() {
    this.props.getCurrentCard();
  }

  render() {
    return <Upload {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    card: state.currentCard.data,
    cardMessage: state.cardMessage || state.currentCard.data.default_greeting,
    isAuthenticated: state.user.isAuthenticated,
    lists: state.listsAll.data,
    currentList: state.currentList.data,
    user: state.user.data
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCurrentCard: () => {
      dispatch(getCurrentCard(ownProps.match.params.id));
    },
    setCurrentList: (e, lists) => {
      const form = e.target.parentNode.parentNode;
      const data = serialize(form, {hash: true});
      const currentList = lists.filter(list => list.id.toString() === data.list_id.toString());
      dispatch(setCurrentList(currentList[0]));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(UploadContainer)
);
