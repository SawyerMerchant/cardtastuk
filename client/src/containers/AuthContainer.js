import { connect } from "react-redux";
import Auth from "../components/Auth";
import serialize from "form-serialize";
import { registerUser, loginUser } from "../actions/user";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLogin: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      dispatch(loginUser(data, ownProps.history));
    },
    onRegister: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      if (data.password === data.password_confirmation) {
        dispatch(registerUser(data, ownProps.history));
      } else {
        ownProps.history.push("/auth?error=bad_password");
      }
    }
  };
};

const AuthContainer = connect(null, mapDispatchToProps)(Auth);

export default withRouter(AuthContainer);
