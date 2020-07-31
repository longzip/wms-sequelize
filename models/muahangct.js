'use strict';
module.exports = (sequelize, DataTypes) => {
  const MuaHangCT = sequelize.define('MuaHangCT', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    muaHangId: {
      allowNull: false,
      type: DataTypes.UUID
    },
    tenMatHang: {
      type: DataTypes.STRING
    },
    xuatXu: {
      type: DataTypes.STRING
    },
    donViTinh: {
      type: DataTypes.STRING
    },
    soLuong: {
      type: DataTypes.FLOAT
    },
    yeuCauKyThuat: {
      type: DataTypes.STRING
    },
    thoiGianCungCap: {
      allowNull: false,
      type: DataTypes.DATE
    },
    lyDoYeuCau: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  MuaHangCT.associate = function(models) {
    // associations can be defined here
    MuaHangCT.belongsTo(models.MuaHang,{ foreignKey: 'muaHangId', constraints: false })
  };
  return MuaHangCT;
};