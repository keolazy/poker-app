// Stateless Functional Component 
import Validator from "Validator";
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if(Validator.isNull(data.identifier)) {
    errors.identifier = 'This username/email field is required';
  }
  if(Validator.isNull(data.password)) {
    errors.identifier = 'This password field is required';
  }

  return {
    errors,
    isValid, isEmpty(errors)
  };
}

