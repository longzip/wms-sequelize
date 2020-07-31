'use strict';
module.exports = (sequelize, DataTypes) => {
  const MuaHang = sequelize.define('MuaHang', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    soPhieu: {
      type: DataTypes.STRING
    },
    noiDung: {
      type: DataTypes.STRING
    },
    trangThai: {
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
  MuaHang.associate = function(models) {
    // associations can be defined here
    MuaHang.hasMany(models.MuaHangCT,{ foreignKey: 'muaHangId', constraints: false })
  };
  return MuaHang;
};