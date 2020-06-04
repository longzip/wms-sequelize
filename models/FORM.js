/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('form', {
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
		documentTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DOCUMENT_TYPE_ID'
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
		source: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'SOURCE'
		},
		star: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'STAR'
		}
	}, {
		tableName: 'FORM'
	});
};
