/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('buf', {
		code: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'code'
		},
		parent: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'parent'
		},
		stepId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'stepId'
		},
		itemId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'itemId'
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'quantity'
		}
	}, {
		tableName: 'BUF'
	});
};
