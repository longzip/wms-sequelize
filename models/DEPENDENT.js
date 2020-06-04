/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dependent', {
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
		vendorId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'VENDOR_ID'
		},
		chemistryId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'CHEMISTRY_ID'
		},
		parcelId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PARCEL_ID'
		}
	}, {
		tableName: 'DEPENDENT'
	});
};
