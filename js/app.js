window.onload = function() {
    document.getElementById("add").onclick = addItem;
}

let listOfItems = [];
let toDo = document.getElementById("toDo");
let itemNumber = 0;

const addItem = function() {
  let input = document.getElementById("textbox").value;
  const listItem = document.createElement("li");
  String(itemNumber);
  listItem.setAttribute(id = "item" + itemNumber);
  itemNumber++;
  
  listItem.innerHTML = input;
  toDo.append(listItem);
}
