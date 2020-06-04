/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('viewRawData', {
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
		maPallet: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Mã pallet'
		},
		dạt: {
			type: "MONEY",
			allowNull: true,
			field: 'Đạt'
		},
		khongDạt: {
			type: "MONEY",
			allowNull: true,
			field: 'Không đạt'
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
		ngườiTạo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Người tạo'
		},
		ngayTạo: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'Ngày tạo'
		},
		ngườiNhận: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Người nhận'
		},
		ngayNhận: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'Ngày nhận'
		}
	}, {
		tableName: 'View_raw_data'
	});
};
