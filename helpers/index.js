const {body} = require('express-validator');

exports.notEmpty = (field) => {
  const response = [];

  field.map((field) => {
    const key = Object.keys(field);
    response.push(body(key[0]).notEmpty().withMessage(field[key[0]]));
  });

  return response;
};
