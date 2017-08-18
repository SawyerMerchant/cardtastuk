import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Loader from "../../components/Shared/Loader";

class RedirectContainer extends Component {
  componentDidMount() {
    this.props.redirectUser();
  }

  render() {
    return <Loader />;
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirectUser: async () => {
      let code = ownProps.match.params.code;

      let config = {
        method: "GET",
        headers: {
          code: code
        }
      };

      try {
        let response = await fetch("/api/v1/shortened_urls", config);

        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        let json = await response.json();
        ownProps.history.push(json.path_name);
      } catch (error) {
        console.log(error);
        ownProps.history.push("/");
      }
    }
  };
};

export default connect(null, mapDispatchToProps)(withRouter(RedirectContainer));
