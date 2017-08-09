import { connect } from "react-redux";
import serialize from "form-serialize";
import { withRouter } from "react-router-dom";
import ListUpload from "../components/ListUpload";
import { uploadList } from "../actions/currentList";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpload: (e, file, user) => {
      const form = e.target;
      const data = serialize(form, { hash: true });
      dispatch(uploadList(file, data.list_name, user, ownProps.history));
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.data
  };
};

const ListUploadContainer = connect(mapStateToProps, mapDispatchToProps)(
  ListUpload
);

export default withRouter(ListUploadContainer);
