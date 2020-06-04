/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('routings', {
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
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'NAME'
		},
		departmentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DEPARTMENT_ID'
		},
		order: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ORDER'
		}
	}, {
		tableName: 'ROUTINGS'
	});
};
