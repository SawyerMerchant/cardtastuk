import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    let isUploadingList = window.location.href.includes("/upload?status");
    if (this.props.location !== prevProps.location && !isUploadingList) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default withRouter(ScrollToTop);
