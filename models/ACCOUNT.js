/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('account', {
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
		account: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ACCOUNT'
		},
		password: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PASSWORD'
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'FIRST_NAME'
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'LAST_NAME'
		},
		email: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'EMAIL'
		},
		position: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'POSITION'
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PHONE'
		},
		address: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ADDRESS'
		},
		active: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ACTIVE'
		},
		roleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ROLE_ID'
		},
		typeUser: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'TYPE_USER'
		},
		createBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'CREATE_BY'
		}
	}, {
		tableName: 'ACCOUNT'
	});
};