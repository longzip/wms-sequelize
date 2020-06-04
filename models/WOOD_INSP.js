/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('woodInsp', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'ID'
		},
		guid: {
			type: DataTypes.UUID,
			allowNull: true,
			field: 'GUID'
		},
		receiptId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECEIPT_ID'
		},
		sizeOutRate: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'SIZE_OUT_RATE'
		},
		sampleQty: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'SAMPLE_QTY'
		},
		a1Rate: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'A1_RATE'
		},
		nonliRate: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'NONLI_RATE'
		},
		luonliRate: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'LUONLI_RATE'
		},
		humidityRate: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'HUMIDITY_RATE'
		},
		insNote: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'INS_NOTE'
		},
		createBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'CREATE_BY'
		},
		createAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'CREATE_AT'
		},
		updateBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'UPDATE_BY'
		},
		updateAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'UPDATE_AT'
		},
		rateB: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'RATE_B'
		},
		rateC: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'RATE_C'
		},
		rateA: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'RATE_A'
		},
		heightOutRate: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'HEIGHT_OUT_RATE'
		},
		mcRate: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'MC_RATE'
		}
	}, {
		tableName: 'WOOD_INSP'
	});
};
