"use strict";
const todoInput = document.getElementById("todoInput");
const submitButton = document.getElementById("btn");
const form = document.getElementById("addTodoForm");
const todoList = document.getElementById("todoList");
const todos = readTodo();
todos.forEach((todo) => {
    createTodoElement(todo);
});
function readTodo() {
    const todoRecord = localStorage.getItem("todos");
    if (todoRecord === null)
        return [];
    return JSON.parse(todoRecord);
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleAddTodo(e) {
    e.preventDefault();
    const newTodo = {
        text: todoInput.value,
        completed: false,
    };
    todos.push(newTodo);
    saveTodos();
    createTodoElement(newTodo);
    todoInput.value = "";
}
function createTodoElement(todo) {
    const newTodo = document.createElement("li");
    newTodo.textContent = todo.text;
    // add checkbox to each todo
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newTodo.append(checkbox);
    todoList === null || todoList === void 0 ? void 0 : todoList.append(newTodo);
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", handleAddTodo);
