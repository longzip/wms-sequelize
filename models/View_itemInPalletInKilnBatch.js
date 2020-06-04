/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('viewItemInPalletInKilnBatch', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ID'
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
		tableName: 'View_itemInPalletInKilnBatch'
	});
};
