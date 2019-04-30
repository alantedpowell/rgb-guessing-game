var todos = ["Buy new Turtle"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
  if (input === "list") {
    listTodos();
  } else if (input === "new") {
    addTodo();
  } else if (input === "delete") {
    deleteTodo();
  }
  input = prompt("What would you like to do?");
}

console.log("Ok, you've quit the app, Alan.");

function listTodos() {
  console.log("------------");
  todos.forEach(function(todo, i) {
    console.log(i + ": " + todo);
  });
  console.log("------------");
}

function addTodo() {
  var newTodo = prompt("Enter new todo");
  todos.push(newTodo);
  console.log("I've added your Todo, Alanté.");
}

function deleteTodo() {
  var index = prompt("Index of todo to be deleted");
  todos.splice(index, 1); //todos.splice will delete a specific item from an array
  console.log("I have deleted your Todo, Alanté.");
}
