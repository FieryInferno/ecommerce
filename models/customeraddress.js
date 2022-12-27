/* eslint-disable require-jsdoc */
'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerAddress extends Model {
    static associate(models) {

    }
  }
  CustomerAddress.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    CustomerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Customers',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    address: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'CustomerAddress',
  });
  return CustomerAddress;
};
