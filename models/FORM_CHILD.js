/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('formChild', {
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
		formId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'FORM_ID'
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
		tableName: 'FORM_CHILD'
	});
};
