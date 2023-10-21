//Nav functions
function back() {
    window.sessionStorage.clear()
    history.back()
}

function reveal(){
    const menu = document.getElementById('menu')

    if (menu.style.display === 'flex'){
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex'
    }
}

async function apiCall() {
    const {data: bookArray} = await axios.get('http://localhost:3001/books')

    for (let i=0; i<=bookArray.length; i++){
        if(bookArray.length === 0){
            noResults()
        } else {
            let book = bookArray[i]
            populate(book)
        }
    }
}

function populate(book) {

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
        <h1 class="title">${book.title.toUpperCase()}</h1>
        <h2 class="author">${book.author.first_name} ${book.author.last_name}</h2>
        <p>${read}</p>
        <p>${rating}</p>
        <p>${yr}</p>
    </div>`

    //add a click handler for the eventual modal
}

function noResults(){
    const message = document.createElement('h1')
    message.setAttribute('id', 'message')
    document.body.appendChild(message)
    message.innerHTML= "Uh Oh! We couldn't find any results for your search. Go back and try something else."
}