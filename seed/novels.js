const db = require('../db')
const { Novel, Author } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const addNovels = async () => {
    const novels = [
        {
            title: 'The Book of Lost Things',
            author: '65298af181ed9d755c43d305',
            genre_main: 'Fiction',
            subgenres: ['Adventure', 'Horror', 'Fairy Tale', 'YA'],
            synopsis: 'High in his attic bedroom, twelve-year-old David mourns the death of his mother, with only the books on his shelf for company. But those books have begun to whisper to him in the darkness. Angry and alone, he takes refuge in his imagination and soon finds that reality and fantasy have begun to meld. While his family falls apart around him, David is violently propelled into a world that is a strange reflection of his own -- populated by heroes and monsters and ruled by a faded king who keeps his secrets in a mysterious book, The Book of Lost Things.',
            img: 'https://i.imgur.com/Ej76Tcx.jpg',
            read: true,
            rating: 5,
            comments: 'A book about mourning, moving on, and letting go of resentment. Dark and bittersweet.'
        },
        {
            title: 'Woman on the Edge of Time',
            author: '65298af181ed9d755c43d306',
            genre_main: 'Fiction',
            subgenres: ['Science Fiction', 'Utopian', 'Dystopian', 'Feminist', 'LGBT+', 'Social Justice', 'Time Travel'],
            synopsis: 'Connie Ramos is a Mexican American woman living on the streets in New York. Once ambitious and proud, she has lost her child, her husband, her dignity -- and now they want to take her sanity. After being unjustly committed to a mental institution, Connie is contacted by an envoy from the year 2137, who shows her a time of sexual and racial equality, environmental purity,and unprecedented self-actualization. But Connie also bears witness to another potential outcome: a society of grotesque exploitation in which the barrier between person and commodity has finally been eroded. One will become our world. And connie herself may strike the decisive blow.',
            img: 'https://i.imgur.com/GorKnOY.jpg',
            read: true
        },
        {
            title: "The Pirate Queen",
            author: '65298af181ed9d755c43d307',
            genre_main: 'Nonfiction',
            subgenres: ['History', 'Memoir', 'Biography', 'Adventure', 'Travel', 'Pirates', 'travelogue'],
            synopsis: "The Pirate Queen begins in Ireland with the infamous Grace O'Malley, a ruthless pirate and scourge to the most powerful fleets of sixteenth-century Europe. This Irish clan chieftain, sea captain, and pirate queen was a contemporary of Elizabeth I, a figure whose life is the stuff of myth. Regularly raiding English ships caught off Ireland's west coast, O'Malley was purported to have fought the Spanish armada just hours after giving birth to her son. She had several husbands in her lifetime, and acquired lands and castles that still dot the Irish coastline today. But Grace O'Malley was not alone. Since ancient times, women have rowed and sailed, commanded and fished, built boats and owned fleets. As pirate, captain's wives, lighthouse keepers and sailors in disguise they've explored coastlines and set off alone across unknown seas. Yet their incredible contributions have been nearly erased from the history books. In The Pirate Queen, Barbara Sjoholm brings some of these extraordinary women back to life, taking the reader on an unforgettable journey from the wild Irish coast to the haunting Scandinavian fjords in this meticulously researched, colorfully written, and truly original work",
            img: 'https://i.imgur.com/967m0Fs.jpg',
            read: false,
        },
        {
            title: 'Catch-22',
            author: '65298af181ed9d755c43d308',
            genre_main: 'Fiction',
            subgenres: ['Historical Fiction', 'World War II', 'American', 'Satire', 'Dark Humor'],
            synopsis: "Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he's assigned, he'll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.",
            img: 'https://i.imgur.com/uRDnU0x.jpg',
            read: true,
            rating: 5,
            comments: "The chronology is difficult to follow, but making a timeline as you read is worth the effort. That, combined with the spiral into ever darker and less humorous content as the book goes on, serves as a good reflection of Yosarian's psyche. At some indiscernible point there seems to be a break from reality altogether. Irreverant, poignant, funny, and heartbreaking satire."
        }
    ]

    await Novel.insertMany(novels)
    console.log('novels added')
}

const run = async () => {
    await addNovels()
    db.close
}

run()