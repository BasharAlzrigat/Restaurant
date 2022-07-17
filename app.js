'use strict'
let allMenu = []
function Menu( name, type, price){
    this.foodName = name
    this.type = type
    this.price = price
    allMenu.push(this)
}
const menuDiv = document.getElementById("Menu")
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

const menuForm = document.getElementById("menu-form");
menuForm.addEventListener("submit",createNew);


function createNew(event){
    event.preventDefault()
let name = event.target.foodName.value
let type = event.target.foodType.value
let price = event.target.price.value
let newMenu = new Menu(name, type, price);
newMenu.render()

}
new Menu("Pizza", "Fat", "8.35")
new Menu("Burger", "Fat", "4.25")
new Menu("Apple", "Fruit", "0.63")
Menu.prototype.id = function () {
    let theId = Math.ceil(Math.random() * 10000);
while (allMenu.includes(theId)){
    theId = Math.ceil(Math.random() * 10000)
}
    return theId
}
Menu.prototype.render = function(){
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

    for (let i = 0; i < Menu.length; i++) {
        allMenu[i].render();
    }
}
renderAllMenu()
