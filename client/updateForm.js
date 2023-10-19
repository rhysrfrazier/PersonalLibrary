//nav functions
function back() {
    window.sessionStorage.clear()
    history.back()
}

function halt(){
    window.location.href = 'stop.html'
}

function addTitle(){
    const title = sessionStorage.getItem('title')
    document.getElementById('title').innerHTML = title.toUpperCase()
}


//function to take input for use in the update method
async function updateNovel(){
    
    //first retrieve the data from session storage
    const id = sessionStorage.getItem('id')

    //now retrieve the data from the form
    const newRating = document.getElementById('rating').value
    const newComment = document.getElementById('comment').value
    console.log(newComment)

    //now do the update
    await axios.put(`http://localhost:3001/novels/${id}`, {
        read:true,
        rating: newRating,
        comments: newComment,
    })
        .then((response) => {
            makeModal()
        })
}

function makeModal(){
    document.getElementById('home').style.display = 'none'
    const newModal = document.createElement('div')
    newModal.setAttribute('id', 'bkgrnd')
    document.body.appendChild(newModal)
    newModal.innerHTML =
        `<div id="modal">
            <h1 id="message">All done! Tap Wilbur the Worm and he'll take you home now.</h1>
            <a id="mHome" aria-label="home" href="home.HTML"><img id="mLogo" src="worm.png" aria-hidden="true"></a>
         </div>`
}