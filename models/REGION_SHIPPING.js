/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('regionShipping', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'ID'
		},
		guid: {
			type: DataTypes.UUIDV4,
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
		descriptions: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'DESCRIPTIONS'
		},
		moduleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MODULE_ID'
		}
	}, {
		tableName: 'REGION_SHIPPING'
	});
};
