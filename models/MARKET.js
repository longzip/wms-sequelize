/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('market', {
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
