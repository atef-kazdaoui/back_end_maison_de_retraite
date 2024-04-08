const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const PassionModel = sequelize.define(
  'PassionModel',
  {
    id_passion: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {}
);

module.exports = PassionModel;
