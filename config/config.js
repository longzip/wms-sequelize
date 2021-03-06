require('dotenv').config()

const dbDetails = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT,
  options: {
    trustServerCertificate: false,
  }
}

module.exports = {
  development: dbDetails,
  test: dbDetails,
  production: dbDetails
}