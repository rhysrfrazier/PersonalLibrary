 function load(){
    window.sessionStorage.clear()
}

function halt(){
    window.location.href = 'stop.html'
}

function reveal(){
    const menu = document.getElementById('menu')

    if (menu.style.display === 'flex'){
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex'
    }
}