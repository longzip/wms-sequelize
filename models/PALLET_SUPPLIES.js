/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('palletSupplies', {
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
		stepOfPalletId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'STEP_OF_PALLET_ID'
		},
		suppliesId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'SUPPLIES_ID'
		},
		quantity: {
			type: "MONEY",
			allowNull: true,
			field: 'QUANTITY'
		},
		parcelId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PARCEL_ID'
		},
		vendorId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'VENDOR_ID'
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
		parcel: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PARCEL'
		},
		po: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PO'
		}
	}, {
		tableName: 'PALLET_SUPPLIES'
	});
};
