/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('itemType', {
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
		}
	}, {
		tableName: 'ITEM_TYPE'
	});
};
