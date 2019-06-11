import fetch from 'isomorphic-fetch';
import { pendingTask, begin, end } from 'react-redux-spinner';
import {
  REQUEST_DELETE_COMPOUND,
  DELETE_COMPOUND_FAIL,
  DELETE_COMPOUND_SUCCESS,
} from '../../constants/actions';

const requestDeleteCompound = (userObjId, oldCompound) => {
  return {
    type: REQUEST_DELETE_COMPOUND,
    userObjId,
    oldCompound,
    [pendingTask]: begin,
  };
};

export const finishDeleteCompound = (userObj, oldCompound) => {
  if (userObj === undefined) {
    return {
      type: DELETE_COMPOUND_FAIL,
      userObj,
      oldCompound,
      receivedAt: Date.now(),
      [pendingTask]: end,
    };
  }

  return {
    type: DELETE_COMPOUND_SUCCESS,
    userObj,
    oldCompound,
    receivedAt: Date.now(),
    [pendingTask]: end,
  };
};

export const deleteCompound = (UserID, oldCompoundName) => {
  const encodedUserID = encodeURIComponent(UserID);
  const encodedCompoundName = encodeURIComponent(oldCompoundName);

  return (dispatch) => {
    dispatch(requestDeleteCompound(UserID, oldCompoundName));

    return fetch(`/deleteCompound/${encodedUserID}/${encodedCompoundName}`, {
      method: 'POST',
    })
      .then(response => response.json())
      .then(userObj =>
        dispatch(finishDeleteCompound(userObj, oldCompoundName)),
      );
  };
};
