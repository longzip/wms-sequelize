/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('woodType', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'ID'
		},
		guid: {
			type: DataTypes.UUID,
			allowNull: false,
			field: 'GUID'
		},
		code: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'CODE'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'NAME'
		},
		type: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'TYPE'
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'DESCRIPTION'
		}
	}, {
		tableName: 'WOOD_TYPE'
	});
};
