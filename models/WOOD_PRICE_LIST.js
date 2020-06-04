/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('woodPriceList', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'ID'
		},
		guid: {
			type: DataTypes.UUIDV4,
			allowNull: false,
			field: 'GUID'
		},
		price: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'PRICE'
		},
		itemId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ITEM_ID'
		},
		reqId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'REQ_ID'
		},
		regionId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'REGION_ID'
		},
		createBy: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'CREATE_BY'
		},
		createAt: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'CREATE_AT'
		},
		applyStatus: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'APPLY_STATUS'
		},
		applyDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'APPLY_DATE'
		},
		applyBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'APPLY_BY'
		},
		type: {
			type: "NCHAR",
			allowNull: true,
			field: 'TYPE'
		},
		itype: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ITYPE'
		},
		isnew: {
			type: "NCHAR",
			allowNull: true,
			field: 'ISNEW'
		},
		wtype: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'WTYPE'
		}
	}, {
		tableName: 'WOOD_PRICE_LIST'
	});
};
