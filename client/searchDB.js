//nav functions
function halt(){
    window.location.href = 'stop.html'
}

//static constants
const chooseCol = document.querySelector('#collections')
const allParams = document.querySelector('#allParams')
const scParams = document.querySelector('#scParams')
const novelParams = document.querySelector('#novelParams')
const readParams = document.querySelector('#readParams')
const typedInput = document.querySelector('#typedInput')
const rateParams = document.querySelector('#rateParams')

const searchBtn = document.querySelector('#submit')

//removal helper functions
function resetCol(){
    chooseCol.value=''
} //this one is called in the html file

function removeAll() {
    document.querySelector('#allDiv').style.display = 'none'
    document.querySelector('#scDiv').style.display = 'none'
    document.querySelector('#novelDiv').style.display = 'none'
    document.querySelector('#readDiv').style.display = 'none'
    typedInput.style.display = 'none'
    document.querySelector('#rateDiv').style.display = 'none'
}

function removeLvlTwo() {
    document.querySelector('#readDiv').style.display = 'none'
    typedInput.style.display = 'none'
    document.querySelector('#rateDiv').style.display = 'none'
}

function resetAll(){
    allParams.value = ''
    scParams.value = ''
    novelParams.value = ''
    readParams.value = ''
    typedInput.value = ''
    rateParams.value = ''
}

function resetlvlTwo(){
    readParams.value = ''
    typedInput.value = ''
    rateParams.value = ''
}

//session storage helper functions. Fewer keystrokes i guess
function store(key, e) {
    window.sessionStorage.setItem(key, e.target.value)
}

function unstore(key) {
    window.sessionStorage.removeItem(key)
}

//changelisteners for dynamic html and response recording
chooseCol.addEventListener('change', (e) => {
    if (e.target.value === 'books') {
        resetAll()
        removeAll()
        document.querySelector('#allDiv').style.display = 'block'
        store('collection', e)
    } else if (e.target.value === 'specials') {
        resetAll()
        removeAll()
        document.querySelector('#scDiv').style.display = 'block'
        store('collection', e)
    } else if (e.target.value === 'novels') {
        resetAll()
        removeAll()
        document.querySelector('#novelDiv').style.display = 'block'
        store('collection', e)
    } else {
        resetAll()
        removeAll()
        unstore('collection')
    }
})

allParams.addEventListener('change', (e) => {
    //syntax courtesy of late-night debugging with Riley
    if (['title', 'author'].includes(e.target.value)) {
        document.querySelector('#typedInput').style.display = 'block'
        store('lvlTwo', e)
    } else {
        resetlvlTwo()
        removeLvlTwo()
        unstore('lvlTwo')
    }
})

scParams.addEventListener('change', (e) => {
    if (['title', 'author', 'date'].includes(e.target.value)) {
        document.querySelector('#typedInput').style.display = 'block'
        store('lvlTwo', e)
    } else {
        resetlvlTwo()
        removeLvlTwo()
        unstore('lvlTwo')
    }
})

novelParams.addEventListener('change', (e) => {
    if (['title', 'author', 'subgenres'].includes(e.target.value)) {
        resetlvlTwo()
        removeLvlTwo()
        document.querySelector('#typedInput').style.display = 'block'
        store('lvlTwo', e)
    } else if (e.target.value === 'read') {
        resetlvlTwo()
        removeLvlTwo()
        document.querySelector('#readDiv').style.display = 'block'
        store('lvlTwo', e)
    } else if (e.target.value === 'rating') {
        resetlvlTwo()
        removeLvlTwo()
        document.querySelector('#rateDiv').style.display = 'block'
        store('lvlTwo', e)
    } else {
        resetlvlTwo()
        removeLvlTwo()
        unstore('lvlTwo')
    }
})

readParams.addEventListener('change', (e) => {
    if (['true', 'false'].includes(e.target.value)) {
        store('lvlThree', e)
    } else {
        unstore('lvlThree')
    }
})

rateParams.addEventListener('change', (e) => {
    if (['1', '2', '3', '4', '5'].includes(e.target.value)) {
        store('lvlThree', e)
    } else {
        unstore('lvlThree')
    }
})

searchBtn.onclick = (e) => {
    if (typedInput.style.display === 'block') {
        window.sessionStorage.setItem('lvlThree', typedInput.value)
    }
    const lvlThree = window.sessionStorage.getItem('lvlThree')
    if (lvlThree == ''){
        window.alert('Oops! Make sure you fill out all sections :)')
        e.preventDefault()
    }
}