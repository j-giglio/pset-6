window.onload = function() {
    document.getElementById("add").onclick = addItem;
}

let list = [];
let toDo = document.getElementById("toDo");

const addItem = function() {
  let input = document.getElementById("textbox").value;
  const listItem = document.createElement("li");
  listItem.innerHTML = input;
  toDo.append(listItem);
}
