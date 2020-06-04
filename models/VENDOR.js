/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('vendor', {
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
		active: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ACTIVE'
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
		modifyBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MODIFY_BY'
		},
		modifyDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'MODIFY_DATE'
		},
		address: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ADDRESS'
		},
		moduleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MODULE_ID'
		},
		staffId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'STAFF_ID'
		},
		isInvoice: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'IS_INVOICE'
		},
		isCoc: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'IS_COC'
		},
		regionId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'REGION_ID'
		},
		regionShippingId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'REGION_SHIPPING_ID'
		},
		module: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'MODULE'
		}
	}, {
		tableName: 'VENDOR'
	});
};
