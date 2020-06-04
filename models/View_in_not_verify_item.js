/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('viewInNotVerifyItem', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ID'
		},
		stepNextId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'STEP_NEXT_ID'
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
		tableName: 'View_in_not_verify_item'
	});
};
