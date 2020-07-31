'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MuaHangCTs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      muaHangId: {
        allowNull: false,
        type: Sequelize.UUID
      },
      tenMatHang: {
        type: Sequelize.STRING
      },
      xuatXu: {
        type: Sequelize.STRING
      },
      donViTinh: {
        type: Sequelize.STRING
      },
      soLuong: {
        type: Sequelize.FLOAT
      },
      yeuCauKyThuat: {
        type: Sequelize.STRING
      },
      thoiGianCungCap: {
        allowNull: false,
        type: Sequelize.DATE
      },
      lyDoYeuCau: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MuaHangCTs');
  }
};