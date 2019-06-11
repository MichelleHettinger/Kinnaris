import {
  REQUEST_USER,
  RECEIVE_USER_FAIL,
  RECEIVE_USER_SUCCESS,
  REQUEST_REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  REQUEST_SAVE_COMPOUND,
  SAVE_COMPOUND_FAIL,
  SAVE_COMPOUND_SUCCESS,
  REQUEST_DELETE_COMPOUND,
  DELETE_COMPOUND_FAIL,
  DELETE_COMPOUND_SUCCESS,
  LOG_USER_OUT,
} from '../constants/actions';

const user = (state = {
  isFetching: false,
  isLogged: false,
  details: {_id: '', compounds: []},
}, action) => {
  switch (action.type) {
    case REQUEST_DELETE_COMPOUND:
    case REQUEST_SAVE_COMPOUND:
    case REQUEST_REGISTER_USER:
    case REQUEST_USER: {
      return Object.assign({}, state, {
        isFetching: true,
      });
    }
    case DELETE_COMPOUND_SUCCESS:
    case SAVE_COMPOUND_SUCCESS:
    case REGISTER_USER_SUCCESS:
    case RECEIVE_USER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isLogged: true,
        details: action.userObj,
        lastUpdated: action.receivedAt,
      });

    case DELETE_COMPOUND_FAIL:
    case SAVE_COMPOUND_FAIL:
    case REGISTER_USER_FAIL:
    case RECEIVE_USER_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        isLogged: false,
        lastUpdated: action.receivedAt,
      });

    case LOG_USER_OUT:
      return Object.assign({}, state, {
        isLogged: false,
        details: {_id: '', compounds: []},
      });

    default: {
      return state;
    }
  }
};

export default user;
