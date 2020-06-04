/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('package', {
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
		stepOfPalletId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'STEP_OF_PALLET_ID'
		},
		sourceId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'SOURCE_ID'
		},
		destinationId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DESTINATION_ID'
		},
		itemFromId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ITEM_FROM_ID'
		},
		typeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'TYPE_ID'
		},
		remediesId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'REMEDIES_ID'
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'DESCRIPTION'
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
		},
		po: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PO'
		}
	}, {
		tableName: 'PACKAGE'
	});
};
