/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('viewGetPalletStep', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ID'
		},
		code: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CODE'
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
		packageId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PACKAGE_ID'
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
		verifyBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'VERIFY_BY'
		},
		verifyDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'VERIFY_DATE'
		},
		stepRank: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'STEP_RANK'
		}
	}, {
		tableName: 'View_getPalletStep'
	});
};
