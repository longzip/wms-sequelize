'use strict';
const {
  v4: uuidv4
} = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('ApprovalSteps', [{
        id: uuidv4(),
        isDisable: false,
        userId: '12T0799',
        approvalableId: '0ff0c991-6f94-4430-b519-01418ad5d7c8',
        approvalableType: 'order',
        name: 'Cấn Đặng Phương',
        position: 'Trưởng phòng',
        showMessages: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        isDisable: false,
        userId: '11T1249',
        approvalableId: '0ff0c991-6f94-4430-b519-01418ad5d7c8',
        approvalableType: 'order',
        name: 'Lưu Thanh Hương',
        position: 'Quản đốc',
        showMessages: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        isDisable: false,
        userId: 'sa',
        approvalableId: '0ff0c991-6f94-4430-b519-01418ad5d7c8',
        approvalableType: 'order',
        name: 'Quản Trị Hệ Thống',
        position: 'Tổng giám đốc',
        showMessages: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        isDisable: false,
        userId: '09T559',
        approvalableId: 'df64977e-6dd5-4b49-8420-1703e0297942',
        approvalableType: 'order',
        name: 'Đỗ Thị Lan',
        position: 'Trưởng phòng NS',
        showMessages: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        isDisable: false,
        userId: '12T1164',
        approvalableId: 'df64977e-6dd5-4b49-8420-1703e0297942',
        approvalableType: 'order',
        name: 'Nguyễn Tiến Nghị',
        position: 'Ban giám đốc',
        showMessages: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        isDisable: false,
        userId: 'sa',
        approvalableId: 'df64977e-6dd5-4b49-8420-1703e0297942',
        approvalableType: 'order',
        name: 'Quản Trị Hệ Thống',
        position: 'Tổng giám đốc',
        showMessages: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('ApprovalSteps', null, {});

  }
};