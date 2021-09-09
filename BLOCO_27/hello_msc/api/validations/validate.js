var expressValidations = require('express-validations')

const {
  isValidFirstname,
  isValidMiddlename,
  isValidLastname,
  isLength,
} = expressValidations

const errors_messages = {
  firstName_invalid: 'first name is not valid',
  middleName_invalid: 'middle name is not valid',
  lastName_invalid: 'last name is not valid',
  firstName_length: 'first name should have length three'
}

const http_status_code = {
  HTTP_INVALID_STATUS: 422,
}

const { HTTP_INVALID_STATUS } = http_status_code
const { firstName_invalid, middleName_invalid, lastName_invalid, firstName_length } = errors_messages


const validate = (firstName, middleName, lastName) => {
  switch (true) {
    case isValidFirstname(firstName): return { code: HTTP_INVALID_STATUS, message: firstName_invalid}
    case isLength(firstName, 3, null ): return {code: HTTP_INVALID_STATUS, message: firstName_length}
    case isValidMiddlename(middleName): return { code: HTTP_INVALID_STATUS, message: middleName_invalid}
    case isValidLastname(lastName): return { code: HTTP_INVALID_STATUS, message: lastName_invalid}
  
    default: return {firstName, middleName, lastName}
  }

}

module.exports = validate;
