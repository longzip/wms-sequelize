/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('itemInPackage', {
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
		packageId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PACKAGE_ID'
		},
		itemId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ITEM_ID'
		},
		quantity: {
			type: "MONEY",
			allowNull: true,
			field: 'QUANTITY'
		}
	}, {
		tableName: 'ITEM_IN_PACKAGE'
	});
};
