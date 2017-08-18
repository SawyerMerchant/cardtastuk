import React, { Component } from "react";
import { connect } from "react-redux";
import Welcome from "../../components/Welcome";
import { getReferrer } from "../../actions/referrer";
import { withRouter } from "react-router-dom";
import { getParams } from "../../helpers";

class WelcomeContainer extends Component {
  componentDidMount() {
    let query = getParams(this.props.location.search);
    if (query.organization && query.admin) {
      this.props.getReferrer(query.organization, query.admin);
    }
  }

  render() {
    return <Welcome {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    organization: state.referrer.data.organization
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getReferrer: (organizationId, adminId) => {
      dispatch(getReferrer(organizationId, adminId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(WelcomeContainer)
);
