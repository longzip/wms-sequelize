/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('viewTonQc', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ID'
		},
		from: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'FROM'
		},
		itemId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ITEM_ID'
		},
		remain: {
			type: "MONEY",
			allowNull: true,
			field: 'REMAIN'
		}
	}, {
		tableName: 'View_TON_QC'
	});
};
