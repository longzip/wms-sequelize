/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('planId', {
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
		stepId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'STEP_ID'
		}
	}, {
		tableName: 'PLAN_ID'
	});
};
