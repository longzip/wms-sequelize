/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('viewXuatQc', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ID'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'NAME'
		},
		code: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CODE'
		},
		to: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'TO'
		},
		itemFromId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ITEM_FROM_ID'
		},
		itemId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ITEM_ID'
		},
		export: {
			type: "MONEY",
			allowNull: true,
			field: 'EXPORT'
		}
	}, {
		tableName: 'View_XUAT_QC'
	});
};
