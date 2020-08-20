'use strict';
const {
  v4: uuidv4
} = require('uuid');
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Orders', [{
      id: "daecbb26-2444-4982-858e-1aec599c4de8",
      userId: "13T0744",
      costcenterId: "e378f3b1-9e35-4090-bc0a-92297d41a9e3",
      approvalId: "0ff0c991-6f94-4430-b519-01418ad5d7c8",
      costcenterName: "San Xuat",
      companyId: "c4ced5f1-06bb-49ed-bbf0-cfd3732bb696",
      code: "mua-hang",
      name: "Phiếu đề xuất mua hàng",
      note: "Mô tả đề xuất nếu có",
      status: "Mới",
      signature: "Đỗ Mạnh Dũng",
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Orders', null, {});

  }
};