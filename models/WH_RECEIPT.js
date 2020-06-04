/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('whReceipt', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'ID'
		},
		guid: {
			type: DataTypes.UUIDV4,
			allowNull: false,
			field: 'GUID'
		},
		numberOfMonth: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'NUMBER_OF_MONTH'
		},
		month: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'MONTH'
		},
		year: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'YEAR'
		},
		warehouseId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'WAREHOUSE_ID'
		},
		vendorId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'VENDOR_ID'
		},
		qcStaff: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'QC_STAFF'
		},
		carLicensePlate: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CAR_LICENSE_PLATE'
		},
		allowInspection: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'ALLOW_INSPECTION'
		},
		allowPay: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'ALLOW_PAY'
		},
		moduleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MODULE_ID'
		},
		receiptDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'RECEIPT_DATE'
		},
		createAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'CREATE_AT'
		},
		forklift: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'FORKLIFT'
		},
		createBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'CREATE_BY'
		},
		delFlag: {
			type: "NCHAR",
			allowNull: true,
			field: 'DEL_FLAG'
		},
		lock: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'LOCK'
		},
		module: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'MODULE'
		}
	}, {
		tableName: 'WH_RECEIPT'
	});
};
