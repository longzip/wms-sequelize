/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('comment', {
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
		documentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DOCUMENT_ID'
		},
		content: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CONTENT'
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
		tableName: 'COMMENT'
	});
};
