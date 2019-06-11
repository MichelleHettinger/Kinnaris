import {
  CALCULATE_TOTAL_PLUS,
  CALCULATE_TOTAL_MINUS,
  CLEAR_CALC_PANEL,
  LOAD_USER_COMPOUND,
} from '../constants/actions';

const massCalculated = (state = 0, action) => {
  switch (action.type) {
    case CALCULATE_TOTAL_PLUS: {
      const newPlus = state + action.mass;

      return newPlus;
    }

    case CALCULATE_TOTAL_MINUS: {
      const newMinus = state - action.mass;

      if (newMinus < 0) {
        return 0;
      }

      return newMinus;
    }

    case CLEAR_CALC_PANEL: {
      return 0;
    }

    case LOAD_USER_COMPOUND: {
      return action.molecularWeight;
    }

    default:
      return state;
  }
};

export default massCalculated;
