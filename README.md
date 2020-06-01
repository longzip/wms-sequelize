# wms
-sequelize
Woodsland ORM Database

DB_USERNAME = sa
DB_PASSWORD = 123456@a123456
DB_NAME = Test03
DB_HOST = 123.27.2.59
DB_DIALECT = mssql
DB_PORT = 1300
JWT_SECRET = toicotientoicotinhyeu

require
("dotenv").config
();
const express = require
('express')
const app = express
()
const port = 3000

const { sequelize } = require
('wms-sequelize')

sequelize.sync
({
force:
true })
sequelize
    .authenticate
()
    .then
(() => {
        console.log
('Connection has been established successfully.');
        sequelize.sync
({
force:
true })
    })
    .catch
(err => {
        console.error
('Unable to connect to the database:', err);
    });

app.get
('/',
(req, res) => res.send
('Hello World!'))

app.listen
(port,
() => console.log
(`Example app listening at
http:
//
localhost:
${port}`))