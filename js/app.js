window.onload = function() {
  document.getElementById("add").onclick = addItem;
}

let listOfItems = [];
let exclamationArray = [];
let checkArray = [];
let crossArray = [];
let toDo;
let indexNumber = 0;

function addItem() {
  if (document.getElementById("textbox").value == "") {
    
  } else {
    toDo = document.getElementById("toDo");
    let input = document.getElementById("textbox").value;
    const listItem = document.createElement("p");
    listItem.id = "item";
    listItem.className = "unprioritized";
    
    const exclamation = document.createElement("span");
    const check = document.createElement("span");
    const cross = document.createElement("span");
    const listText = document.createElement("span");
    
    exclamation.innerHTML = "! ";
    check.innerHTML = "✓ ";
    cross.innerHTML = " ✗";
    listText.innerHTML = input;

    exclamation.className = "priorityButton";
    check.className = "doneButton";
    cross.className = "crossButton";
    listText.className = "incomplete";
    
    exclamation.id = indexNumber + " excl";
    check.id = indexNumber + " check";
    cross.id = indexNumber + " cross";
    listText.id = indexNumber + " item";
    
    indexNumber++
    
    exclamationArray.push(exclamation);
    checkArray.push(check);
    crossArray.push(cross);
  
    listItem.appendChild(exclamation);
    listItem.appendChild(check);
    listItem.appendChild(listText);
    listItem.appendChild(cross);
    listOfItems.push(listItem);
  
    document.getElementById("textbox").value = ""
    
    document.getElementByClassName(priorityButton).onclick = raisePriority;
    document.getElementByClassName(doneButton).onclick = markDone;
    document.getElementByClassName(crossButton).onclick = removeItem;

    
    displayItems();
  }
}

function displayItems() {
  toDo.innerHTML = "";
  for (let i = 0; i < listOfItems.length; i++) {
    toDo.appendChild(listOfItems[i]);
    console.log(listOfItems[i]);
  }
  console.log(listOfItems);
  console.log(exclamationArray);
  console.log(checkArray);
  console.log(crossArray);
}

// function raisePriority() {
//   let index = .id;
//   index.replace(" excl", "");
//   listOfItems.unshift(listOfItems.splice(index, 1)[0]);
//   displayItems();
// }

// function markDone() {
//   let index = .id;
//   if (index.className == "incomplete") {
//     index.className = "complete";
//   } else if (index.className == "complete") {
//     index.className = "incomplete";
//   }
//   displayItems();
// }

// function removeItem() {
//   let index = .id;
//   index.replace(" cross", "");
//   listOfItems.push(listOfItems.splice(index, 1)[0]);
//   displayItems();
// }
