/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cocInfo', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'ID'
		},
		guid: {
			type: DataTypes.UUIDV4,
			allowNull: false,
			field: 'GUID'
		},
		cocId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'COC_ID'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'NAME'
		},
		vendor: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'VENDOR'
		},
		parcel: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PARCEL'
		}
	}, {
		tableName: 'COC_INFO'
	});
};
