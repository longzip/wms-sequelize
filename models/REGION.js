/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('region', {
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
		descriptions: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'DESCRIPTIONS'
		},
		moduleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MODULE_ID'
		},
		module: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'MODULE'
		}
	}, {
		tableName: 'REGION'
	});
};
