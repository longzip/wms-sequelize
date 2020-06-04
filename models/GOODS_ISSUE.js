/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('goodsIssue', {
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
		goodsIssueNumber: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'GOODS_ISSUE_NUMBER'
		},
		year: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'YEAR'
		},
		month: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MONTH'
		},
		number: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'NUMBER'
		},
		projectId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PROJECT_ID'
		},
		address: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ADDRESS'
		},
		orderedGoods: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ORDERED_GOODS'
		},
		stock: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'STOCK'
		},
		deliverDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'DELIVER_DATE'
		},
		numberPalte: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'NUMBER_PALTE'
		},
		stockkeeperVerify: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'STOCKKEEPER_VERIFY'
		},
		stockkeeperDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'STOCKKEEPER_DATE'
		},
		qcVerify: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'QC_VERIFY'
		},
		qcDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'QC_DATE'
		},
		factoryBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'FACTORY_BY'
		},
		factoryDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'FACTORY_DATE'
		},
		reciverBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'RECIVER_BY'
		},
		reciverDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'RECIVER_DATE'
		},
		completed: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'COMPLETED'
		}
	}, {
		tableName: 'GOODS_ISSUE'
	});
};
