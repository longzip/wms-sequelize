/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('routing', {
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
		stepId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'STEP_ID'
		},
		order: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ORDER'
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
		},
		documentTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DOCUMENT_TYPE_ID'
		},
		type: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'TYPE'
		},
		approvalsId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'APPROVALS_ID'
		}
	}, {
		tableName: 'ROUTING'
	});
};
