/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('market', {
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
		productId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PRODUCT_ID'
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
		},
		ispo: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '0',
			field: 'ISPO'
		}
	}, {
		tableName: 'MARKET'
	});
};
