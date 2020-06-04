/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('whInputType', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
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
		itype: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ITYPE'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'NAME'
		},
		moduleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MODULE_ID'
		},
		module: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'MODULE'
		}
	}, {
		tableName: 'WH_INPUT_TYPE'
	});
};
