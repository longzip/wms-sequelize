/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bomSupplies', {
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
		productId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PRODUCT_ID'
		},
		suppliesId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'SUPPLIES_ID'
		},
		rate: {
			type: "MONEY",
			allowNull: true,
			field: 'RATE'
		},
		createBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'CREATE_BY'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'CREATE_DATE'
		},
		modifyBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MODIFY_BY'
		},
		modifyDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'MODIFY_DATE'
		}
	}, {
		tableName: 'BOM_SUPPLIES'
	});
};
