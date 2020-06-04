/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('require', {
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
		palletId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PALLET_ID'
		},
		stepId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'STEP_ID'
		},
		itemId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ITEM_ID'
		},
		quantity: {
			type: "MONEY",
			allowNull: true,
			field: 'QUANTITY'
		},
		real: {
			type: "MONEY",
			allowNull: true,
			field: 'REAL'
		},
		errorTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ERROR_TYPE_ID'
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
		qcVerifyBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'QC_VERIFY_BY'
		},
		qcVerifyDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'QC_VERIFY_DATE'
		},
		khVerifyBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'KH_VERIFY_BY'
		},
		khVerifyDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'KH_VERIFY_DATE'
		}
	}, {
		tableName: 'REQUIRE'
	});
};
