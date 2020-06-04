/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('receiptProduct', {
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
		receiptId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'RECEIPT_ID'
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PRODUCT_ID'
		},
		unitPrice: {
			type: "MONEY",
			allowNull: true,
			field: 'UNIT_PRICE'
		},
		quantity: {
			type: "MONEY",
			allowNull: true,
			field: 'QUANTITY'
		},
		amount: {
			type: "MONEY",
			allowNull: true,
			field: 'AMOUNT'
		}
	}, {
		tableName: 'RECEIPT_PRODUCT'
	});
};
