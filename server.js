const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')

//models req.

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

//routes

app.listen(PORT, () => console.log(`Listening on port:${PORT}`))