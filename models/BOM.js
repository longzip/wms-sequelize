/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bom', {
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
		materialsId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MATERIALS_ID'
		},
		rate: {
			type: "MONEY",
			allowNull: true,
			field: 'RATE'
		},
		createBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'CREATE_BY'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: '(getdate())',
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
			defaultValue: '(getdate())',
			field: 'MODIFY_DATE'
		}
	}, {
		tableName: 'BOM'
	});
};
