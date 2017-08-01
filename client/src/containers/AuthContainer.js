import { connect } from "react-redux";
import Auth from "../components/Auth";
import serialize from "form-serialize";
import { registerUser, loginUser } from "../actions/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLogin: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form);
      dispatch(loginUser(data));
    },
    onRegister: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form);
      console.log(data);
      dispatch(registerUser(data));
    }
  };
};

const AuthContainer = connect(null, mapDispatchToProps)(
  Auth
);

export default AuthContainer;
