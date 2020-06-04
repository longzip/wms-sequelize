/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('range', {
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
		type: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'TYPE'
		},
		height: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'HEIGHT'
		},
		code: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CODE'
		},
		timeOutTarget: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'TIME_OUT_TARGET'
		},
		stepNextId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'STEP_NEXT_ID'
		},
		factoryId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'FACTORY_ID'
		}
	}, {
		tableName: 'RANGE'
	});
};
