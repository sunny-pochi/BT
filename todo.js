"use strict";

// document.addEventListener('DOMContentLoaded', function() {
// })



// 入力されたタスク
const todoInput = document.getElementById("todo-input");
// 追加ボタン
const addButton = document.getElementById("add-button");
// タスクの一覧表示
const todoListContainer = document.getElementById("todo-list");

// ID番号
let nextNum = 1;

const addTask = (task, id) => {
  const todoItem = document.createElement("tr");
  // IDを表示するspan要素を作成して tableItem に追加
  const idSpan = document.createElement("span");
  idSpan.innerText = id;
  const idSpanTd = document.createElement("td");
  idSpanTd.append(idSpan);
  // 入力タスクを表示するspan要素を作成して tableItem に追加 
  const taskSpan = document.createElement("span");

  // taskSpan.innerText = "作業中";
  taskSpan.innerText = task;

  const taskSpanTd = document.createElement("td");
  taskSpanTd.append(taskSpan);
  // 状態ボタン表示をする場所と追加
  const statusButton = document.createElement("button");
  statusButton.innerText = "作業中";
  const statusButtonTd = document.createElement("td");
  statusButtonTd.append(statusButton);
  // 削除ボタン表示をする場所と追加
  const removeButton = document.createElement("button");
  removeButton.innerText = "削除";
  const removeButtonTd = document.createElement("td");
  removeButtonTd.append(removeButton);

  todoItem.append(idSpanTd);
  todoItem.append(taskSpanTd);
  todoItem.append(statusButtonTd);
  todoItem.append(removeButtonTd);

  todoListContainer.appendChild(todoItem);

  // 削除ボタンを押したらやる処理を書く
};

addButton.addEventListener("click", () => {
  const task = todoInput.Value;
  addTask(task, nextNum++);
  todoInput.value = "";

  // console.log(typeof todoInput.value);
});
