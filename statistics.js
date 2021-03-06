'use strict'
const container = document.getElementById("container")

const menuDiv = document.getElementById("Menu")
container.appendChild(menuDiv)
const logo = document.createElement("img")
menuDiv.appendChild(logo)
logo.src = "Logo.png"
logo.id = "logo"

const menutable = document.createElement("table")
menuDiv.appendChild(menutable)
const tr1 = document.createElement("tr")
menutable.appendChild(tr1)
const th1 = document.createElement("th")
const th2 = document.createElement("th")
const th3 = document.createElement("th")
const th4 = document.createElement("th")
tr1.appendChild(th1)
tr1.appendChild(th2)
tr1.appendChild(th3)
tr1.appendChild(th4)
th1.textContent = "ID"
th2.textContent = "Name"
th3.textContent = "Type"
th4.textContent = "Price"
const statistics = document.getElementById("statistics")
menuDiv.appendChild(statistics)

const buttons = document.createElement("div")
buttons.id = "buttonsDiv"
menuDiv.appendChild(buttons)
const resetButton = document.createElement("button")
buttons.appendChild(resetButton)
resetButton.textContent = "Reset"
resetButton.id = "btn"
const printButton = document.createElement("button")
buttons.appendChild(printButton)
printButton.textContent = "Print"
printButton.id = "btn"
const addMorebutton = document.createElement("button")
buttons.appendChild(addMorebutton)
addMorebutton.textContent = "Add More"
addMorebutton.id = "btn"
resetButton.addEventListener("click", clearTable)
function clearTable() {
    localStorage.clear()
    window.location.reload()
}

printButton.addEventListener("click", printTable)
function printTable() {
    window.print()
}

addMorebutton.addEventListener("click", addMore)
function addMore() {
    document.location.href = 'index.html';
}

//   Chartjs code ends here

Menu.prototype.id = function () {
    let theId = Math.ceil(Math.random() * 10000);
    while (allMenu.includes(theId)) {
        theId = Math.ceil(Math.random() * 10000)
    }
    return theId
}

Menu.prototype.render = function () {
    const tr2 = document.createElement("tr")
    menutable.appendChild(tr2)
    const td1 = document.createElement("td")
    const td2 = document.createElement("td")
    const td3 = document.createElement("td")
    const td4 = document.createElement("td")
    tr2.appendChild(td1)
    tr2.appendChild(td2)
    tr2.appendChild(td3)
    tr2.appendChild(td4)
    td1.textContent = `${this.id()}`
    td2.textContent = `${this.foodName}`
    td3.textContent = `${this.type}`
    td4.textContent = `${this.price}`
}

function renderAllMenu() {
    let menuLocalStorage = JSON.parse(localStorage.getItem("Menu"))
    new Menu("Pizza", "Fat", "8.35")
    new Menu("Burger", "Fat", "4.25")
    new Menu("Apple", "Fruit", "0.63")
    if (menuLocalStorage !== null) {
        for (let i = 0; i < menuLocalStorage.length; i++) {
            new Menu(menuLocalStorage[i].foodName, menuLocalStorage[i].type, menuLocalStorage[i].price);

        }
    }
    for (let i = 0; i < allMenu.length; i++) {
        allMenu[i].render()
    }
}

renderAllMenu()

////////////////////////   Chartjs code start here    ////////////////////////

const data = {
    labels: [],
    datasets: [{
        label: 'My First Dataset',
        data: [],
        backgroundColor: [
            'rgb(248,3,3)',
            'rgb(25,30,236)',
            'rgb(40,255,1)',
            'rgb(50,50,50)',
            'rgb(2,226,208)',
        ],
        hoverOffset: 4
    }]
};

let typeArr = []
let priceArr = []

for (let i = 0; i < allMenu.length; i++) {
    typeArr.push(allMenu[i].type)
    priceArr.push(allMenu[i].price)
}
typeArr = [...new Set(typeArr)]
priceArr.length = typeArr.length
for (let i = 0; i < typeArr.length; i++) {
    data.labels.push(typeArr[i])
}

    for (let j = 0; j < typeArr.length; j++) {
        for (let i = 0; i < allMenu.length; i++) {
        if (allMenu[i].type === typeArr[j]) {
            priceArr[j]=(Number(priceArr[j])+Number(allMenu[i].price))
            
        }
    }
}

for (let i = 0; i < priceArr.length; i++) {
    data.datasets[0].data.push(priceArr[i])
}
console.log(allMenu);
console.log(data.labels);
console.log(data.datasets[0].data);

const config = {
    type: 'pie',
    data: data,
    options: {}
};
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);