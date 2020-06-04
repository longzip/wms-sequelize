/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('parcel', {
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
		active: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ACTIVE'
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
		tableName: 'PARCEL'
	});
};
