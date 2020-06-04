/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('viewKilnBatch', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'ID'
		},
		year: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'YEAR'
		},
		week: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'WEEK'
		},
		number: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'NUMBER'
		},
		kilnId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'KILN_ID'
		},
		kilnCode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'KILN_CODE'
		},
		kilnName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'KILN_NAME'
		},
		factoryId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'FACTORY_ID'
		},
		timeOutTarget: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'TIME_OUT_TARGET'
		},
		timeOut: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'TIME_OUT'
		},
		stepNextId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'STEP_NEXT_ID'
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
		type: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'TYPE'
		},
		status: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'STATUS'
		},
		totalM3: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'TOTAL_M3'
		}
	}, {
		tableName: 'View_kilnBatch'
	});
};
