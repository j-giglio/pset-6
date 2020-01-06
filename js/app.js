window.onload = function() {
    document.getElementById("add").onclick = addItem;
    document.getElementByClassName(priorityButton).onclick = raisePriority;
    document.getElementByClassName(doneButton).onclick = markDone;
    document.getElementByClassName(xButton).onclick = removeItem;
}

let listOfItems = [];
let toDo = document.getElementById("toDo");

function addItem() {
  let input = document.getElementById("textbox").value;
  const listItem = document.createElement("p");
  listItem.id = "item";
  listItem.className = "incomplete";
  const exclamation = document.createElement("span");
  const check = document.createElement("span");
  const cross = document.createElement("span");
  const listText = document.createElement("span");
  exclamation.innerHTML = "! ";
  check.innerHTML = "✓ ";
  cross.innerHTML = "✗ ";
  exclamation.className = "priorityButton";
  check.className = "doneButton";
  cross.className = "removeButton";
  listText.innerHTML = input;
  listItem.appendChild(exclamation);
  listItem.appendChild(check);
  listItem.appendChild(listText);
  listItem.appendChild(cross);
  listOfItems.push(listItem);
  console.log(listOfItems);
  exclamationArray = document.getElementByClassName(priorityButton);
  checkArray = document.getElementByClassName(doneButton);
  displayItems();
}

function displayItems() {
  toDo.innerHTML = "";
  for (let i = 0; i < listOfItems.length; i++) {
    toDo.appendChild(listOfItems[i]);
    console.log(listOfItems[i]);
  }
}

function raisePriority {
  const index = ;
  listOfItems.unshift(listOfItems.splice(index, 1)[0]);
  displayItems();
}

function markDone {
  const index = ;
  if (index.className == "incomplete") {
    index.className = "complete";
  } else if (index.className == "complete") {
    index.className = "incomplete";
  }
  displayItems();
}

function removeItem {
  const index = ;
  listOfItems.push(listOfItems.splice(index, 1)[0]);
  displayItems();
}
