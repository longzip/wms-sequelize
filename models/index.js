'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};
// const { v4: uuidv4 } = require("uuid");
// const moment = require("moment");
// // console.log(uuidv4());

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Op = Sequelize.Op;

// (async()=>{
//   await db.MuaHang.destroy({
//     truncate: true
//   })
//   let id = uuidv4();
//   let mh = await db.MuaHang.create({
//     id,
//     soPhieu: 'MH00001',
//     noiDung: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
//     trangThai: 'Chờ duyệt',
//     MuaHangCTs: [
//       {
//         id: uuidv4(),
//         tenMatHang: 'Sed ut perspiciatis unde omnis iste',
//         xuatXu: 'Rackham',
//         donViTinh: 'C',
//         soLuong: 1,
//         thoiGianCungCap: moment().subtract(2,'days'),
//         lyDoYeuCau: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire',
//         muaHangId: id
//       }
//     ]
//   },{include: [ db.MuaHangCT ]})
//   console.log(mh)
//   let muaHangs = await db.MuaHang.findAll({raw:false,include: {model: db.MuaHangCT}});
//   console.log("All users:", JSON.stringify(muaHangs, null, 2));
// })()

module.exports = db;
