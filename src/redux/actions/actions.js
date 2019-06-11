import {
  LOG_USER_OUT,
} from '../constants/actions';

export const logOut = () => {
  return {
    type: LOG_USER_OUT,
  };
};