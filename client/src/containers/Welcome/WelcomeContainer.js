import React, { Component } from "react";
import { connect } from "react-redux";
import Welcome from "../../components/Welcome";
import { getReferrer } from "../../actions/referrer";
import { withRouter } from "react-router-dom";
import { getParams, parseSubdomain } from "../../helpers";

class WelcomeContainer extends Component {
  componentDidMount() {
    let query = getParams(this.props.location.search);
    let subdomain = parseSubdomain();
    if (subdomain && query.id) {
      this.props.getReferrer(subdomain, query.id);
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
    getReferrer: (subdomain, adminId) => {
      dispatch(getReferrer(subdomain, adminId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(WelcomeContainer)
);
