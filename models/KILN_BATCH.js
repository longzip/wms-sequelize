/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('kilnBatch', {
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
		number: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'NUMBER'
		},
		year: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'YEAR'
		},
		week: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'WEEK'
		},
		kilnId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'KILN_ID'
		},
		stepNextId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'STEP_NEXT_ID'
		},
		timeOutReal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'TIME_OUT_REAL'
		},
		timeOutTarget: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'TIME_OUT_TARGET'
		},
		length: {
			type: "MONEY",
			allowNull: true,
			field: 'LENGTH'
		},
		height: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'HEIGHT'
		},
		verify: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'VERIFY'
		},
		verifyBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'VERIFY_BY'
		},
		humidity: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'HUMIDITY'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'STATE'
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
		exportBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'EXPORT_BY'
		},
		exportDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'EXPORT_DATE'
		},
		type: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'TYPE'
		},
		status: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'STATUS'
		}
	}, {
		tableName: 'KILN_BATCH'
	});
};
