//Much help and explanation from Riley to figure out how to make searching and filtering more abstract for this file
//nav functions
function back() {
    window.sessionStorage.clear()
    history.back()
}

//function to get and sort results from db
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
            return false
        } else {
            console.log(typeof result[objKey])
            if (objKey === 'author') {
                return result[objKey].last_name.toLowerCase() === objValue.toLowerCase()
            } else {
                if (typeof result[objKey] !== 'string') {
                    return result[objKey].toString() === objValue
                } else {
                    return result[objKey].toLowerCase() === objValue.toLowerCase()
                }
            }
        }
    })

    console.log(filteredResults)
}

//TESTING
testBtn = document.querySelector('#test')
function test() {
    search()
}