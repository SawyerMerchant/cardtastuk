import { connect } from "react-redux";
import Navigation from "../components/Navigation";

const mapStateToProps = state => {
  return {
    cart: state.shoppingCart,
    user: state.user.data
  };
};

const NavigationContainer = connect(mapStateToProps, null, null, {
  pure: false
})(Navigation);

export default NavigationContainer;
