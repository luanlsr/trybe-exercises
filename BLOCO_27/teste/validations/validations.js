const Joi = require('joi');

const schema = Joi.object = {
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required()
        .messages({
          'string.alphanum': 'alphanum',
          'string.min': 'min 3'
        }),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
}

const validateP = (username, password) => schema.validade({
  username, 
  password
})


module.exports = {validateP}
