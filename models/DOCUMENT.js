/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('document', {
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
		typeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'TYPE_ID'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'STATE'
		},
		createBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'CREATE_BY'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: '(getdate())',
			field: 'CREATE_DATE'
		}
	}, {
		tableName: 'DOCUMENT'
	});
};
