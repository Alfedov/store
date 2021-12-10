const express = require('express')
const sequelize = require('./database')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()