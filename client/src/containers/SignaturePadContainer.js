import { connect } from "react-redux";
import SignaturePad from "../components/SignaturePad";
import { setSignature, clearSignature } from "../actions/signature";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSetSignature: signature => {
      dispatch(setSignature(signature));
    },
    onClearSignature: () => {
      dispatch(clearSignature());
    }
  };
};

const SignaturePadContainer = connect(null, mapDispatchToProps)(SignaturePad);

export default SignaturePadContainer;
