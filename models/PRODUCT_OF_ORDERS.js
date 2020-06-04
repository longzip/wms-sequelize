/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('productOfOrders', {
		id: {
			type: DataTypes.INTEGER,primaryKey: true,
			allowNull: false,
			field: 'ID'
		},
		guid: {
			type: DataTypes.UUID,
			allowNull: false,
			field: 'GUID'
		},
		productionOrdersId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PRODUCTION_ORDERS_ID'
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PRODUCT_ID'
		},
		quantity: {
			type: "MONEY",
			allowNull: true,
			field: 'QUANTITY'
		}
	}, {
		tableName: 'PRODUCT_OF_ORDERS'
	});
};
