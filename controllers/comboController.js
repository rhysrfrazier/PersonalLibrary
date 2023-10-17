const { Novel, Special} = require('../models')

module.exports = {getAllBooks}

async function getAllBooks (req,res){
    try{
        const novels = await Novel.find().populate('author').exec()
        const specials = await Special.find().populate('author').exec()
        const books = novels.concat(specials)
        books.sort((bookA, bookB) =>{
            const lastA = bookA.author.last_name
            const lastB = bookB.author.last_name
            if(lastA < lastB) {
                return -1
            } else if (lastA > lastB){
                return 1
            } else {
                return 0
            }
        })
        return res.json(books)
    } catch (e) {
        return res.status(500).send('Server error')
    }
}