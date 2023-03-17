"use strict";
const todoInput = document.getElementById("todoInput");
const submitButton = document.getElementById("btn");
const form = document.getElementById("addTodoForm");
const todoList = document.getElementById("todoList");
function handleAddTodo(e) {
    e.preventDefault();
    console.log("submit");
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", handleAddTodo);
