/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('viewTon', {
		stepId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'STEP_ID'
		},
		code: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CODE'
		},
		itemId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ITEM_ID'
		},
		import: {
			type: "MONEY",
			allowNull: true,
			field: 'IMPORT'
		},
		exportNvl: {
			type: "MONEY",
			allowNull: true,
			field: 'EXPORT_NVL'
		},
		export: {
			type: "MONEY",
			allowNull: true,
			field: 'EXPORT'
		},
		remain: {
			type: "MONEY",
			allowNull: true,
			field: 'REMAIN'
		}
	}, {
		tableName: 'View_TON'
	});
};
