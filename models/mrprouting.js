'use strict';
module.exports = (sequelize, DataTypes) => {
  const MrpRouting = sequelize.define('MrpRouting', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    companyId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    create_uid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    write_uid: {
      type: DataTypes.UUID,
      allowNull: true
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
  MrpRouting.associate = function (models) {
    // associations can be defined here
  };
  return MrpRouting;
};