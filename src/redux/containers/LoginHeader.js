import { connect } from 'react-redux';
import { findUser } from '../actions/async/login';
import { registerUser } from '../actions/async/register';
import { logOut } from '../actions/elements';
import LoginHeader from '../components/LoginHeader';

const mapStateToProps = (state) => {
  return {
    isLogged: state.user.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logUserOut: () => {
      dispatch(logOut());
    },
    logUserIn: (email, password) => {
      dispatch(findUser(email, password));
    },
    signUserUp: (email, password) => {
      dispatch(registerUser(email, password));
    },
  };
};

const LoginHeaderDivs = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginHeader);

export default LoginHeaderDivs;
