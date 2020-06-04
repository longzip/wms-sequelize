/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('optConditions', {
		id: {
			type: DataTypes.INTEGER,primaryKey: true,
			allowNull: false,
			field: 'ID'
		},
		code: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CODE'
		},
		heso: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'HESO'
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'DESCRIPTION'
		},
		type: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'TYPE'
		},
		inputTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'INPUT_TYPE_ID'
		},
		payRate: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'PAY_RATE'
		}
	}, {
		tableName: 'OPT_CONDITIONS'
	});
};
