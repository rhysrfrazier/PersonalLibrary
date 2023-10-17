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

//session storage helper functions. Fewer keystrokes i guess
function store(key, e) {
    window.sessionStorage.setItem(key, e.target.value)
}

function unstore(key) {
    window.sessionStorage.removeItem(key)
}

//changelisteners for dynamic html
chooseCol.addEventListener('change', (e) => {
    if (e.target.value === 'books') {
        removeAll()
        document.querySelector('#allDiv').style.display = 'block'
        store('collection', e)
    } else if (e.target.value === 'specials') {
        removeAll()
        document.querySelector('#scDiv').style.display = 'block'
        store('collection', e)
    } else if (e.target.value === 'novels') {
        removeAll()
        document.querySelector('#novelDiv').style.display = 'block'
        store('collection', e)
    } else {
        removeAll()
        unstore('collection')
    }
})

allParams.addEventListener('change', (e) => {
    //syntax courtesy of late-night debugging with Riley
    if (['title', 'author.last_name'].includes(e.target.value)) {
        document.querySelector('#typedInput').style.display = 'block'
        store('lvlTwo', e)
    } else {
        removeLvlTwo()
        unstore('lvlTwo')
    }
})

scParams.addEventListener('change', (e) => {
    if (['title', 'author.last_name', 'date'].includes(e.target.value)) {
        document.querySelector('#typedInput').style.display = 'block'
        store('lvlTwo', e)
    } else {
        removeLvlTwo()
        unstore('lvlTwo')
    }
})

novelParams.addEventListener('change', (e) => {
    if (['title', 'author.last_name', 'subgenres'].includes(e.target.value)) {
        removeLvlTwo()
        document.querySelector('#typedInput').style.display = 'block'
        store('lvlTwo', e)
    } else if (e.target.value === 'read') {
        removeLvlTwo()
        document.querySelector('#readDiv').style.display = 'block'
        store('lvlTwo', e)
    } else if (e.target.value === 'rating') {
        removeLvlTwo()
        document.querySelector('#rateDiv').style.display = 'block'
        store('lvlTwo', e)
    } else {
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

searchBtn.onclick = () => {
    if (typedInput.style.display === 'block') {
        window.sessionStorage.setItem('lvlThree', typedInput.value)
    }
}