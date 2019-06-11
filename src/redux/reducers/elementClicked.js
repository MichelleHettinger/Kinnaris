import {
  DO_PLUS,
  DO_MINUS,
  DO_PAREN_A,
  DO_PAREN_B,
  REMOVE_ELEMENT,
  PIN_ELEMENT,
  CLEAR_CALC_PANEL,
  LOAD_USER_COMPOUND,
} from '../constants/actions';


let parenCount = 0;

const editParen = (state = {}, action) => {
  switch (action.type) {
    case DO_PAREN_A: {
      //If the element being mapped wasn't what the user clicked.
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        clicked: true,
      });
    }
    case DO_PAREN_B: {
      //If the element being mapped is what the user clicked.
      //If it has been clicked, make it false. Otherwise make it true.
      if (state.id === action.id) {
        return Object.assign({}, state, {
          clicked: true,
        });
      }

      return state;
    }

    case 'MAKE_PAREN': {
      const doCount = (clicked) => {
        if (clicked === true) {
          parenCount += 1;
        }
      };

      doCount(state.clicked);

      if (parenCount === 1) {
        return Object.assign({}, state, {
          parenId: action.parenID,
          clicked: false,
        });
      }

      if (parenCount === 2) {
        parenCount = 0;

        return Object.assign({}, state, {
          parenId: action.parenID,
          clicked: false,
        });
      }

      return state;
    }

    case 'DONT_MAKE_PAREN': {
      return Object.assign({}, state, {
        clicked: false,
      });
    }

    default:
      return state;
  }
};

const editElement = (state = {}, action) => {
  switch (action.type) {

    case PIN_ELEMENT: {
      return {
        id: action.id,
        mass: action.mass,
        acronym: action.acronym,
        multiplier: 1,
        parenId: -1,
        clicked: false,
      };
    }

    case DO_PLUS: {
      //If the element being mapped wasn't what the user clicked, return state.
      //Otherwise, create and return a new object that is exactly like state,
      //except with the multiplier incremented by 1

      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        multiplier: state.multiplier + 1,
      });
    }

    case DO_MINUS: {
      //If the element being mapped wasn't what the user clicked return state.
      //Otherwise, create and return a new object that is exactly like state,
      //except with the multiplier decremented by 1

      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        multiplier: state.multiplier - 1,
      });
    }

    case REMOVE_ELEMENT: {
      //If the element being mapped wasn't what the user clicked.
      if (state.id !== action.id) {
        return state;
      }
      //To find element in state array
      return 1;
    }

    case DO_PAREN_A: {
      //If the element being mapped wasn't what the user clicked.
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        clicked: true,
      });
    }

    case DO_PAREN_B: {
      //If the element being mapped is what the user clicked.
      //If it has been clicked, make it false. Otherwise make it true.
      if (state.id === action.id) {
        return Object.assign({}, state, {
          clicked: true,
        });
      }

      return state;
    }

    case 'MAKE_PAREN': {
      const doCount = (clicked) => {
        if (clicked === true) {
          parenCount += 1;
        }
      };

      doCount(state.clicked);

      if (parenCount === 1) {
        return Object.assign({}, state, {
          parenId: 5,
          clicked: false,
        });
      }

      if (parenCount === 2) {
        parenCount = 0;

        return Object.assign({}, state, {
          parenId: 5,
          clicked: false,
        });
      }

      return state;
    }

    case 'DONT_MAKE_PAREN': {
      return Object.assign({}, state, {
        clicked: false,
      });
    }

    default:
      return state;
  }
};

const elementClicked = (state = [], action) => {
  //If state doesn't exist, it becomes an empty array.
  //If there is an action type called 'PIN_ELEMENT', append the selected element to the array.
  //Otherwise return original/previous state
  switch (action.type) {
    case PIN_ELEMENT: {
      //console.log(state)
      //console.log([...state, editElement(undefined, action)])

      //Return an array containing the contents of state and push action.element into that array
      return [...state, editElement(undefined, action)];
    }

    case DO_PLUS: {
      //Map over all elements and make changes as needed
      return state.map(t => editElement(t, action));
    }

    case DO_MINUS: {
      //Map over all elements and make changes as needed
      return state.map(t => editElement(t, action));
    }

    case REMOVE_ELEMENT: {
      //Map over all elements and make changes as needed
      const removedState = state.map(t => editElement(t, action));
      removedState.splice(removedState.indexOf(1), 1);

      //console.log(state)
      //console.log(removedState)

      return removedState;
    }

    case DO_PAREN_A: {
      //Map over all elements and make changes as needed
      const parenAState = state.map(t => editParen(t, action));

      return parenAState;
    }

    case DO_PAREN_B: {
      //Map over all elements and make changes as needed
      const parenBState = state.map(t => editParen(t, action));

      const getClickCount = parenBState.map((t) => {
        if (t.clicked) {
          return 1;
        }
        return 0;
      });

      const willMake = (click) => {
        let count = 0;
        for (const value of click) {
          if (value === 1) {
            count += 1;
          }
        }
        if (count === 2) {
          return true;
        }

        return false;
      };

      const changeToMake = (willBeMade) => {
        let newAction;

        if (willBeMade === true) {
          newAction = Object.assign({}, action, {
            type: 'MAKE_PAREN',
          });

          return parenBState.map(t => editParen(t, newAction));
        }

        newAction = Object.assign({}, action, {
          type: 'DONT_MAKE_PAREN',
        });

        return parenBState.map(t => editParen(t, newAction));
      };

      const finalParenState = changeToMake(willMake(getClickCount));

      // console.log(state)
      // console.log(parenBState)
      // console.log(getClickCount)
      // console.log(willMake(getClickCount))
      //console.log(finalParenState);

      return finalParenState;
    }

    case CLEAR_CALC_PANEL: {
      return [];
    }

    case LOAD_USER_COMPOUND: {
      return action.elementsClicked;
    }

    default:
      return state;
  }
};

export default elementClicked;
