import { connect } from "react-redux";
import Auth from "../../components/Auth";
import serialize from "form-serialize";
import { registerUser, loginUser } from "../../actions/user";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLogin: (e, cardRedirectId) => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      dispatch(loginUser(data, ownProps.history, cardRedirectId));
    },
    onRegister: (e, organization, admin, cardRedirectId) => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      if (data.password === data.password_confirmation) {
        dispatch(
          registerUser(
            data,
            ownProps.history,
            organization,
            admin,
            cardRedirectId
          )
        );
      } else {
        ownProps.history.push("/auth?error=badPassword");
      }
    }
  };
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    organization: state.referrer.data.organization,
    admin: state.referrer.data.admin
  };
};

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth);

export default withRouter(AuthContainer);
