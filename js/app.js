window.onload = function() {
    document.getElementById("add").onclick = addItem;
}

let listOfItems = [];
let toDo = document.getElementById("toDo");

function addItem() {
  let input = document.getElementById("textbox").value;
  console.log(input)
  const listItem = document.createElement("li");
  listItem.id = "item"
  listItem.innerHTML = input;
  console.log(listItem)
  listOfItems.push(listItem);
  console.log(listOfItems)
  displayItems
}

function displayItems() {
  for (let i = 0; i < listOfItems.length; i++) {
    toDo.append(listOfItems[i]);
}
