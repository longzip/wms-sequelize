/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('viewNotOut', {
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
		palletTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PALLET_TYPE_ID'
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
		},
		verifyBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'VERIFY_BY'
		},
		verifyDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'VERIFY_DATE'
		}
	}, {
		tableName: 'View_not_out'
	});
};
