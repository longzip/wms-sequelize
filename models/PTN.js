/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ptn', {
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
		departmentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DEPARTMENT_ID'
		},
		itemId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ITEM_ID'
		},
		time: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'TIME'
		},
		quantity: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'QUANTITY'
		}
	}, {
		tableName: 'PTN'
	});
};
