/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('woodPayCalculator', {
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
		inputTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'INPUT_TYPE_ID'
		},
		receiptId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'RECEIPT_ID'
		},
		itemId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ITEM_ID'
		},
		note: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'NOTE'
		},
		sizeOutRate: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'SIZE_OUT_RATE'
		},
		humidity: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'HUMIDITY'
		},
		isDouble: {
			type: "NCHAR",
			allowNull: true,
			field: 'IS_DOUBLE'
		},
		delFlag: {
			type: "NCHAR",
			allowNull: true,
			field: 'DEL_FLAG'
		},
		companyPrice: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'COMPANY_PRICE'
		},
		itypePrice: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ITYPE_PRICE'
		},
		averagePrice: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'AVERAGE_PRICE'
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
		updateAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'UPDATE_AT'
		},
		updateBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'UPDATE_BY'
		},
		dtype: {
			type: "NCHAR",
			allowNull: true,
			field: 'DTYPE'
		},
		wtype: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'WTYPE'
		},
		diff: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'DIFF'
		},
		insRate: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'INS_RATE'
		},
		payRate: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'PAY_RATE'
		},
		goodQty: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'GOOD_QTY'
		},
		sampleQty: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'SAMPLE_QTY'
		},
		totalQty: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'TOTAL_QTY'
		},
		qcttVolumn: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'QCTT_VOLUMN'
		},
		qcVolumn: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'QC_VOLUMN'
		},
		whVolumn: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'WH_VOLUMN'
		},
		amount: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'AMOUNT'
		},
		cid: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'CID'
		},
		icode: {
			type: "NCHAR",
			allowNull: true,
			field: 'ICODE'
		},
		parentid: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PARENTID'
		}
	}, {
		tableName: 'WOOD_PAY_CALCULATOR'
	});
};
