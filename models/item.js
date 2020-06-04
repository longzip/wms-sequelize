/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('item', {
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
		length: {
			type: "MONEY",
			allowNull: true,
			field: 'LENGTH'
		},
		width: {
			type: "MONEY",
			allowNull: true,
			field: 'WIDTH'
		},
		height: {
			type: "MONEY",
			allowNull: true,
			field: 'HEIGHT'
		},
		typeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'TYPE_ID'
		},
		unitId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'UNIT_ID'
		},
		imageUrl: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'IMAGE_URL'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'CREATE_DATE'
		},
		active: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ACTIVE'
		},
		groupItem: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'GROUP_ITEM'
		},
		moduleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MODULE_ID'
		},
		volumn: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'VOLUMN'
		},
		woodTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'WOOD_TYPE_ID'
		},
		factoryId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'FACTORY_ID'
		}
	}, {
		tableName: 'ITEM'
	});
};
