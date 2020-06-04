/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stepOrder', {
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
		stepId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'STEP_ID'
		},
		order: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ORDER'
		}
	}, {
		tableName: 'STEP_ORDER'
	});
};
