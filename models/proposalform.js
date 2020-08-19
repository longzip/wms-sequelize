'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProposalForm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ProposalForm.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    number: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      allowNull: false,
      type: DataTypes.UUID,
    },
    approvalableId: {
      allowNull: false,
      type: DataTypes.UUID,
    },
    approvalableType: {
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
    status: {
      type: DataTypes.STRING
    },
    showMessages: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    isDisable: {
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
    modelName: 'ProposalForm',
  });
  return ProposalForm;
};