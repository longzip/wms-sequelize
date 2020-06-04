/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pob', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'id'
		},
		guid: {
			type: DataTypes.UUIDV4,
			allowNull: false,
			field: 'guid'
		},
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
			type: DataTypes.STRING,
			allowNull: true,
			field: 'stepId'
		},
		itemId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'itemId'
		},
		quantity: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'quantity'
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'productId'
		},
		status: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'status'
		}
	}, {
		tableName: 'POB'
	});
};
