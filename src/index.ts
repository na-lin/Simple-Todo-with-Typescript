const todoInput = document.getElementById("todoInput") as HTMLInputElement;
const submitButton = document.getElementById("btn");
const form = document.getElementById("addTodoForm");
const todoList = document.getElementById("todoList");

function handleAddTodo(e: SubmitEvent) {
  e.preventDefault();

  const newTodo = document.createElement("li");
  newTodo.textContent = todoInput.value;
  todoList?.append(newTodo);

  todoInput.value = "";
}

form?.addEventListener("submit", handleAddTodo);
