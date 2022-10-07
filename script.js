let awakeningsArray = []
let combosArray = []

function addAwakening (myAwakening) {
    if (awakeningsArray.includes(myAwakening)) {
        awakeningsArray.push(myAwakening)
        let numOfAwakening = getOccurrence(awakeningsArray, myAwakening)
        let findMyLi = document.getElementById(myAwakening)
        let findMyA = findMyLi.lastChild
        findMyA.innerHTML = `x${numOfAwakening}`
    } else {
    let numOfAwakening = 1
    awakeningsArray.push(myAwakening)
    let newLi = document.createElement("li")
    let newInput = document.createElement("input")
    let newA = document.createElement("a")
    
    document.getElementById("awakenings-list").appendChild(newLi)
    
    newLi.appendChild(newInput)
    newLi.setAttribute("id", myAwakening)
    
    newInput.setAttribute("type", "image")
    newInput.setAttribute("src", myAwakening)
    newInput.setAttribute("onclick", `removeAwakening("${myAwakening}")`)

    newLi.appendChild(newA)
    newA.innerHTML = `x${numOfAwakening}`
    }
}

function removeAwakening (myAwakening) {
    let awakeningIndex = awakeningsArray.indexOf(myAwakening)
    if (awakeningIndex !== -1) {
        awakeningsArray.splice(awakeningIndex, 1)
    }
    numOfAwakening = getOccurrence(awakeningsArray, myAwakening)
    let findMyLi = document.getElementById(myAwakening)
    let findMyA = findMyLi.lastChild
    if (numOfAwakening == 0) {
        findMyLi.remove()
    }
    findMyA.innerHTML = `x${numOfAwakening}`
}

function addCombo (myCombo) {
    if (combosArray.includes(myCombo)) {
        combosArray.push(myCombo)
        let numOfCombos = getOccurrence(combosArray, myCombo)
        let findMyLi = document.getElementById(myCombo)
        let findMyA = findMyLi.lastChild
        findMyA.innerHTML = `x${numOfCombos}`
    } else {
    let numOfCombos = 1
    combosArray.push(myCombo)
    let newLi = document.createElement("li")
    let newInput = document.createElement("input")
    let newA = document.createElement("a")
    
    document.getElementById("combos-list").appendChild(newLi)
    
    newLi.appendChild(newInput)
    newLi.setAttribute("id", myCombo)
    
    newInput.setAttribute("type", "image")
    newInput.setAttribute("src", myCombo)
    newInput.setAttribute("class", "combotype")
    newInput.setAttribute("onclick", `removeCombo("${myCombo}")`)

    newLi.appendChild(newA)
    newA.innerHTML = `x${numOfCombos}`
    }
}

function removeCombo (myCombo) {
    let comboIndex = combosArray.indexOf(myCombo)
    if (comboIndex !== -1) {
        combosArray.splice(comboIndex, 1)
    }
    numOfCombos = getOccurrence(combosArray, myCombo)
    let findMyLi = document.getElementById(myCombo)
    let findMyA = findMyLi.lastChild
    if (numOfCombos == 0) {
        findMyLi.remove()
    }
    findMyA.innerHTML = `x${numOfCombos}`
}

function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}