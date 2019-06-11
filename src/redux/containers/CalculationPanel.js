import { connect } from 'react-redux';
import { doPlus, doMinus, calculateTotal, doParenthesis } from '../actions/elements';
import CalculationPanel from '../components/CalculationPanel';

const mapStateToProps = (state) => {
  return {
    elementsClicked: state.elementsClicked,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPlusClick: (id, mass) => {
      dispatch(doPlus(id));
      dispatch(calculateTotal(mass, 'PLUS'));
    },
    onMinusClick: (id, multiplier, mass) => {
      dispatch(doMinus(id, multiplier));
      dispatch(calculateTotal(mass, 'MINUS'));
    },
    onElementClick: (id) => {
      dispatch(doParenthesis(id));
    },
  };
};

const CalcElementDivs = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalculationPanel);

export default CalcElementDivs;
