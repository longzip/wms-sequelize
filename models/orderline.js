'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderLine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  OrderLine.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    orderId: {
      allowNull: false,
      type: DataTypes.UUID,
    },
    userId: {
      allowNull: false,
      type: DataTypes.UUID,
    },
    costcenterId: {
      type: DataTypes.UUID
    },
    unitId: {
      type: DataTypes.UUID
    },
    companyId: {
      type: DataTypes.UUID
    },
    code: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    quantity: {
      type: DataTypes.FLOAT
    },
    title: {
      type: DataTypes.STRING
    },
    note: {
      type: DataTypes.TEXT
    },
    status: {
      type: DataTypes.STRING
    },
    startedAt: {
      allowNull: true,
      type: DataTypes.DATE
    },
    finishedAt: {
      allowNull: true,
      type: DataTypes.DATE
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    paranoid: true,
    modelName: 'OrderLine',
  });
  return OrderLine;
};