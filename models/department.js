/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('department', {
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
		type: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'TYPE'
		},
		parentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PARENT_ID'
		},
		code: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CODE'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'NAME'
		},
		type2: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'TYPE2'
		},
		error: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ERROR'
		},
		packageTypeGroupId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PACKAGE_TYPE_GROUP_ID'
		},
		moduleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MODULE_ID'
		},
		order: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ORDER'
		}
	}, {
		tableName: 'DEPARTMENT'
	});
};
