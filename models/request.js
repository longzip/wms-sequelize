'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Request.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    userId: {
      allowNull: false,
      type: DataTypes.UUID,
    },
    orderableId: {
      allowNull: false,
      type: DataTypes.UUID,
    },
    orderableType: {
      type: DataTypes.STRING
    },
    costcenterId: {
      type: DataTypes.UUID
    },
    companyId: {
      type: DataTypes.UUID
    },
    title: {
      type: DataTypes.STRING
    },
    position: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    showMessages: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    status: {
      type: DataTypes.STRING
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
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
    modelName: 'Request',
  });
  return Request;
};