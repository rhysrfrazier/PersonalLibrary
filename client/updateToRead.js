//function to search a novel. the click listener is in the HTML file
async function getNovel() {

    sessionStorage.clear()

    const titleInput = document.querySelector('#title').value.toLowerCase()

    const { data: novelObj } = await axios.get(`http://localhost:3001/novels/${titleInput}`) //yoooo, desctructure ALL the things!! And you can rename it too!!

    sessionStorage.setItem('id', novelObj._id)

    makeModal(novelObj)
}

//function to create modal
function makeModal(novelObj) {

    const {title, author, img, genre_main, subgenres, read, synopsis} = novelObj

    //.join courtesy of stack overflow and mdn
    const newModal = document.createElement('div')
    newModal.setAttribute('id', 'bkgrnd')
    document.body.appendChild(newModal)
    newModal.innerHTML =
        `<div id="modal">
            <i onclick="exit()" class="fa-solid fa-xmark fa-lg" title="exit" id="x"></i>
            <h1 id="mTitle">${title.toUpperCase()}</h1>
            <p id="mAuthor">${author.first_name} ${author.last_name}</p>
            <img id="mImg" src=${img}>
            <p id="genre">${genre_main}</p>
            <p id="subgenres">Sub-Genres: ${subgenres.join(', ')}</p>
            <p id="read">Read: ${read}</p>
            <p id="synop">${synopsis}</p>
            <a href="updateForm.html" class="btn" id="update">Update this!</a>
        </div>`
}

//function to x out of modal
function exit() {
    (document.getElementById('bkgrnd')).remove()
}