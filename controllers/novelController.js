const { Novel } = require('../models')

module.exports = {
    getAllNovels,
    getOneNovel,
    createNovel,
    updateNovel,
    deleteNovel
}

async function getAllNovels (req, res){
    try{
        const novels = await Novel.find().populate('author').exec()
        novels.sort((novelA, novelB) => {
            const lastA = novelA.author.last_name
            const lastB = novelB.author.last_name
            if(lastA < lastB) {
                return -1
            } else if (lastA > lastB){
                return 1
            } else {
                return 0
            }
        })
        return res.json(novels)
    } catch (e) {
        return res.status(500).send('Server error.')
    }
}

async function getOneNovel (req, res){
    try{
        const input = req.params.title
        const novel = await Novel.findOne({title: input}).populate('author').exec()
        if (novel) {
            return res.json(novel)
        } else {
            return res.status(404).send('novel not found')
        }
    } catch (e) {
        return res.status(500).send('Server error.')
    }
}

async function createNovel(req,res) {
    try{
        const novel = new Novel(req.body)
        await novel.save()
        return res.status(201).json({novel})
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function updateNovel(req, res) {
    try{
        const id = req.params.id
        const novel = await Novel.findByIdAndUpdate(id, req.body, {new: true})
        if (novel) {
            return res.status(200).json(novel)
        }
        throw new Error('Something went wrong.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function deleteNovel (req, res) {
    try{
        const input = req.params.title
        const novel = await Novel.findOneAndDelete({title: input})
        if (novel){
            return res.status(200).send('Novel deleted')
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}