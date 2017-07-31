import { connect } from "react-redux";
import Upload from "../components/Upload";

const mapStateToProps = state => {
  return {
    card: state.currentCard.data,
    cardMessage: state.cardMessage
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
};

const UploadContainer = connect(mapStateToProps, mapDispatchToProps)(Upload);

export default UploadContainer;
