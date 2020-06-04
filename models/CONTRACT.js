/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('contract', {
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
		projectId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PROJECT_ID'
		},
		url: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'URL'
		},
		fileName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'FILE_NAME'
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
		}
	}, {
		tableName: 'CONTRACT'
	});
};
