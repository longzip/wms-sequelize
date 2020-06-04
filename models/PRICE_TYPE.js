/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('priceType', {
		code: {
			type: "NCHAR",
			allowNull: true,
			primaryKey: true,
			field: 'CODE'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'NAME'
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
		tableName: 'PRICE_TYPE'
	});
};