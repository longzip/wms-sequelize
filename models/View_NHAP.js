/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('viewNhap', {
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
		import: {
			type: "MONEY",
			allowNull: true,
			field: 'IMPORT'
		}
	}, {
		tableName: 'View_NHAP'
	});
};
