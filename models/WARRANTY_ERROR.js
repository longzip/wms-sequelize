/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('warrantyError', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			field: 'ID'
		},
		guid: {
			type: DataTypes.UUID,
			allowNull: false,
			field: 'GUID'
		},
		error: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ERROR'
		},
		result: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RESULT'
		},
		warrantyBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'WARRANTY_BY'
		},
		warrantyDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'WARRANTY_DATE'
		},
		note: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'NOTE'
		}
	}, {
		tableName: 'WARRANTY_ERROR'
	});
};