/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('reportExportGoods', {
		date: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'DATE'
		},
		nhaMay: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Nhà máy'
		},
		xưởng: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Xưởng'
		},
		bộPhận: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Bộ phận'
		},
		factoryDetination: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'FACTORY_DETINATION'
		},
		xuongDetination: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'XUONG_DETINATION'
		},
		nơiXuất: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Nơi xuất'
		},
		itemId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ITEM_ID'
		},
		chiTiếtCụm: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Chi tiết/cụm'
		},
		thanh: {
			type: "MONEY",
			allowNull: true,
			field: 'Thanh'
		},
		m3: {
			type: "MONEY",
			allowNull: true,
			field: 'M3'
		}
	}, {
		tableName: 'Report_exportGoods'
	});
};
