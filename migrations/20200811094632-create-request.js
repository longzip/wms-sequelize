'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Requests', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      userId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      nextId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      orderableId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      orderableType: {
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
      position: {
        type: Sequelize.STRING
      },
      name: {
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
      completed: {
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
    await queryInterface.dropTable('Requests');
  }
};