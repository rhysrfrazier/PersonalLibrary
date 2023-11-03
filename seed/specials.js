const db = require('../db')
const { Special, Author } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const addSpecials = async () => {
    const specials = [
        {
            title: 'Adam Bede',
            author: '65298af181ed9d755c43d303', //oh my god you can just do Author.whatever??? maybe?
            date: '1906',
            publisher: "Everyman's Library (Richard Clay & Sons, Ltd.",
            editor: 'Ernest Rhys',
            editor_bio: "A Welsh-English writer of essays, stories, poetry, novels, and plays. Best known for his role as founding editor of the Everyman's Library series of affordable classics. 1859-1946",
            img: 'https://i.imgur.com/xdtsBk7.jpg',
            provenance: 'Gift from Dad, 2022. Purchased at Antiques on Main in Christiansburg VA. Cursive writing in the front, perhaps a name, indecipherable, folowed by "After the fire - 1906"',
            condition: 'Minor water damage and folded pages, some separation of cover, but overall good. Would benefit from a book cradle'
        },
        {
            title: 'Song of Myself',
            author: '65298af181ed9d755c43d304',
            date: '1951',
            publisher: 'Castle Books (Greystone Press NY)',
            img: 'https://i.imgur.com/0dShA0c.jpg',
            provenance: 'An anniversary gift from Riley in 2023. Purchased from Wonder Books on Bukeystown Pike.',
            condition: 'Bindng a little worn, but otherwise excellent.'
        },
        {
            title: "WHitman's Poetical Works",
            author: '65298af181ed9d755c43d304',
            date: '1902',
            publisher: 'Thomas Y. Crowell & Co., NY',
            img: 'https://i.imgur.com/NrfzaaT.jpg',
            provenance: "An anniversary gift from Riley in 2023. Purchased from Wonder Books on Buckeystown Pike. Previously owned by Anna Alba, whose nameplate is in the front of the book. Contains a Washington Post pice about poet Mark Doty and Whitman from May 3, 2020; a newspaper clipping with the year 1915 written on it in pencil about the sale of Whitman's family home, and newsprint cutout picture of Whitman from May 17, 1916",
            condition: 'Some cover separation, but very good inside'
        },
    ]
    await Special.insertMany(specials)
    console.log('added books to special collections')
}

const run = async () => {
    await addSpecials()
    db.close()
}

run()