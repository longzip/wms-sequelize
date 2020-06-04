/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('workTime', {
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
		date: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'DATE'
		},
		shift: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'SHIFT'
		},
		departmentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DEPARTMENT_ID'
		},
		workers: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'WORKERS'
		},
		ot: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'OT'
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
		tableName: 'WORK_TIME'
	});
};
