'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
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
      costcenterId: {
        type: Sequelize.UUID
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
      note: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.STRING
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
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};