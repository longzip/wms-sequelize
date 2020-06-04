/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('po', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'id'
		},
		guid: {
			type: DataTypes.UUIDV4,
			allowNull: false,
			field: 'guid'
		},
		code: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'code'
		},
		parent: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'parent'
		},
		stepId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'stepId'
		},
		itemId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'itemId'
		},
		quantity: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'quantity'
		},
		counts: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'counts'
		},
		order: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'order'
		},
		time: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'time'
		},
		shift: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'shift'
		},
		week: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'week'
		},
		year: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'year'
		},
		market: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'market'
		},
		ton: {
			type: "MONEY",
			allowNull: true,
			field: 'ton'
		},
		soLuongUuTien: {
			type: "MONEY",
			allowNull: true,
			field: 'soLuongUuTien'
		},
		hanMucTon: {
			type: "MONEY",
			allowNull: true,
			field: 'hanMucTon'
		},
		soLuongCanSanXuat: {
			type: "MONEY",
			allowNull: true,
			field: 'soLuongCanSanXuat'
		},
		status: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'status'
		},
		type: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'type'
		},
		root: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'root'
		},
		number: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'number'
		},
		factor: {
			type: DataTypes.FLOAT,
			allowNull: true,
			defaultValue: '((1.0))',
			field: 'factor'
		}
	}, {
		tableName: 'PO'
	});
};
