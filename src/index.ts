const todoInput = document.getElementById("todoInput");
const submitButton = document.getElementById("btn");
const form = document.getElementById("addTodoForm");
const todoList = document.getElementById("todoList");

function handleAddTodo(e: SubmitEvent) {
  e.preventDefault();
  console.log("submit");
}

form?.addEventListener("submit", handleAddTodo);
