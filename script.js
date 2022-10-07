let awakeningsArray = []
let combosArrayMain = []
let combosArraySub = []

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
    let comboID = ''
    if (document.getElementById('main-radio').checked) {
        comboID = myCombo + 'main'
        if (combosArrayMain.includes(myCombo)) {
            combosArrayMain.push(myCombo)
            let numOfCombos = getOccurrence(combosArrayMain, myCombo)
            let findMyLi = document.getElementById(`${myCombo}main`)
            let findMyA = findMyLi.lastChild
            findMyA.innerHTML = `x${numOfCombos}`
        } else {
        let numOfCombos = 1
        combosArrayMain.push(myCombo) // IF MAIN CHECKED: push ./image/x.pngmain to combosArrayMain
        let newLi = document.createElement("li")
        let newInput = document.createElement("input")
        let newA = document.createElement("a")                  // <li><input id="./image/x.pngmain">
        document.getElementById("combos-list-main").appendChild(newLi)
        newLi.appendChild(newInput)
        newLi.setAttribute("id", comboID)
        newInput.setAttribute("type", "image")
        newInput.setAttribute("src", myCombo)
        newInput.setAttribute("class", "combotype")
        newInput.setAttribute("id", chooseID(myCombo)) // for the size
        newInput.setAttribute("onclick", `removeCombo("${myCombo}", "main")`)
    
        newLi.appendChild(newA)
        newA.innerHTML = `x${numOfCombos}`
        }
    } else {
        comboID = myCombo + 'sub'
        if (combosArraySub.includes(myCombo)) {
            combosArraySub.push(myCombo)
            let numOfCombos = getOccurrence(combosArraySub, myCombo)
            let findMyLi = document.getElementById(`${myCombo}sub`)
            let findMyA = findMyLi.lastChild
            findMyA.innerHTML = `x${numOfCombos}`
        } else {
        let numOfCombos = 1
        combosArraySub.push(myCombo) // IF MAIN CHECKED: push ./image/x.pngmain to combosArrayMain
        let newLi = document.createElement("li")
        let newInput = document.createElement("input")
        let newA = document.createElement("a")                  // <li><input id="./image/x.pngmain">
        document.getElementById("combos-list-sub").appendChild(newLi)
        newLi.appendChild(newInput)
        newLi.setAttribute("id", comboID)
        newInput.setAttribute("type", "image")
        newInput.setAttribute("src", myCombo)
        newInput.setAttribute("class", "combotype")
        newInput.setAttribute("id", chooseID(myCombo)) // for the size
        newInput.setAttribute("onclick", `removeCombo("${myCombo}", "sub")`)
    
        newLi.appendChild(newA)
        newA.innerHTML = `x${numOfCombos}`
        }
    }
}

function removeCombo (myCombo, mainorsub) {
    if (mainorsub == "main") {
        let comboID = myCombo + 'main'
        let comboIndex = combosArrayMain.indexOf(myCombo)
        if (comboIndex !== -1) {
            combosArrayMain.splice(comboIndex, 1)
        }
        numOfCombos = getOccurrence(combosArrayMain, myCombo)
        let findMyLi = document.getElementById(comboID)
        let findMyA = findMyLi.lastChild
        if (numOfCombos == 0) {
            findMyLi.remove()
        }
        findMyA.innerHTML = `x${numOfCombos}`
    } else {
        let comboID = myCombo + 'sub'
        let comboIndex = combosArraySub.indexOf(myCombo)
        if (comboIndex !== -1) {
            combosArraySub.splice(comboIndex, 1)
        }
        numOfCombos = getOccurrence(combosArraySub, myCombo)
        let findMyLi = document.getElementById(comboID)
        let findMyA = findMyLi.lastChild
        if (numOfCombos == 0) {
            findMyLi.remove()
        }
        findMyA.innerHTML = `x${numOfCombos}`
    }

}

function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}

function chooseID(filename) {
    if (filename == './images/orbs/3.PNG' || filename == './images/orbs/ltrans.png' || filename == './images/orbs/crosstrans.png' || filename == './images/orbs/vdp.PNG' || filename == './images/orbs/heartltrans.png' || filename == './images/orbs/heartvdp.png') {
        return 'combo3'
    } else if (filename == './images/orbs/4.PNG' || filename == './images/orbs/nonrowtrans.png') {
        return 'combo4'
    } else {
        return 'combo5'
    }
}

function calculateDMG () {
    let userATK = Number(document.getElementById('ATK').value)
    let newe = userATK + 500
    console.log(newe)
}