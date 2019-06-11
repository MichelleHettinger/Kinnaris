import fetch from 'isomorphic-fetch';
import { pendingTask, begin, end } from 'react-redux-spinner';
import {
  REQUEST_SAVE_COMPOUND,
  SAVE_COMPOUND_FAIL,
  SAVE_COMPOUND_SUCCESS,
} from '../../constants/actions';

const requestSaveCompound = (userObjId, newCompound) => {
  return {
    type: REQUEST_SAVE_COMPOUND,
    userObjId,
    newCompound,
    [pendingTask]: begin,
  };
};

export const finishSaveCompound = (userObj, newCompound) => {
  if (userObj === undefined) {
    return {
      type: SAVE_COMPOUND_FAIL,
      userObj,
      newCompound,
      receivedAt: Date.now(),
      [pendingTask]: end,
    };
  }

  return {
    type: SAVE_COMPOUND_SUCCESS,
    userObj,
    newCompound,
    receivedAt: Date.now(),
    [pendingTask]: end,
  };
};

export const saveCompound = (UserID, newCompound) => {
  const encodedUserID = encodeURIComponent(UserID);
  const newCompoundCopy = Object.assign({}, newCompound);
  const newCompoundString = JSON.stringify(newCompoundCopy).replace(/[,]/g, '^').replace(/\./g, '$');

  return (dispatch) => {
    dispatch(requestSaveCompound(UserID, newCompound));

    return fetch(`/saveCompound/${encodedUserID}/${newCompoundString}`, {
      method: 'POST',
    })
      .then(response => response.json())
      .then(userObj =>
        dispatch(finishSaveCompound(userObj, newCompound)),
      );
  };
};
