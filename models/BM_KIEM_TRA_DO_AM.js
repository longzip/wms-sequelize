/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bmKiemTraDoAm', {
		id: {
			type: DataTypes.INTEGER,primaryKey: true,
			allowNull: false,
			field: 'ID'
		},
		kilnBatchId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'KILN_BATCH_ID'
		},
		data: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'DATA'
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
		tableName: 'BM_KIEM_TRA_DO_AM'
	});
};
