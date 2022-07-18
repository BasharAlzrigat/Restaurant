'use strict'
let allMenu = []
function Menu(name, type, price) {
    this.foodName = name
    this.type = type
    this.price = price
    allMenu.push(this)
}

const menuForm = document.getElementById("menu-form");
if(menuForm){
    menuForm.addEventListener("submit", createNew);
}
function createNew(event) {
    event.preventDefault()
    let name = event.target.foodName.value
    let type = event.target.foodType.value
    let price = event.target.price.value
    const newItem =new Menu(name, type, price);
    let lastStorage = JSON.parse(localStorage.getItem("Menu"))
    let menuLocalStorage = []
    if(lastStorage){
        menuLocalStorage = lastStorage
        menuLocalStorage.push(newItem)
        
    }else{
        menuLocalStorage.push(newItem)
    }
    localStorage.setItem("Menu", JSON.stringify(menuLocalStorage))
}
