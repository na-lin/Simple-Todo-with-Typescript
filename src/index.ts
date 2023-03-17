const todoInput = document.getElementById("todoInput") as HTMLInputElement;
const submitButton = document.getElementById("btn");
const form = document.getElementById("addTodoForm");
const todoList = document.getElementById("todoList");

function handleAddTodo(e: SubmitEvent) {
  e.preventDefault();

  const newTodo = document.createElement("li");
  newTodo.textContent = todoInput.value;

  // add checkbox to each todo
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newTodo.append(checkbox);

  todoList?.append(newTodo);

  todoInput.value = "";
}

form?.addEventListener("submit", handleAddTodo);
