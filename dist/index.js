"use strict";
const todoInput = document.getElementById("todoInput");
const submitButton = document.getElementById("btn");
const form = document.getElementById("addTodoForm");
const todoList = document.getElementById("todoList");
function handleAddTodo(e) {
    e.preventDefault();
    const newTodo = document.createElement("li");
    newTodo.textContent = todoInput.value;
    // add checkbox to each todo
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newTodo.append(checkbox);
    todoList === null || todoList === void 0 ? void 0 : todoList.append(newTodo);
    todoInput.value = "";
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", handleAddTodo);
