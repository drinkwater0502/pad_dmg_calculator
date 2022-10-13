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
    if (myCombo == 'blob') {
        orbsValue = document.getElementById("bloborbnumber").value
        rowsValue = document.getElementById("blobrownumber").value
        orbsValueString = orbsValue.toString();
        rowsValueString = rowsValue.toString();
    }

    if (document.getElementById('main-radio').checked) {
        attrType = 'main'
        comboName = myCombo + attrType
        if (myCombo == 'blob') {
            comboName += '-' + orbsValueString + '-' + rowsValueString
        }
        combosArrayMain.push(comboName)
        numOfCombos = getOccurrence(combosArrayMain, comboName)
    } else {
        attrType = 'sub'
        comboName = myCombo + attrType
        if (myCombo == 'blob') {
            comboName += '-' + orbsValueString + '-' + rowsValueString
        }
        combosArraySub.push(comboName)
        numOfCombos = getOccurrence(combosArraySub, comboName)
    }
    
    if (numOfCombos == 1) {
        newLi = document.createElement("li")
        newInput = document.createElement("input")
        newA = document.createElement("a")
        if (attrType == 'main') {
            comboList = document.getElementById("combos-list-main")
        } else if (attrType = 'sub') {
            comboList = document.getElementById("combos-list-sub")
        }
        comboList.appendChild(newLi)
        newLi.appendChild(newInput)
        newLi.setAttribute("id", comboName)
        newInput.setAttribute("type", "image")
        newInput.setAttribute("src", comboToFile(myCombo))
        newInput.setAttribute("class", "combotype")
        newInput.setAttribute("id", chooseID(myCombo)) // for the size
        if (attrType == 'main') {
            newInput.setAttribute("onclick", `removeCombo('${comboName}', "main")`)
        } else if (attrType == 'sub') {
            newInput.setAttribute("onclick", `removeCombo('${comboName}', "sub")`)
        }
        
        newLi.appendChild(newA)
        newA.innerHTML = `x${numOfCombos}`
    } else {
        findMyLi = document.getElementById(comboName)
        findMyA = findMyLi.lastChild
        findMyA.innerHTML = `x${numOfCombos}`
    }
}

//     let comboID = ''
//     if (document.getElementById('main-radio').checked) {
//         comboID = myCombo + 'main'
//         if (combosArrayMain.includes(myCombo)) {
//             combosArrayMain.push(myCombo)
//             let numOfCombos = getOccurrence(combosArrayMain, myCombo)
//             let findMyLi = document.getElementById(`${myCombo}main`)
//             let findMyA = findMyLi.lastChild
//             findMyA.innerHTML = `x${numOfCombos}`
//         } else {
//         let numOfCombos = 1
//         combosArrayMain.push(myCombo) // IF MAIN CHECKED: push ./image/x.pngmain to combosArrayMain
//         let newLi = document.createElement("li")
//         let newInput = document.createElement("input")
//         let newA = document.createElement("a")                  // <li><input id="./image/x.pngmain">
//         document.getElementById("combos-list-main").appendChild(newLi)
//         newLi.appendChild(newInput)
//         newLi.setAttribute("id", comboID)
//         newInput.setAttribute("type", "image")
//         newInput.setAttribute("src", myCombo)
//         newInput.setAttribute("class", "combotype")
//         newInput.setAttribute("id", chooseID(myCombo)) // for the size
//         newInput.setAttribute("onclick", `removeCombo("${myCombo}", "main")`)
    
//         newLi.appendChild(newA)
//         newA.innerHTML = `x${numOfCombos}`
//         }
//     } else {
//         comboID = myCombo + 'sub'
//         if (combosArraySub.includes(myCombo)) {
//             combosArraySub.push(myCombo)
//             let numOfCombos = getOccurrence(combosArraySub, myCombo)
//             let findMyLi = document.getElementById(`${myCombo}sub`)
//             let findMyA = findMyLi.lastChild
//             findMyA.innerHTML = `x${numOfCombos}`
//         } else {
//         let numOfCombos = 1
//         combosArraySub.push(myCombo) // IF MAIN CHECKED: push ./image/x.pngmain to combosArrayMain
//         let newLi = document.createElement("li")
//         let newInput = document.createElement("input")
//         let newA = document.createElement("a")                  // <li><input id="./image/x.pngmain">
//         document.getElementById("combos-list-sub").appendChild(newLi)
//         newLi.appendChild(newInput)
//         newLi.setAttribute("id", comboID)
//         newInput.setAttribute("type", "image")
//         newInput.setAttribute("src", myCombo)
//         newInput.setAttribute("class", "combotype")
//         newInput.setAttribute("id", chooseID(myCombo)) // for the size
//         newInput.setAttribute("onclick", `removeCombo("${myCombo}", "sub")`)
    
//         newLi.appendChild(newA)
//         newA.innerHTML = `x${numOfCombos}`
//         }
//     }
// }

function removeCombo (combo, mainorsub) {
    if (mainorsub == "main") {
        comboIndex = combosArrayMain.indexOf(combo)
        if (comboIndex !== -1) {
            combosArrayMain.splice(comboIndex, 1)
        }
        numOfCombos = getOccurrence(combosArrayMain, combo)
        findMyLi = document.getElementById(combo)
        findMyA = findMyLi.lastChild
        if (numOfCombos == 0) {
            findMyLi.remove()
        }
        findMyA.innerHTML = `x${numOfCombos}`
    } else {
        comboIndex = combosArraySub.indexOf(combo)
        if (comboIndex !== -1) {
            combosArraySub.splice(comboIndex, 1)
        }
        numOfCombos = getOccurrence(combosArraySub, combo)
        findMyLi = document.getElementById(combo)
        findMyA = findMyLi.lastChild
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
    if (filename == 'threec' || filename == 'l' || filename == 'cross' || filename == 'vdp' || filename == 'heartl' || filename == 'heartvdp') {
        return 'combo3'
    } else if (filename == 'fourc' || filename == 'nonrow') {
        return 'combo4'
    } else if (filename == 'fivec') {
        return 'combo5'
    } else {
        return 'comborow'
    }
}

function calculateDMG () {
    let userATK = Number(document.getElementById('ATK').value)
    let newe = userATK + 500
    console.log(newe)
}

function comboToFile(combo) {
    if (combo == 'threec') {
        return "./images/orbs/3.PNG"
    } else if (combo == 'fourc') {
        return "./images/orbs/4.PNG"
    } else if (combo == 'fivec') {
        return "./images/orbs/5.PNG"
    } else if (combo == 'row') {
        return "./images/orbs/row.PNG"
    } else if (combo == 'nonrow') {
        return "./images/orbs/nonrowtrans.png"
    } else if (combo == 'l') {
        return "./images/orbs/ltrans.png"
    } else if (combo == 'cross') {
        return "./images/orbs/crosstrans.png"
    } else if (combo == 'vdp') {
        return "./images/orbs/vdp.PNG"
    } else if (combo == 'heartl') {
        return "./images/orbs/heartltrans.png"
    } else if (combo == 'heartvdp') {
        return "./images/orbs/heartvdp.PNG"
    } else if (combo == 'blob') {
        return "./images/orbs/blob.PNG"
    }
}