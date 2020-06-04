/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('viewInNotVerify', {
		stepId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'STEP_ID'
		},
		stepNextId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'STEP_NEXT_ID'
		},
		itemId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ITEM_ID'
		},
		pass: {
			type: "MONEY",
			allowNull: true,
			field: 'PASS'
		},
		palletId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PALLET_ID'
		},
		palletCode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PALLET_CODE'
		},
		packageId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PACKAGE_ID'
		},
		createBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'CREATE_BY'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'CREATE_DATE'
		}
	}, {
		tableName: 'View_in_not_verify'
	});
};
