/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('event', {
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
		no: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'NO'
		},
		channel: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CHANNEL'
		},
		message: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'MESSAGE'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: '(getdate())',
			field: 'CREATE_DATE'
		}
	}, {
		tableName: 'EVENT'
	});
};
