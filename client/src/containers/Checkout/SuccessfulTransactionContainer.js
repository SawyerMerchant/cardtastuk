import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SuccessfulTransaction from "../../components/Checkout/SuccessfulTransaction";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated
  };
};

const SuccessfulTransactionContainer = connect(mapStateToProps, null)(
  SuccessfulTransaction
);

export default withRouter(SuccessfulTransactionContainer);
