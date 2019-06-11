import { connect } from 'react-redux';
import { pinElement, calculateTotal } from '../actions/elements';
import ElementsPanel from '../components/ElementsPanel';

const mapStateToProps = (state) => {
  return {
    elementsFound: state.elementsFound,
  };
};

//
const mapDispatchToProps = (dispatch) => {
  return {
    onElementClick: (element) => {
      //console.log(element)
      dispatch(pinElement(element));
      dispatch(calculateTotal(element.mass, 'PLUS'));
    },
  };
};

const ElementDivs = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ElementsPanel);

export default ElementDivs;
