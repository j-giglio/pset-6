window.onload = function() {
  document.getElementById("add").onclick = addItem;
}

let listOfItems = [];
let exclamationArray = [];
let checkArray = [];
let crossArray = [];
let listTextArray = [];
let toDo;
let indexNumber = 0;

function addItem() {
  if (document.getElementById("textbox").value == "") {
    return;
  } else {
    const input = document.getElementById("textbox").value;

    listOfItems.push({
      id: listOfItems.length,
      content: input,
      priority: "low",
      complete: false
    });
    document.getElementById("textbox").value = "";

    displayItems();
  }
}

function displayItems() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  for (let i = 0; i < listOfItems.length; i++) {
    const li = document.createElement("li");
    const exclamation = document.createElement("span");
    const check = document.createElement("span");
    const cross = document.createElement("span");
    const listText = document.createElement("span");

    li.id = "item";

    exclamation.innerHTML = "  ! ";
    check.innerHTML = " ✓ ";
    cross.innerHTML = " ✗";
    listText.innerHTML = listOfItems[i].content;

    if (listOfItems[i].priority === "low") {

      exclamation.className = "priorityButton";
      console.log(exclamation.className)

    } else if (listOfItems[i].priority === "high") {

      exclamation.className = "prioritizedButton";
      console.log(exclamation.className)

    }

    check.className = "doneButton";
    cross.className = "crossButton";

    if (listOfItems[i].complete === true) {

      listText.className = "complete";

    } else if (listOfItems[i].complete === false) {

      listText.className = "incomplete";

    }

    exclamation.id = i;
    check.id = i;
    cross.id = i;
    listText.id = i;

    exclamation.onclick = togglePriority;
    check.onclick = markDone;
    cross.onclick = removeItem;

    li.appendChild(exclamation);
    li.appendChild(check);
    li.appendChild(listText);
    li.appendChild(cross);
    list.appendChild(li);
  }


  // document.getElementById("toDo").innerHTML = "";
  // for (let i = 0; i < listOfItems.length; i++) {
  //   toDo.appendChild(listOfItems[i]);
  // }
}

function togglePriority() {
  const index = this.id;

  if (listOfItems[index].priority === "low") {
    listOfItems[index].priority = "high";

    const item = listOfItems.splice(index, 1)[0];
    listOfItems.unshift(item);
  } else {
    listOfItems[index].priority = "low";

    const item = listOfItems.splice(index, 1)[0];
    listOfItems.push(item);
  }

  displayItems();
}

// function lowerPriority(index) {
//   toDo = document.getElementById("toDo");
//   let index = .id;
//   index.replace(" excl", "");
//   listOfItems.push(listOfItems.splice(index, 1)[0]);
//   exclamationArray[index].class = prioritizedButton
//   displayItems();
// }


function markDone() {
  const index = this.id;
  toDo = document.getElementById("toDo");
  if (listOfItems[index].complete === true) {

    listOfItems[index].complete = false;

  } else if (listOfItems[index].complete === false) {

    listOfItems[index].complete = true;

  }
  displayItems();
}

function removeItem() {
  const index = this.id;
  toDo = document.getElementById("toDo");
  listOfItems.splice(index, 1);
  displayItems();
}
