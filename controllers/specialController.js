const { Special } = require('../models')

module.exports = {
    getAllSpecials,
    getOneSpecial,
    createSpecial,
    updateSpecial,
    deleteSpecial
}

async function getAllSpecials(req, res) {
    try {
        const specials = await Special.find().populate('author').exec()
        specials.sort((specialA, specialB) => {
            const lastA = specialA.author.last_name
            const lastB = specialB.author.last_name
            if (lastA < lastB) {
                return -1
            } else if (lastA > lastB) {
                return 1
            } else {
                return 0
            }
        })
        return res.json(specials)
    } catch (e) {
        return res.status(500).send('Server error.')
    }
}

async function getOneSpecial(req, res) {
    try {
        const input = req.params.title
        const special = await Special.findOne({ title: input }).populate('author').exec()
        if (special) {
            return res.json(special)
        } else {
            return res.status(400).send('Special collection item not found')
        }
    } catch (e) {
        return res.status(500).send('Server error')
    }
}

async function createSpecial(req, res) {
    try {
        const special = new Special(req.body)
        await special.save()
        return res.status(201).json({ special })
    } catch (e) {
        return res.status(500).send('Server error')
    }
}

async function updateSpecial(req, res) {
    try{
        const input = req.params.title
        const special = await Special.findOneAndUpdate({title: input}, req.body, {new: true})
        if (special) {
            return res.status(200).json(special)
        }
        throw new Error('Something went wrong.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function deleteSpecial (req, res) {
    try{
        const input = req.params.title
        const special = await Special.findOneAndDelete({title: input})
        if (special){
            return res.status(200).send('Item deleted')
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}