window.onload = function() {
    document.getElementById("add").onclick = addItem;
    document.getElementByClassName(priorityButton).onclick = raisePriority;
    document.getElementByClassName(doneButton).onclick = markDone;
    document.getElementByClassName(xButton).onclick = removeItem;
}

let listOfItems = [];
let exclamationArray = [];
let checkArray = [];
let 
let toDo;
let indexNumber = 0;

function addItem() {
  toDo = document.getElementById("toDo");
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
  listText.innerHTML = input;

  exclamation.className = "priorityButton";
  check.className = "doneButton";
  cross.className = "removeButton";
    
  exclamation.id = indexNumber;
  check.id = indexNumber;
  cross.id = indexNumber;
  listText.id = indexNumber;
  
  listItem.appendChild(exclamation);
  listItem.appendChild(check);
  listItem.appendChild(listText);
  listItem.appendChild(cross);
  listOfItems.push(listItem);
    
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

// function raisePriority() {
//   const index = .id;
//   listOfItems.unshift(listOfItems.splice(index, 1)[0]);
//   displayItems();
// }

// function markDone() {
//   const index = .id;
//   if (index.className == "incomplete") {
//     index.className = "complete";
//   } else if (index.className == "complete") {
//     index.className = "incomplete";
//   }
//   displayItems();
// }

// function removeItem() {
//   const index = .id;
//   listOfItems.push(listOfItems.splice(index, 1)[0]);
//   displayItems();
// }
