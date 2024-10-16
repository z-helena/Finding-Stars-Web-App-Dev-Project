// Task 2

const pressBtn = document.getElementById("p-btn");

pressBtn.addEventListener("click", () => {
    const newP = document.createElement("p");
    newP.appendChild(document.createTextNode("You pressed a button!"))
    document.body.appendChild(newP)
})

// Task 3

const countBtn = document.getElementById("count-btn")

countBtn.addEventListener("click", () => {
    const count = document.getElementById("count");
    count.innerText++
})

// Task 4

const red = document.getElementById("red")
const blue = document.getElementById("blue")
const green = document.getElementById("green")
const colors = document.getElementById("p-colors")

red.addEventListener("click", () => {
    colors.style.color = "red"
})
blue.addEventListener("click", () => {
    colors.style.color = "blue"
})
green.addEventListener("click", () => {
    colors.style.color = "green"
})

// Task 5

const submit = document.getElementById("submit-btn")
const textbox = document.getElementById("text-box")
const mirrorText = document.getElementById("mirror-p")

submit.addEventListener("click", () => {
    mirrorText.innerText = textbox.value
})

// Task 6

const fonts = document.getElementById("fonts")
const fontsDropdown = document.getElementById("fonts-select")

fontsDropdown.addEventListener("change", (event) => {
    fonts.style.fontFamily = event.target.value
})