import fetch from 'isomorphic-fetch';
import phs from 'password-hash-and-salt';
import { pendingTask, begin, end } from 'react-redux-spinner';
import validateEmailPass from '../../utils/validation';
import {
  REQUEST_REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
} from '../../constants/actions';

const requestRegisterUser = (email, password) => {
  return {
    type: REQUEST_REGISTER_USER,
    email,
    password,
    [pendingTask]: begin,
  };
};

export const finishRegisterUser = (email, userWithToken) => {
  if (userWithToken.userObj.email === undefined) {
    return {
      type: REGISTER_USER_FAIL,
      receivedAt: Date.now(),
      [pendingTask]: end,
    };
  }

  return {
    type: REGISTER_USER_SUCCESS,
    userObj: userWithToken.userObj,
    receivedAt: Date.now(),
    [pendingTask]: end,
  };
};

export const registerUser = (email, password) => {
  if (!validateEmailPass(email, password)) {
    return () => {
      console.log('Incomplete Form');
    };
  }

  return (dispatch) => {
    phs(password).hash((err, hash) => {
      if (err) { throw new Error('Could not generate hash.'); }

      const encodedHash = encodeURIComponent(hash);
      const encodedEmail = encodeURIComponent(email);

      dispatch(requestRegisterUser(email, hash));

      return fetch(`/register/${encodedEmail}/${encodedHash}`, {
        method: 'POST',
      })
        .then(response => response.json())
        .then(userWithToken =>
          dispatch(finishRegisterUser(email, userWithToken)),
        );
    });
  };
};
