/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('bcKhuyetTat', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
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
		tableName: 'BC_KHUYET_TAT'
	});
};