/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('routings', {
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
