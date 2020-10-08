const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const statusRadioElements = document.getElementsByName("status");
const todoList = document.getElementById("todo-list");

// ラジオボタンの状態をセット
const statusTypes = {
  ALL: "all",
  BEING: "being",
  DONE: "done",
};

// idのナンバリング初期化
let nextTaskId = 1;
// 全ての取得データを配列にまとめる
const todoAll = [];

// 新しいタスクを配列に加える
function createTodo(todoTitle) {
  const todo = {
    id: todoAll.length,
    title: todoTitle,
    status: statusTypes.ALL,
  };

  todoAll.push(todo);
}

// ステータス切替たらすること
function filterTodoAll(statusType) {
  return [...todoAll];
}

// ラジオボタンを押したときの処理
function onChangeStatusFilter(event) {
  console.log(event.target.value);
}
statusRadioElements.forEach((item, index) => {
  item.addEventListener("change", onChangeStatusFilter);
});

// 削除する処理
function deleteTodo(id) {
  const targetIndex = todoAll.findIndex((todo) => {
    return todo.id === id;
  });
  todoAll.splice(targetIndex, 1);
  todoAll.forEach((value, index) => {
    todoAll[index].id = index;
  });
}

function showTodoAll() {
  // 毎回表示内容をリセットする
  todoList.textContent = "";

  const newestTodo = filterTodoAll();
  newestTodo.forEach((todo) => {
    const tr = document.createElement("tr");

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

    // 削除ボタン表示とその処理
    const removeButton = document.createElement("button");
    removeButton.innerText = "削除";
    const removeButtonTd = document.createElement("td");
    removeButton.addEventListener("click", () => {
      deleteTodo(todo.id);
      showTodoAll();
    });
    removeButtonTd.append(removeButton);

    todoList.append(idSpanTd);
    todoList.append(taskSpanTd);
    todoList.append(statusButtonTd);
    todoList.append(removeButtonTd);
    todoList.appendChild(tr);
  });
}
addButton.addEventListener("click", (event) => {
  // タスク入力内容の取得
  const todoTitle = todoInput.value;
  // console.log(todoInput.value);
  // 入力がない場合、促す
  if (!todoTitle) {
    alert("入力をしてください");
    return;
  }

  // 入力内容のデータ保持
  createTodo(todoTitle);

  // 入力内容をリセットする
  todoInput.value = "";

  // 一覧を表示する
  showTodoAll();
});
