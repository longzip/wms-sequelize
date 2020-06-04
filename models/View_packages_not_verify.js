/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('viewPackagesNotVerify', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'ID'
		},
		sourceId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'SOURCE_ID'
		},
		destinationId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DESTINATION_ID'
		},
		typeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'TYPE_ID'
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
		tableName: 'View_packages_not_verify'
	});
};
