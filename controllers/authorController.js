const { Author } = require('../models')

module.exports = {
    getAllAuthors,
    getOneAuthor,
    createAuthor,
    updateAuthor,
    deleteAuthor
}

async function getAllAuthors(req, res) {
    try {
        const authors = await Author.find()
        authors.sort((authorA, authorB) => {
            const lastA = authorA.last_name
            const lastB = authorB.last_name
            if (lastA < lastB) {
                return -1
            } else if (lastA > lastB) {
                return 1
            } else {
                return 0
            }
        })
        return res.json(authors)
    } catch (e) {
        return res.status(500).send('Server error.')
    }
}

async function getOneAuthor(req, res) {
    try {
        const id = req.params.id
        const author = await Author.findById(id)
        if (author) {
            return res.json(author)
        } else {
            return res.status(404).send('author not found')
        }
    } catch (e) {
        return res.status(500).send('Server error.')
    }
}

async function updateAuthor(req, res) {
    try {
        const id = req.params.id
        const author = await Author.findByIdAndUpdate(id, req.body, { new: true })
        if (author) {
            return res.status(200).json(author)
        }
        throw new Error('Something went wrong.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function createAuthor(req, res) {
    try {
        const author = new Author(req.body)
        await author.save()
        return res.status(201).json({ author })
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function deleteAuthor(req, res) {
    try{
        const id = req.params.id
        const author = await Author.findByIdAndDelete(id)
        if (author){
            return res.status(200).json(author)
        }
        throw new Error('Something went wrong')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}
