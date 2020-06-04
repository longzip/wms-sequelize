/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('viewPackagesNotVerifyItem', {
		packageId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'PACKAGE_ID'
		},
		destinationId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DESTINATION_ID'
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
		tableName: 'View_packages_not_verify_item'
	});
};
