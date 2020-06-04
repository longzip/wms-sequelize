/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('materialsOfOrder', {
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
		materialsId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MATERIALS_ID'
		},
		quantity: {
			type: "MONEY",
			allowNull: true,
			field: 'QUANTITY'
		}
	}, {
		tableName: 'MATERIALS_OF_ORDER'
	});
};
