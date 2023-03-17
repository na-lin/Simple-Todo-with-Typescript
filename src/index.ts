const todoInput = document.getElementById("todoInput") as HTMLInputElement;
const submitButton = document.getElementById("btn");
const form = document.getElementById("addTodoForm");
const todoList = document.getElementById("todoList");

interface Todo {
  text: string;
  completed: boolean;
}
const todos: Todo[] = [];

function handleAddTodo(e: SubmitEvent) {
  e.preventDefault();

  const newTodo: Todo = {
    text: todoInput.value,
    completed: false,
  };
  todos.push(newTodo);
  createTodoElement(newTodo);

  todoInput.value = "";
}

function createTodoElement(todo: Todo) {
  const newTodo = document.createElement("li");
  newTodo.textContent = todo.text;

  // add checkbox to each todo
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newTodo.append(checkbox);

  todoList?.append(newTodo);
}

form?.addEventListener("submit", handleAddTodo);
