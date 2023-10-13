const db = require('../db')
const { Author } = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error:"))

const addAuthors = async () => {
    const authors = [
        {
            last_name: 'Elliot',
            first_name: 'George',
            born: '1819-11-22',
            died: '1880-12-22',
            nationality: 'English',
            bio: 'Mary Ann Evans, known by her pen name George Eliot, was an English novelist, poet, journalist, translator, and one of the leading writers of the Victorian era.',
            hist_context: 'https://en.wikipedia.org/wiki/Timeline_of_the_19th_century',
            img: 'https://cdn.britannica.com/03/147603-050-AEDF3416/George-Eliot-Frederic-William-Burton-engraving-chalk.jpg',
        },
        {
            last_name: 'Whitman',
            first_name: 'Walt',
            born: '1819-05-31',
            died: '1892-03-26',
            nationality: 'American',
            bio: 'Walter Whitman Jr. was an American poet, essayist, and journalist. He is considered one of the most influential poets in American history. Whitman incorporated both transcendentalism and realism in his writings and is often called the father of free verse.',
            hist_context: 'https://en.wikipedia.org/wiki/Timeline_of_the_19th_century',
            img: 'https://ucbcluj.files.wordpress.com/2016/06/whitman2.jpg'
        },
        {
            last_name: 'Connolly',
            first_name: 'John',
            born: '1968-05-31',
            nationality: 'Irish',
            bio: 'John Connolly is best known for his series of novels staring private detective Charlie Parker. He was educated at Synge Street CBS and graduated with a BA in English from Trinity College, Dublin, and a Masters in journalism from Dublin City University. Before becoming a full-time novelist, he worked as a journalist, a barman, a local government official, a waiter, and a gofer at Harrods department store in London',
            img: 'https://jomec.co.uk/thecardiffian/wp-content/uploads/2017/11/john.jpg'
        },
        {
            last_name: 'Piercy',
            first_name: 'Marge',
            born: '1936-03-31',
            nationality: 'American',
            bio: 'Marge Piercy is an American progressive activist, feminist, and writer. Her work includes Woman on the Edge of Time; He, She and It, which won the 1993 Arthur C. Clarke Award; and Gone to Soldiers, a New York Times Best Seller and a sweeping historical novel set during World War II.',
            hist_context: 'https://en.wikipedia.org/wiki/Timeline_of_the_20th_century',
            img: 'https://masonstreetreview.files.wordpress.com/2019/10/marge1.jpg'
        },
        {
            last_name: 'Sjoholm',
            first_name: 'Barbara',
            born: '1950-10-17',
            nationality: 'American',
            bio: "Barbara Sjoholm (born Barbara Wilson) was born on 17 October 1950, in Long Beach, California. In 2000, she legally changed her name to 'Sjoholm' and writes under that name. She continues to publish mysteries under the last name of Wilson.",
        },
        {
            last_name: 'Heller',
            first_name: 'Joseph',
            born: '1923-05-01',
            died: '1999-12-12',
            nationality: 'America',
            bio: 'Joseph Heller was an American author of novels, short stories, plays, and screenplays. His best-known work is the 1961 novel Catch-22, a satire on war and bureaucracy, whose title has become a synonym for an absurd or contradictory choice. He was nominated in 1972 for the Nobel Prize in Literature.',
            hist_context: 'https://en.wikipedia.org/wiki/Timeline_of_the_20th_century',
            img: 'https://d28hgpri8am2if.cloudfront.net/author_images/4152/joseph-heller-1061642.jpg'
        }
    ]

    await Author.insertMany(authors)
    console.log('Authors added')
}

const run = async () => {
    await addAuthors()
    db.close
}

run()