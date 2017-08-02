import { connect } from "react-redux";
import ListUpload from "../components/ListUpload";
import serialize from "form-serialize";
import { uploadList } from "../actions/currentList";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpload: (e, user) => {
      e.preventDefault();
      console.log(e.currentTarget.result);
      const form = e.target;
      const data = serialize(form, { hash: true });
      dispatch(uploadList(e.currentTarget.result, data.list_name, user));
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

export default ListUploadContainer;
