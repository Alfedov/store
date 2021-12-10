const express = require('express')
const sequelize = require('./database')
const models = require('./models/models')
const cors = require('cors')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Work!'})
})



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