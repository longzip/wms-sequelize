/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('deliveryPlan', {
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
		itemId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ITEM_ID'
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'QUANTITY'
		},
		onBoardDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'ON_BOARD_DATE'
		}
	}, {
		tableName: 'DELIVERY_PLAN'
	});
};
