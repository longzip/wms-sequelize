/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('globalDate', {
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
		date: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'DATE'
		},
		code: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CODE'
		},
		year: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'YEAR'
		},
		month: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'MONTH'
		},
		week: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'WEEK'
		},
		day: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'DAY'
		},
		weekDay: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'WEEK_DAY'
		},
		yearMonth: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'YEAR_MONTH'
		},
		yearWeek: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'YEAR_WEEK'
		}
	}, {
		tableName: 'GLOBAL_DATE'
	});
};
