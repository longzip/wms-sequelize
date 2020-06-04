/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('field', {
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
		documentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DOCUMENT_ID'
		},
		field: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'FIELD'
		},
		typeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'TYPE_ID'
		},
		location: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'LOCATION'
		},
		value: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'VALUE'
		}
	}, {
		tableName: 'FIELD'
	});
};
