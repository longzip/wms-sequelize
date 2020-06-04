/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('customer', {
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
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'NAME'
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'DESCRIPTION'
		},
		city: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CITY'
		},
		address: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ADDRESS'
		},
		email: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'EMAIL'
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PHONE'
		},
		active: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ACTIVE'
		},
		createBy: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'CREATE_BY'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'CREATE_DATE'
		}
	}, {
		tableName: 'CUSTOMER'
	});
};
