/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('approver', {
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
		approvalsId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'APPROVALS_ID'
		},
		accountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ACCOUNT_ID'
		}
	}, {
		tableName: 'APPROVER'
	});
};
