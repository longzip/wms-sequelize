/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('viewBaoCaoTinhHinhTHucHien', {
		departmentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'departmentId'
		},
		departmentCode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'departmentCode'
		},
		departmentName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'departmentName'
		},
		year: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'year'
		},
		week: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'week'
		},
		dayOfWeek: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'dayOfWeek'
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'date'
		},
		parentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'parentId'
		},
		parentName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'parentName'
		},
		rate: {
			type: "MONEY",
			allowNull: true,
			field: 'rate'
		},
		itemId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'itemId'
		},
		itemName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'itemName'
		},
		unit: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'unit'
		},
		length: {
			type: "MONEY",
			allowNull: true,
			field: 'length'
		},
		width: {
			type: "MONEY",
			allowNull: true,
			field: 'width'
		},
		height: {
			type: "MONEY",
			allowNull: true,
			field: 'height'
		},
		volumn: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'volumn'
		},
		quantity: {
			type: "MONEY",
			allowNull: true,
			field: 'quantity'
		}
	}, {
		tableName: 'View_baoCaoTinhHinhTHucHien'
	});
};
