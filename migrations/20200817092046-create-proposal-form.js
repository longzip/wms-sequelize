'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProposalForms', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      number: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      userId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      approvalableId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      approvalableType: {
        type: Sequelize.STRING
      },
      costcenterId: {
        type: Sequelize.UUID
      },
      companyId: {
        type: Sequelize.UUID
      },
      title: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      showMessages: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      isDisable: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ProposalForms');
  }
};