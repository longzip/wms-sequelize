'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OrderLines', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      orderId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      userId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      costcenterId: {
        type: Sequelize.UUID
      },
      unitId: {
        type: Sequelize.STRING
      },
      companyId: {
        type: Sequelize.UUID
      },
      code: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.FLOAT
      },
      title: {
        type: Sequelize.STRING
      },
      note: {
        type: Sequelize.TEXT
      },
      origin: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.STRING
      },
      startedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      finishedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('OrderLines');
  }
};