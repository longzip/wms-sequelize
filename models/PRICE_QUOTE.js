/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('priceQuote', {
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
		code: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CODE'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'NAME'
		},
		projectId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PROJECT_ID'
		},
		version: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'VERSION'
		},
		totalWithoutTaxes: {
			type: "MONEY",
			allowNull: true,
			field: 'TOTAL_WITHOUT_TAXES'
		},
		taxes: {
			type: "MONEY",
			allowNull: true,
			field: 'TAXES'
		},
		total: {
			type: "MONEY",
			allowNull: true,
			field: 'TOTAL'
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
		}
	}, {
		tableName: 'PRICE_QUOTE'
	});
};
