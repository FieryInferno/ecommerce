const {Transaction} = require('../models');
const {validationResult} = require('express-validator');

exports.store = async (req, res) => {
  let status = 'Failed';
  let message;
  let data = {};
  let code = 400;

  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      status = 'Bad Request';
      message = errors;
      data = {};
    } else {
      code = 201;
      status = 'Success';
      message = 'Success';
      const {body} = req;

      data = await Transaction.create(req.body);

      if (data) {
        await data.addProduct(body.products);
        await data.addPaymentMethod(body.paymentMethods);
      }

      data = await Transaction.findByPk(data.id, {
        include: ['products', 'paymentMethods'],
      });
    }
  } catch (error) {
    console.log(error);
    code = 400;
    status = 'Failed';
    message = error;
  } finally {
    return res.status(code).send({status, message, data});
  }
};
