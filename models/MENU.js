/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('menu', {
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
		path: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PATH'
		},
		type: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'TYPE'
		}
	}, {
		tableName: 'MENU'
	});
};
