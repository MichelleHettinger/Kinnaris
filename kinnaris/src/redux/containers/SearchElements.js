import { connect } from 'react-redux';
import { searchForElements } from '../actions/elements';
import SearchElements from '../components/SearchElements';

const mapDispatchToProps = (dispatch) => {
  return {
    onKeyboardInput: (value) => {
      dispatch(searchForElements(value));
    },
  };
};

const SearchElementsDiv = connect(
  null,
  mapDispatchToProps,
)(SearchElements);

export default SearchElementsDiv;
