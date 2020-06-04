/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('woodPaySave', {
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
		receiptId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'RECEIPT_ID'
		},
		isInvoice: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'IS_INVOICE'
		},
		isCoc: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'IS_COC'
		},
		shippingFee: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'SHIPPING_FEE'
		},
		otherSupportFee: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'OTHER_SUPPORT_FEE'
		},
		totalPay: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'TOTAL_PAY'
		},
		averagePrice: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'AVERAGE_PRICE'
		},
		whVolumn: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'WH_VOLUMN'
		},
		qcVolumn: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'QC_VOLUMN'
		},
		inputRate: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'INPUT_RATE'
		},
		payRate: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'PAY_RATE'
		},
		totalNotTax: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'TOTAL_NOT_TAX'
		},
		approvalStatus: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'APPROVAL_STATUS'
		},
		createAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'CREATE_AT'
		},
		createBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'CREATE_BY'
		},
		manual: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MANUAL'
		}
	}, {
		tableName: 'WOOD_PAY_SAVE'
	});
};
