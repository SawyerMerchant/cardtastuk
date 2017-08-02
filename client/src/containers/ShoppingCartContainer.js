import { connect } from "react-redux";
import ShoppingCart from "../components/ShoppingCart";
// import { uploadList } from "../actions/currentList";

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onUpload: (e, file, user) => {
//       const form = e.target;
//       const data = serialize(form, { hash: true });
//       dispatch(uploadList(file, data.list_name, user));
//     }
//   };
// };

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.shoppingCart
  };
};

const ShoppingCartContainer = connect(mapStateToProps, null)(
  ShoppingCart
);

export default ShoppingCartContainer;
