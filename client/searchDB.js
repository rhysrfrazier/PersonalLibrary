//static constants
const chooseCol = document.querySelector('#collections')
const allParams = document.querySelector('#allParams')
const scParams = document.querySelector('#scParams')
const novelParams = document.querySelector('#novelParams')
const readBool = document.querySelector('#readParams')
const typedInput = document.querySelector('#typedInput')
const rateParams = document.querySelector('#rateParams')

searchBtn = document.querySelector('#submit')

//any dynamic universal constants

//removal helper functions
function removeAll() {
    document.querySelector('#allDiv').style.display = 'none'
    document.querySelector('#scDiv').style.display = 'none'
    document.querySelector('#novelDiv').style.display = 'none'
    document.querySelector('#readDiv').style.display = 'none'
    document.querySelector('#typedInput').style.display = 'none'
    document.querySelector('#rateDiv').style.display = 'none'
}

function removeLvlTwo() {
    document.querySelector('#readDiv').style.display = 'none'
    document.querySelector('#typedInput').style.display = 'none'
    document.querySelector('#rateDiv').style.display = 'none'
}

//session storage helper functions



//changelisteners for dynamic html
chooseCol.addEventListener('change', (e) => {
    if (e.target.value === 'books') {
        removeAll()
        document.querySelector('#allDiv').style.display = 'block'
    } else if (e.target.value === 'specials') {
        removeAll()
        document.querySelector('#scDiv').style.display = 'block'
    } else if (e.target.value === 'novels') {
        removeAll()
        document.querySelector('#novelDiv').style.display = 'block'
    } else {
        removeAll()
    }
})

allParams.addEventListener('change', (e) => {
    //syntax courtesy of late-night debugging with Riley
    if (['title', 'author.last_name'].includes(e.target.value)) {
        document.querySelector('#typedInput').style.display = 'block'
    } else {
        removeLvlTwo()
    }
})

scParams.addEventListener('change', (e) =>{
    if (['title', 'author.last_name', 'date'].includes(e.target.value)) {
        document.querySelector('#typedInput').style.display = 'block'   
    } else {
        removeLvlTwo()
    }
})

novelParams.addEventListener('change', (e) => {
    if(['title', 'author.last_name', 'subgenre'].includes(e.target.value)){
        removeLvlTwo()
        document.querySelector('#typedInput').style.display = 'block'
    } else if (e.target.value === 'read'){
        removeLvlTwo()
        document.querySelector('#readDiv').style.display = 'block'
    } else if (e.target.value === 'rating') {
        removeLvlTwo()
        document.querySelector('#rateDiv').style.display = 'block'
    } else {
        removeLvlTwo()
    }
})

//actual search functions

