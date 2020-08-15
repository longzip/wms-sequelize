'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.hasMany(models.OrderLine, {
        foreignKey: {
          name: 'orderId'
        }
      })
      Order.hasMany(models.Request, {
        foreignKey: {
          name: 'orderableId'
        }
      })
      Order.hasMany(models.Message, {
        foreignKey: {
          name: 'orderableId'
        }
      })
    }
  };
  Order.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    userId: {
      allowNull: false,
      type: DataTypes.UUID,
    },
    number: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    costcenterId: {
      type: DataTypes.UUID
    },
    costcenterName: {
      type: DataTypes.STRING
    },
    companyId: {
      type: DataTypes.UUID
    },
    code: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    note: {
      type: DataTypes.TEXT
    },
    status: {
      type: DataTypes.STRING
    },
    signature: {
      type: DataTypes.STRING
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Order',
  });
  return Order;
};