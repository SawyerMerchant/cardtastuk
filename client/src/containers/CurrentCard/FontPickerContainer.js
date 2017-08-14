import { connect } from "react-redux";
import FontPicker from "../../components/CurrentCard/FontPicker";
import { setFont } from "../../actions/cardFont";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeFont: e => {
      e.preventDefault();
      let font = e.target.value;
      dispatch(setFont(font));
    }
  };
};

const FontPickerContainer = connect(null, mapDispatchToProps)(FontPicker);

export default FontPickerContainer;
