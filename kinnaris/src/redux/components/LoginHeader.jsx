import React from 'react';
import PropTypes from 'prop-types';

let email;
let password;

const LoginHeader = ({ logUserIn, isLogged, signUserUp, logUserOut }) => {
  const loginHeader = (
    <div id='loginHeader' className='col-sm-4'>
      <div id='emailFormGroup' className='form-group'>
        <div id='emailTextInputDiv' className='col-sm-9'>
          <input
            id='emailInput'
            type='text'
            className='form-control input-md'
            placeholder='Email Address'
            ref={ (node) => {
              //Node refers to this specific element (this input element)
              email = node;
            } }
          />
        </div>
        <div id='emailButtonInputDiv' className='col-sm-3'>
          <input
            id='loginButton'
            type='button'
            value='Log In'
            className='btn btn-success btn-sm'
            onClick={ () => logUserIn(email.value, password.value) }
          />
        </div>
      </div>
      <div id='passwordFormGroup' className='form-group'>
        <div id='passwordTextInputDiv' className='col-sm-9'>
          <input
            id='passwordInput'
            type='password'
            className='form-control input-md'
            placeholder='Password'
            ref={ (node) => {
              //Node refers to this specific element (this input element)
              password = node;
            } }
          />
        </div>
        <div id='passwordButtonInputDiv' className='col-sm-3'>
          <input
            id='registerButton'
            type='button'
            value='Register'
            className='btn btn-primary btn-sm'
            onClick={ () => signUserUp(email.value, password.value) }
          />
        </div>
      </div>
    </div>
  );

  const userHeader = (
    <div id='userAccountButtons' className='col-sm-4'>
      <div id='userAccountButtonsDiv' className='pull-right'>
        <button
          id='myAccountButton'
          type='button'
          data-toggle='modal'
          data-target='#accountModal'
          className='btn btn-primary btn-sm'
        >MyAccount</button>
        <input
          id='logOutButton'
          type='button'
          value='Log Out'
          className='btn btn-warning btn-sm'
          onClick={ () => { logUserOut(); } }
        />
      </div>
      <div id='accountModal' className='modal fade'>
        <div id='accountModalDialog' className='modal-dialog' role='document'>
          <div id='accountModalContent' className='modal-content'>
            <div id='accountModalHeader' className='modal-header'>
              <button
                id='accountModalCloseButton'
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
              <h3 className='modal-title'>Your Account!</h3>
            </div>
            <div id='accountModalBody' className='modal-body'>
              <div id='accountModalRow' className='row'>
                <div id='accountModalForm' className='col-sm-offset-2'>
                  <div id='accountFormInlineName' className='form-inline'>
                    <div id='accountFormGroupName' className='form-group'>
                      <label htmlFor='name'>Name:</label>
                      <p>USERNAMEVARIABLE</p>
                    </div>
                  </div>
                  <div id='accountFormInlineEmail' className='form-inline'>
                    <div id='accountFormGroupEmail' className='form-group'>
                      <label htmlFor='email'>Email:</label>
                      <p>USEREMAILVARIABLE</p>
                    </div>
                  </div>
                  <div id='accountFormInlineNewName' className='form-inline'>
                    <div id='accountFormGroupNewName' className='form-group'>
                      <label htmlFor='newname'>New Name:</label>
                      <input
                        id='accountFormNewNameInput'
                        type='text'
                        className='form-control input-md'
                        //placeholder={this.state.user.displayName}
                        //onChange={text => this.grabNewName(text.target.value)}
                      />
                    </div>
                  </div>
                  <div id='accountFormInlineNewEmail' className='form-inline'>
                    <div id='accountFormGroupNewEmail' className='form-group'>
                      <label htmlFor='newemail'>New Email:</label>
                      <input
                        id='accountFormNewEmailInput'
                        type='text'
                        className='form-control input-md'
                        //placeholder={this.state.user.email}
                        //onChange={text => this.grabNewEmail(text.target.value)}
                      />
                    </div>
                    <input
                      id='accountFormUpdateButton'
                      type='button'
                      value='Submit'
                      className='btn btn-primary btn-sm'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id='accountModalFooter' className='modal-footer'>
              <p>Need to reset your password?</p>
              <button
                id='resetPasswordButton'
                type='button'
                className='btn btn-secondary btn-xs center-block'
                //onClick={ this.resetPassword }
              >Click Here</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (isLogged === false) {
    return loginHeader;
  }
  return userHeader;
};

LoginHeader.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  logUserIn: PropTypes.func.isRequired,
  signUserUp: PropTypes.func.isRequired,
  logUserOut: PropTypes.func.isRequired,
};

export default LoginHeader;
