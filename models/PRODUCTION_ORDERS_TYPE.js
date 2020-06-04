/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('productionOrdersType', {
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
		code: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CODE'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'NAME'
		}
	}, {
		tableName: 'PRODUCTION_ORDERS_TYPE'
	});
};
