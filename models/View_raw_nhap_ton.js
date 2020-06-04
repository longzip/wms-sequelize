/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('viewRawNhapTon', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'ID'
		},
		nam: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Năm'
		},
		tuần: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Tuần'
		},
		thứ: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Thứ'
		},
		departmentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DEPARTMENT_ID'
		},
		tổ: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Tổ'
		},
		nơiXuất: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Nơi xuất'
		},
		chiTiếtCụm: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Chi tiết/cụm'
		},
		unit: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'unit'
		},
		sốLượng: {
			type: "MONEY",
			allowNull: true,
			field: 'Số lượng'
		},
		ngườiNhập: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Người nhập'
		},
		ngayGiờNhập: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'Ngày giờ nhập'
		}
	}, {
		tableName: 'View_raw_nhap_ton'
	});
};
