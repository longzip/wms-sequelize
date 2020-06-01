require("dotenv").config();
const express = require('express')
const app = express()
const port = 3000

const { sequelize } = require('./models')

// sequelize.sync({ force: true })
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        sequelize.sync({ force: true })
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))