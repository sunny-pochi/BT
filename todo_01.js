const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const statusRadioElements = document.getElementsByName("status");
const todoList = document.getElementById("todo-list");


// ラジオボタンの状態をセット
const statusTypes = {
  ALL: "all",
  PROGRESS: "progress",
  DONE: "done",
};

// idのナンバリング初期化
let nextTaskId = 1;

// 全ての取得データを配列にまとめる
const todoAll = [];

// 新しいタスクを配列に加える
function createTodo(todoTitle) {
  const todo = {
    id: nextTaskId++,
    title: todoTitle,
    status: statusTypes.ALL,
  };

  todoAll.push(todo);
}



// ステータス切替たらすること
function filterTodoAll(statusType) {
  return [...todoAll];
}



function showTodoAll() {
  // 毎回表示内容をリセットする
  todoList.textContent ="";
  
  const newestTodo = filterTodoAll();
  newestTodo.forEach((todo) => {
    const tr = document.createElement('tr');

  // IDを表示するspan要素を作成して tableItem に追加
    const idSpan = document.createElement("span");
    idSpan.innerText = todo.id;
    const idSpanTd = document.createElement("td");
    idSpanTd.append(idSpan);

  // 入力タスクを表示するspan要素を作成して tableItem に追加 
    const taskSpan = document.createElement("span");
    taskSpan.textContent = todo.title;
    const taskSpanTd = document.createElement("td");
    taskSpanTd.append(taskSpan);

  // 状態ボタン表示をする場所と追加
    const statusButton = document.createElement("button");
    statusButton.innerText = "作業中";
    // statusButton.innerText = "作業中";
    const statusButtonTd = document.createElement("td");
    statusButtonTd.append(statusButton);

  // 削除ボタン表示をする場所と追加
    const removeButton = document.createElement("button");
    removeButton.innerText = "削除";
    const removeButtonTd = document.createElement("td");
    removeButtonTd.append(removeButton);

    // 表示部分に追加
    // todoList.appendChild();

    todoList.append(idSpanTd);
    todoList.append(taskSpanTd);
    todoList.append(statusButtonTd);
    todoList.append(removeButtonTd);
    todoList.appendChild(tr);
  
  })
}

addButton.addEventListener("click", (event) => {
  // タスク入力内容の取得
  const todoTitle = todoInput.value;

  // 入力内容のデータ保持
  createTodo(todoTitle);

  // 入力内容をリセットする
  todoInput.value = "";

  // 一覧を表示する
  showTodoAll();

});
