const express = require('express')
const sequelize = require('./database')
const models = require('./models/models')
const cors = require('cors')
const fileupload = require('express-fileupload')
const router = require('./routers/index')
const errorHandler = require('./midelware/ErrorHandlingMiddleware')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(fileupload({}))
app.use('/api', router)

// Обработка ошибок
app.use(errorHandler)

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