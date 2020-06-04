/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('roleValue', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'ID'
		},
		guid: {
			type: DataTypes.UUIDV4,
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
