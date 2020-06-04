/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('coc', {
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
		itemId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ITEM_ID'
		},
		order: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ORDER'
		},
		quantity: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'QUANTITY'
		},
		factoryId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'FACTORY_ID'
		}
	}, {
		tableName: 'COC'
	});
};
