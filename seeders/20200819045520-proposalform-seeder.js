'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('ProposalForms', [{
        id: '0ff0c991-6f94-4430-b519-01418ad5d7c8',
        userId: '12T0193',
        approvalableId: 'c4ced5f1-06bb-49ed-bbf0-cfd3732bb696',
        approvalableType: 'mua-hang',
        costcenterId: '063e6fd2-add3-464d-bf09-627289f7de68',
        companyId: 'c4ced5f1-06bb-49ed-bbf0-cfd3732bb696',
        title: 'Phiếu đề xuất mua hàng',
        status: 'Đang sử dụng',
        showMessages: true,
        isDisable: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'df64977e-6dd5-4b49-8420-1703e0297942',
        userId: '12T0193',
        approvalableId: 'c4ced5f1-06bb-49ed-bbf0-cfd3732bb696',
        approvalableType: 'thanh-toan',
        costcenterId: '063e6fd2-add3-464d-bf09-627289f7de68',
        companyId: 'c4ced5f1-06bb-49ed-bbf0-cfd3732bb696',
        title: 'Phiếu đề nghị thanh toán',
        status: 'Đang sử dụng',
        showMessages: true,
        isDisable: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProposalForms', null, {});
  }
};