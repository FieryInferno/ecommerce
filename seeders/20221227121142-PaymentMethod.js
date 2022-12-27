'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('paymentmethods', [
      {
        name: 'Payment Method 1',
        is_active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Payment Method 2',
        is_active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Payment Method 3',
        is_active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('paymentmethods', null, {});
  },
};
