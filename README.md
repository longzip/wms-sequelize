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

npx sequelize db:migrate:undo:all
npx sequelize db:migrate
npx sequelize-cli db:seed:all

npx sequelize-cli db:seed:undo

npx sequelize-cli model:generate --name ProposalForm --attributes name:string
npx sequelize-cli model:generate --name OrderMeta --attributes name:string
npx sequelize-cli seed:generate --name order-meta-seeder
