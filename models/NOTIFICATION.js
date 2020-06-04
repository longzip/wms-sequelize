/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('notification', {
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
		title: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'TITLE'
		},
		content: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CONTENT'
		},
		createBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'CREATE_BY'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'CREATE_DATE'
		},
		modifyBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MODIFY_BY'
		},
		modifyDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'MODIFY_DATE'
		}
	}, {
		tableName: 'NOTIFICATION'
	});
};
