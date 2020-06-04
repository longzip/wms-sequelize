/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('roleValue', {
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
		roleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ROLE_ID'
		},
		roleTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ROLE_TYPE_ID'
		},
		value: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'VALUE'
		}
	}, {
		tableName: 'ROLE_VALUE'
	});
};
