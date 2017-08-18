import { connect } from "react-redux";
import { endUserSession } from "../../actions/user";
import Navigation from "../../components/Shared/Navigation";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return {
    cart: state.shoppingCart,
    user: state.user.data
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLogout: (e, user) => {
      e.preventDefault();
      dispatch(endUserSession(user, ownProps.history));
    }
  };
};

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(Navigation);

export default withRouter(NavigationContainer);
