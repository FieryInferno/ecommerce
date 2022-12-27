'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('customers', [{
      id: 1,
      customer_name: 'Customer 1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);

    await queryInterface.bulkInsert('customeraddresses', [{
      id: 1,
      CustomerId: 1,
      address: 'Address 1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('customers', null, {});
    await queryInterface.bulkDelete('customeraddresses', null, {});
  },
};
