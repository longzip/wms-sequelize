/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('reqPrice', {
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
		createdAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'CREATED_AT'
		},
		createdBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'CREATED_BY'
		},
		approvalStatus: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'APPROVAL_STATUS'
		},
		approvalAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'APPROVAL_AT'
		},
		approvalBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'APPROVAL_BY'
		},
		reqNote: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'REQ_NOTE'
		},
		approvalNote: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'APPROVAL_NOTE'
		}
	}, {
		tableName: 'REQ_PRICE'
	});
};
