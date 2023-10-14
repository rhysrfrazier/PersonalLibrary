const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')

const authorController = require ('./controllers/authorController')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.get('/', (req,res) => res.send('Welcome?'))
app.get('/authors', authorController.getAllAuthors)
app.get('/authors/:id', authorController.getOneAuthor)

app.listen(PORT, () => console.log(`Listening on port:${PORT}`))