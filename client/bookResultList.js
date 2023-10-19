//Much help and explanation from Riley to figure out how to make searching and filtering more abstract for this file

//nav functions
function back() {
    window.sessionStorage.clear()
    history.back()
}

//function to get and sort results from db, which calls populate
async function search() {
    //pulling variables from storage
    const collection = window.sessionStorage.getItem('collection')
    const objKey = window.sessionStorage.getItem('lvlTwo')
    const objValue = window.sessionStorage.getItem('lvlThree')

    console.log(objKey, objValue)
    //getting and filtering results
    const call = await axios.get(`http://localhost:3001/${collection}`) //an array of all results (e.g. all novels)
    const results = call.data
    console.log(results)

    const filteredResults = results.filter((result) => {
        if (result[objKey] == null) {
            return false //this keeps it from erroring out when you search by rating, which some books don't have
        } else {
            console.log(typeof result[objKey])
            if (objKey === 'author') {
                return result[objKey].last_name.toLowerCase() === objValue.toLowerCase() //this drills into book the object to get author info
            } else if (objKey == 'subgenres') {
                return !!result[objKey].find((value) => value.toLowerCase() === objValue)//the double bang returns a boolean value for truthiness and falsiness, instead of the actual value (which might be truthy of falsey but js is stupid and doesn't bool it on it's own)
            } else {
                if (typeof result[objKey] !== 'string') {
                    return result[objKey].toString() === objValue // sessionStorage is always a string, so this is making sure we're comparing apples to apples by making whatever's in the object a string to match
                } else {
                    return result[objKey].toLowerCase() === objValue.toLowerCase() //this has to be in here because we can't stringify a string, so it'll error if we don't and try to search by a string
                }
            }
        }
    })

    console.log(filteredResults)
    //now you have an array of filtered results that you can loop through
    for (let i = 0; i <= filteredResults.length; i++) {
        if (filteredResults.length === 0) {
            console.log('No results')
        } else {
            let book = filteredResults[i]
            populate(book)
            console.log(book)
        }
    }
}

//function to populate the HTML
function populate(book) {

    //making sure to only populate the fields that actually exist, regardless of the search params. Freaking turnary conditionals for brevity because life is suffering and I wish I were a shrub
    //I ought to put this in turnary conditionals once I fix all the other bugs
    const d = new Date(book.date)
    const year = d.getFullYear()
  
    let read 
    let rating
    let yr
    
    if(book.read == true && book.rating == undefined){
        rating = 'Not rated'
    } else if (book.rating == undefined) {
        rating = ''
    } else {
        rating = `${book.rating}/5`
    }

    if(book.read == undefined){
        read = ''
    } else {
        read = `Read: ${book.read}`
    }

    if (!year){
        yr = ''
    } else {
        yr = year
    }

    const resultList = document.querySelector('#resultList')
    const listItem = document.createElement('li')
    // listItem.addEventListener(click, showModal(book))
    listItem.classList.add('resultCard')
    resultList.appendChild(listItem)
    listItem.innerHTML =
        `<div class="imgSide">
        <img class="img" src=${book.img}>
    </div>
    <div class="dataSide">
        <h1 class="title">${book.title}</h1>
        <h2 class="author">${book.author.first_name} ${book.author.last_name}</h2>
        <p>${read}</p>
        <p>${rating}</p>
        <p>${yr}</p>
    </div>`

    //add a click handler
}

//TEST
function test() {
    populate()
}