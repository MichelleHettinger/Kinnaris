import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Modal, Form } from 'react-bootstrap';

let email;
let password;

const LoginHeader = ({ logUserIn, isLogged, signUserUp, logUserOut }) => {
  const loginHeader = (
    <Col sm={4} id='loginHeader'>
      <Form>
        <Form.Group id='emailFormGroup'>
          <Col sm={9} id='emailTextInputDiv'>
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
          </Col>
          <Col sm={3} id='emailButtonInputDiv'>
            <input
              id='loginButton'
              type='button'
              value='Log In'
              className='btn btn-success btn-sm'
              onClick={ () => logUserIn(email.value, password.value) }
            />
          </Col>
        </Form.Group>
        <Form.Group id='passwordFormGroup'>
          <Col sm={9} id='passwordTextInputDiv'>
            <Form.Control
              id='passwordInput'
              type='password'
              className='input-md'
              placeholder='Password'
              ref={ (node) => {
                password = node;
              }}
            />
          </Col>
          <Col sm={3} id='passwordButtonInputDiv'>
            <Form.Control
              id='registerButton'
              type='button'
              value='Register'
              className='btn btn-primary btn-sm'
              onClick={ () => signUserUp(email.value, password.value) }
            />
          </Col>
        </Form.Group>
      </Form>
    </Col>
  );

  const userHeader = (
    <Col sm={4} id='userAccountButtons'>
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
        <Modal.Dialog id='accountModalDialog' role='document'>
          <Modal.Header id='accountModalHeader'>
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
          </Modal.Header>
          <Modal.Body id='accountModalBody'>
            <Row id='accountModalRow'>
              <div id='accountModalForm' className='col-sm-offset-2'>
                <div id='accountFormInlineName' className='form-inline'>
                  <div id='accountFormGroupName' className='form-group'>
                    <span htmlFor='name'>Name:</span>
                    <p>USERNAMEVARIABLE</p>
                  </div>
                </div>
                <div id='accountFormInlineEmail' className='form-inline'>
                  <div id='accountFormGroupEmail' className='form-group'>
                    <span htmlFor='email'>Email:</span>
                    <p>USEREMAILVARIABLE</p>
                  </div>
                </div>
                <div id='accountFormInlineNewName' className='form-inline'>
                  <div id='accountFormGroupNewName' className='form-group'>
                    <label htmlFor='newname'>New Name:
                      <input
                        id='accountFormNewNameInput'
                        type='text'
                        className='form-control input-md'
                        //placeholder={this.state.user.displayName}
                        //onChange={text => this.grabNewName(text.target.value)}
                      />
                    </label>
                  </div>
                </div>
                <div id='accountFormInlineNewEmail' className='form-inline'>
                  <div id='accountFormGroupNewEmail' className='form-group'>
                    <label htmlFor='newemail'>New Email:
                      <input
                        id='accountFormNewEmailInput'
                        type='text'
                        className='form-control input-md'
                        //placeholder={this.state.user.email}
                        //onChange={text => this.grabNewEmail(text.target.value)}
                      />
                    </label>
                  </div>
                  <input
                    id='accountFormUpdateButton'
                    type='button'
                    value='Submit'
                    className='btn btn-primary btn-sm'
                  />
                </div>
              </div>
            </Row>
          </Modal.Body>
          <Modal.Footer id='accountModalFooter'>
            <p>Need to reset your password?</p>
            <button
              id='resetPasswordButton'
              type='button'
              className='btn btn-secondary btn-xs center-block'
              //onClick={ this.resetPassword }
            >Click Here</button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </Col>
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
