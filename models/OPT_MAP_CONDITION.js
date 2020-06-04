/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('optMapCondition', {
		regionId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'REGION_ID'
		},
		condId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'COND_ID'
		},
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'ID'
		}
	}, {
		tableName: 'OPT_MAP_CONDITION'
	});
};