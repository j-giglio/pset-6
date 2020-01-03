window.onload = function() {
    document.getElementById("add").onclick = addItem;
}

let listOfItems = [];
let toDo = document.getElementById("toDo");

const addItem = function() {
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

const displayItems = function() {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
