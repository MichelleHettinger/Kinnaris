import es6Promise from 'es6-promise';
import fetch from 'isomorphic-fetch';
import CryptoJS from 'crypto-js';
import { pendingTask, begin, end } from 'react-redux-spinner';
import {
  REQUEST_USER,
  RECEIVE_USER_FAIL,
  RECEIVE_USER_SUCCESS,
} from '../../constants/actions';
import validateEmailPass from '../../utils/validation';

es6Promise.polyfill();

const requestUser = (email, password) => {
  return {
    type: REQUEST_USER,
    email,
    password,
    [pendingTask]: begin,
  };
};

export const receiveUser = (user) => {
  console.log(user);
  if (user.didSucceed === false) {
    return {
      type: RECEIVE_USER_FAIL,
      receivedAt: Date.now(),
      [pendingTask]: end,
    };
  }

  return {
    type: RECEIVE_USER_SUCCESS,
    userObj: user.userObj,
    receivedAt: Date.now(),
    [pendingTask]: end,
  };
};

export const findUser = (email, password) => {
  if (!validateEmailPass(email, password)) {
    return () => {
      console.log('Incomplete Form');
    };
  }

  const encryptedPassword = CryptoJS.AES.encrypt(password, 'michelle is totally awesome').toString();
  //const encodedEmail = encodeURIComponent(email);
  //const encodedPassword = encodeURIComponent(encryptedPassword);

  return (dispatch) => {
    dispatch(requestUser(email, encryptedPassword));

    return fetch('/authenticate/', {
      method: 'GET',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(user =>
      dispatch(receiveUser(user)),
    );
  };
};