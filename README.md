# wms

-sequelize
Woodsland ORM Database

DB_USERNAME = sa
DB_PASSWORD = 123456@a123456
DB_NAME = Test03
DB_HOST = 192.168.2.6
DB_DIALECT = mssql
DB_PORT = 1300
JWT_SECRET = toicotientoicotinhyeu

node_modules/.bin/sequelize db:migrate:undo:all
node_modules/.bin/sequelize db:migrate
npx sequelize-cli model:generate --name User --attributes name:string
npx sequelize-cli db:seed:all
