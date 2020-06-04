/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('roleGroup', {
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
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'NAME'
		},
		moduleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MODULE_ID'
		},
		parentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PARENT_ID'
		}
	}, {
		tableName: 'ROLE_GROUP'
	});
};
