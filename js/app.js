window.onload = function() {
    document.getElementById("add").onclick = addItem;
}

let listOfItems = [];
let toDo = document.getElementById("toDo");

function addItem() {
  let input = document.getElementById("textbox").value;
  const listItem = document.createElement("span");
  listItem.id = "item";
  const exclamation = document.createElement("p");
  const check = document.createElement("p");
  const listText = document.createElement("p");
  exclamation.innerHTML = "!";
  check.innerHTML = "✓";
  exclamation.class = "priorityButton";
  check.class = "doneButton";
  listText.innerHTML = input;
  listItem.appendChild(exclamation);
  listItem.appendChild(check);
  listItem.appendChild(listText);
  listOfItems.push(listItem);
  console.log(listOfItems)
  displayItems();
}

function displayItems() {
//   toDo.innerHTML = ""
  for (let i = 0; i < listOfItems.length; i++) {
    toDo.appendChild(listOfItems[i]);
    console.log(listOfItems[i]);
  }
}
