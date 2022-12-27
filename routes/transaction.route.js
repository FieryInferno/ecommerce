const {store} = require('../controllers/transaction.controller');
const {notEmpty} = require('../helpers');

module.exports = (app) => {
  app.post(
      '/transaction',
      notEmpty([
        {products: 'Products cannot be null'},
        // {paymentMethod: 'Payment method cannot be null'},
        {customerAddress: 'Customer address cannot be null'},
      ]),
      store,
  );
};
