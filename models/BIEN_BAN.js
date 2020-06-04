/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bienBan', {
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
		type: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'TYPE'
		},
		data: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'DATA'
		},
		linkId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'LINK_ID'
		},
		linkType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'LINK_TYPE'
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
		tableName: 'BIEN_BAN'
	});
};
