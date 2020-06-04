/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('workCenter', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			primaryKey: true,
			field: 'ID'
		},
		guid: {
			type: DataTypes.UUID,
			allowNull: false,
			field: 'GUID'
		},
		stepId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'STEP_ID'
		},
		workResourcesId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'WORK_RESOURCES_ID'
		},
		workResourcesQuantity: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'WORK_RESOURCES_QUANTITY'
		},
		itemId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ITEM_ID'
		},
		quantityPerCycle: {
			type: "MONEY",
			allowNull: true,
			field: 'QUANTITY_PER_CYCLE'
		},
		timePerCycle: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'TIME_PER_CYCLE'
		},
		workers: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'WORKERS'
		},
		active: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ACTIVE'
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
		createBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'CREATE_BY'
		},
		modifyDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'MODIFY_DATE'
		}
	}, {
		tableName: 'WORK_CENTER'
	});
};