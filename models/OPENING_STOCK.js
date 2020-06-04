/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('openingStock', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'ID'
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'DATE'
		},
		month: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MONTH'
		},
		departmentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DEPARTMENT_ID'
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
		},
		week: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'WEEK'
		},
		poId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PO_ID'
		},
		marketCode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'market_code'
		},
		paint: {
			type: "NCHAR",
			allowNull: true,
			field: 'paint'
		},
		color: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'color'
		},
		createBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'CREATE_BY'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '(getdate())',
			field: 'createdAt'
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '(getdate())',
			field: 'updatedAt'
		}
	}, {
		tableName: 'OPENING_STOCK'
	});
};
