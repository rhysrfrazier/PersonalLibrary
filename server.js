const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')

const authorController = require ('./controllers/authorController')
const novelController = require('./controllers/novelController')
const specialController = require('./controllers/specialController')
const comboController = require('./controllers/comboController')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.get('/', (req,res) => res.send('Welcome?'))

app.get('/books', comboController.getAllBooks)

app.get('/authors', authorController.getAllAuthors)
app.get('/authors/:id', authorController.getOneAuthor)
app.post('/authors', authorController.createAuthor)
app.put('/authors/:id', authorController.updateAuthor)
app.delete('/authors/:id', authorController.deleteAuthor)

app.get('/novels', novelController.getAllNovels)
app.get('/novels/:title', novelController.getOneNovel)
app.post('/novels', novelController.createNovel)
app.put('/novels/:id', novelController.updateNovel)
app.delete('/novels/:title', novelController.deleteNovel)

app.get('/specials', specialController.getAllSpecials)
app.get('/specials/:title', specialController.getOneSpecial)
app.post('/specials', specialController.createSpecial)
app.put('/specials/:title', specialController.updateSpecial)
app.delete('/specials/:title', specialController.deleteSpecial)

app.listen(PORT, () => console.log(`Listening on port:${PORT}`))