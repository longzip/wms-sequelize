/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('woodInspection', {
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
		defectQty: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DEFECT_QTY'
		},
		wtype: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'WTYPE'
		},
		dtype: {
			type: "NCHAR",
			allowNull: true,
			field: 'DTYPE'
		},
		rateNonli: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'RATE_NONLI'
		},
		rateA1: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'RATE_A1'
		},
		heightOutRate: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'HEIGHT_OUT_RATE'
		},
		payRate: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'PAY_RATE'
		}
	}, {
		tableName: 'WOOD_INSPECTION'
	});
};
