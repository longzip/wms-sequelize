/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('plan', {
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
		code: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CODE'
		},
		year: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'YEAR'
		},
		week: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'WEEK'
		},
		stepId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'STEP_ID'
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
		createBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'CREATE_BY'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'CREATE_DATE'
		},
		modifyBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MODIFY_BY'
		},
		modifyDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'MODIFY_DATE'
		},
		parentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PARENT_ID'
		},
		fromDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'FROM_DATE'
		},
		toDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'TO_DATE'
		}
	}, {
		tableName: 'PLAN'
	});
};
