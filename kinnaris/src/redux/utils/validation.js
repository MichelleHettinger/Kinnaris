import validator from 'validator';
//Input Validation returns bool

const validateEmailPass = (email, password) => {
  const isEmail = validator.isEmail(email);
  const isEmailLengthOK = validator.isByteLength(email, {min: 7, max: 50});
  const isPasswordLengthOK = validator.isByteLength(password, {min: 5, max: 15});

  if (!isEmailLengthOK || !isPasswordLengthOK || !isEmail) {
    return false;
  }

  return true;
};

export default validateEmailPass;
