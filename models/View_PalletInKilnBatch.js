/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('viewPalletInKilnBatch', {
		kilnBatchId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'KILN_BATCH_ID'
		},
		id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ID'
		},
		code: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CODE'
		}
	}, {
		tableName: 'View_PalletInKilnBatch'
	});
};
