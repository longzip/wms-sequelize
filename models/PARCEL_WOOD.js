/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('parcelWood', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
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
		code: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CODE'
		}
	}, {
		tableName: 'PARCEL_WOOD'
	});
};