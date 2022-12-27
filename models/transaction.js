/* eslint-disable require-jsdoc */
'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      this.belongsToMany(models.Product, {
        through: 'transactionproducts',
        as: 'products',
      });
      this.belongsToMany(models.PaymentMethod, {
        through: 'transactionpaymentmethods',
        as: 'paymentMethods',
      });
    }
  }
  Transaction.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    customerAddress: {
      type: DataTypes.INTEGER,
      references: {
        model: 'CustomerAddresses',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};
