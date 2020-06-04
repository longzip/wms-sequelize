/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('acceptProduct', {
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
		acceptId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ACCEPT_ID'
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PRODUCT_ID'
		},
		size: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'SIZE'
		},
		unitId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'UNIT_ID'
		},
		quantity: {
			type: "MONEY",
			allowNull: true,
			field: 'QUANTITY'
		},
		note: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'NOTE'
		},
		type: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'TYPE'
		}
	}, {
		tableName: 'ACCEPT_PRODUCT'
	});
};