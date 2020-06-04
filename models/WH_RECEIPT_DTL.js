/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('whReceiptDtl', {
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
		whReceiptId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'WH_RECEIPT_ID'
		},
		itemId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'ITEM_ID'
		},
		pcsPerPackage: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PCS_PER_PACKAGE'
		},
		packageQuantity: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PACKAGE_QUANTITY'
		},
		inputTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'INPUT_TYPE_ID'
		},
		note: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'NOTE'
		},
		returnId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'RETURN_ID'
		},
		leave: {
			type: "NCHAR",
			allowNull: true,
			field: 'LEAVE'
		},
		overPlan: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'OVER_PLAN'
		},
		samplePackageQuantity: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'SAMPLE_PACKAGE_QUANTITY'
		},
		sampleQuantity: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'SAMPLE_QUANTITY'
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
		modifyAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'MODIFY_AT'
		},
		modifyBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MODIFY_BY'
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
		}
	}, {
		tableName: 'WH_RECEIPT_DTL'
	});
};
