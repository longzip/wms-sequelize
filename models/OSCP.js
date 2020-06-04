/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('oscp', {
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
		departmentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DEPARTMENT_ID'
		},
		itemId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ITEM_ID'
		},
		tenMay: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'TEN_MAY'
		},
		soCongNhan: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'SO_CONG_NHAN'
		},
		thoiGianHoanThanhChiTiet: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'THOI_GIAN_HOAN_THANH_CHI_TIET'
		},
		soCongLaoDongTrenChuKy: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'SO_CONG_LAO_DONG_TREN_CHU_KY'
		},
		tongThoiGianChuKy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'TONG_THOI_GIAN_CHU_KY'
		},
		congSuatMay: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'CONG_SUAT_MAY'
		},
		dienNangTrenChuKy: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'DIEN_NANG_TREN_CHU_KY'
		},
		tonKhoCongDoan: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'TON_KHO_CONG_DOAN'
		},
		thoiGianVanChuyen: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'THOI_GIAN_VAN_CHUYEN'
		}
	}, {
		tableName: 'OSCP'
	});
};
