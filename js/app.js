window.onload = function() {
    document.getElementById("add").onclick = addItem;
}

let listOfItems = [];
let toDo = document.getElementById("toDo");

function addItem() {
  let input = document.getElementById("textbox").value;
  const listItem = document.createElement("li");
  listItem.id = "item"
  listItem.innerHTML = input;
  listOfItems.push(listItem);
  displayItems
}

function displayItems() {
  for (let i = 0; i < listOfItems.length; i++) {
    toDo.append(listOfItems[i]);
    console.log(listOfItems[i]);
  }
}
