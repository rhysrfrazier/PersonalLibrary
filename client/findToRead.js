const searchBtn = document.querySelector('#submit')
const random = document.querySelector('#random')
const searchParam = document.querySelector('#findBy')
const input = document.querySelector('#input')

searchBtn.onclick = function(e){
    e.preventDefault()
    console.log(searchParam.value, input.value)
}