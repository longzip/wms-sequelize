'use strict';
const {
  v4: uuidv4
} = require('uuid');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let orderLines = [{
      id: "3ac885f3-3c06-499c-a7dd-4265b3f52afe",
      orderId: "daecbb26-2444-4982-858e-1aec599c4de8",
      userId: "13T0744                             ",
      costcenterId: "daecbb26-2444-4982-858e-1aec599c4de8",
      unitId: "C",
      companyId: "daecbb26-2444-4982-858e-1aec599c4de8",
      code: "TEST",
      name: "TEST",
      quantity: 0,
      title: "Kỹ Thuật",
      note: "Lý do yêu cầu",
      origin: null,
      status: "Mới",
      startedAt: new Date(),
      finishedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null
    }]
    await queryInterface.bulkInsert('OrderMeta', [{
      id: "2dc358fc-8121-4760-823c-fb4134022cae",
      orderId: "daecbb26-2444-4982-858e-1aec599c4de8",
      metaKey: "OrderLines",
      metaValue: JSON.stringify(orderLines),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('OrderMeta', null, {});

  }
};