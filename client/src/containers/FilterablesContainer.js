import { connect } from "react-redux";
import Filterables from "../components/Filterables";
import { registerUser, loginUser } from "../actions/user";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return {
    categories: state.categoriesAll,
    tags: state.tagsAll
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLogin: e => {
    },
    onRegister: e => {
    }
  };
};



const FilterablesContainer = connect(mapStateToProps, mapDispatchToProps)(Filterables);

export default withRouter(FilterablesContainer);
