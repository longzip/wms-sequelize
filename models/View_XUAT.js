/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('viewXuat', {
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
		tableName: 'View_XUAT'
	});
};
