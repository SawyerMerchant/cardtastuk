import { connect } from "react-redux";
import Filterables from "../components/Filterables";
import { setCurrentTag } from "../actions/currentTag";
import { setCurrentCategory } from "../actions/currentCategory";

const mapStateToProps = state => {
  return {
    categories: state.categoriesAll,
    tags: state.tagsAll
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeTag: e => {
      let tag = e.target.value;
      dispatch(setCurrentTag(tag));
    },
    onChangeCategory: e => {
      let category = e.target.value;
      dispatch(setCurrentCategory(category));
    }
  };
};

const FilterablesContainer = connect(mapStateToProps, mapDispatchToProps)(
  Filterables
);

export default FilterablesContainer;
