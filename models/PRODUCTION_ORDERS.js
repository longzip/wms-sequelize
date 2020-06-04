/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('productionOrders', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'ID'
		},
		guid: {
			type: DataTypes.UUIDV4,
			allowNull: false,
			field: 'GUID'
		},
		code: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CODE'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'NAME'
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'DESCRIPTION'
		},
		statusId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'STATUS_ID'
		},
		fromDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'FROM_DATE'
		},
		toDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'TO_DATE'
		},
		createBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'CREATE_BY'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'CREATE_DATE'
		},
		moduleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MODULE_ID'
		},
		type: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'TYPE'
		},
		routingName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ROUTING_NAME'
		},
		factoryId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'FACTORY_ID'
		},
		productionOrdersTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PRODUCTION_ORDERS_TYPE_ID'
		}
	}, {
		tableName: 'PRODUCTION_ORDERS'
	});
};
