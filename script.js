function gen() {
    const calcScreen = document.getElementById("screen")
    const cDelete = document.getElementById("cDelete")
    const main = document.getElementById("main")
    const main2 = document.getElementById("main2")
    const main3 = document.getElementById("main3")
    const main4 = document.getElementById("main4")

    const screen = document.createElement("input")
    screen.setAttribute("type", "text")
    screen.setAttribute("value", "")
    screen.setAttribute("disabled", "true")
    calcScreen.appendChild(screen)

    for (let i = 0; i < 10; i++) {
        const keyi = document.createElement("button")
        keyi.innerText = i
        keyi.onclick = show
        keyi.dataset.value = i
        if(i === 0) {
            main4.appendChild(keyi)
        } else if (i > 0 && i <= 3) {
            main3.appendChild(keyi)
        } else if (i > 3 && i < 7) {
            main2.appendChild(keyi)
        } else {
            main.appendChild(keyi)
        }
    }

    const keyC = document.createElement("button")
    keyC.innerText = "C"
    keyC.dataset.value = "C"
    keyC.onclick = show
    cDelete.appendChild(keyC)

    const keyAC = document.createElement("button")
    keyAC.innerText = "AC"
    keyAC.dataset.value = "AC"
    keyAC.setAttribute("id", "AC")
    keyAC.onclick = show
    cDelete.appendChild(keyAC)

    const keyDot = document.createElement("button")
    keyDot.innerText = "."
    keyDot.dataset.value = "."
    keyDot.onclick = show
    main4.appendChild(keyDot)

    const keyEq = document.createElement("button")
    keyEq.innerText = "="
    keyEq.dataset.value = "="
    keyEq.onclick = show
    main4.appendChild(keyEq)

    const keyAdd = document.createElement("button")
    keyAdd.innerText = "+"
    keyAdd.dataset.value = "+"
    keyAdd.onclick = show
    main4.appendChild(keyAdd)

    const keyMin = document.createElement("button")
    keyMin.innerText = "-"
    keyMin.dataset.value = "-"
    keyMin.onclick = show
    main3.appendChild(keyMin)

    const keyDiv = document.createElement("button")
    keyDiv.innerText = "/"
    keyDiv.dataset.value = "/"
    keyDiv.onclick = show
    main2.appendChild(keyDiv)

    const keyMult = document.createElement("button")
    keyMult.innerText = "*"
    keyMult.dataset.value = "*"
    keyMult.onclick = show
    main.appendChild(keyMult)
}

function show() {
    console.log(this.dataset.value)
}

