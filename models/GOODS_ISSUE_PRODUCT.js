/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('goodsIssueProduct', {
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
		goodsIssueId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'GOODS_ISSUE_ID'
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PRODUCT_ID'
		},
		quantity: {
			type: "MONEY",
			allowNull: true,
			field: 'QUANTITY'
		},
		note: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'NOTE'
		}
	}, {
		tableName: 'GOODS_ISSUE_PRODUCT'
	});
};
