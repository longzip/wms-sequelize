/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('menu', {
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
