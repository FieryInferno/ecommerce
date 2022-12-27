/* eslint-disable require-jsdoc */
'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {

    }
  }
  Customer.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    customer_name: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};
