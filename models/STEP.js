/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('step', {
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
		order: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ORDER'
		},
		verifyBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'VERIFY_BY'
		},
		verifyDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'VERIFY_DATE'
		}
	}, {
		tableName: 'STEP'
	});
};
