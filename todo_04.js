const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

const statusRadioElements = document.getElementsByName('status');

const statusTypes = {
  ALL: "すべて",
  BEING: "作業中",
  DONE: "完了",
};


statusRadioElements.forEach((item, index) => {
  item.addEventListener('change', showTodoAll);
});

const todoAll = [];

function createTodo(todoTitle) {
  const todo = {
    id: todoAll.length,
    title: todoTitle,
    status: statusTypes.BEING,
  };
  todoAll.push(todo);
}

function updateStatus(id, statusType) {
  const targetTodo = todoAll.find((todo) => {
    return todo.id === id;
  });
  targetTodo.status = statusType;
}

function getCurrentStatus() {
  let currentStatus = undefined;
  statusRadioElements.forEach((item, index) => {
    if(item.checked) {
      currentStatus = item.value;
    }    
  });
  return currentStatus;
}

function onChangeStatusFilter(event) {
  showTodoAll();
}

function filterTodoAll(statusType) {
  if (statusType === statusTypes.ALL) {
    return [...todoAll];
  }
  return todoAll.filter(todo => {
      return todo.status === statusType;
    });
  }

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
  todoList.textContent = '';
  const currentStatus = getCurrentStatus();
  const todoAll = filterTodoAll(currentStatus);

  todoAll.forEach((todo) => {
    const tr = document.createElement('tr');

    const idSpan = document.createElement('span');
    idSpan.innerText = todo.id;
    const idSpanTd = document.createElement('td');
    idSpanTd.append(idSpan);

    const taskSpan = document.createElement('span');
    taskSpan.textContent = todo.title;
    const taskSpanTd = document.createElement('td');
    taskSpanTd.append(taskSpan);

    const statusButton = document.createElement('button');
    statusButton.innerText = todo.status;
    const statusButtonTd = document.createElement('td');
    statusButton.addEventListener('click', () => {
      if (todo.status === statusTypes.BEING) {
        updateStatus(todo.id, statusTypes.DONE);
        statusButton.innerText = todo.status;
      } else if (todo.status === statusTypes.DONE) {
        updateStatus(todo.id, statusTypes.BEING);
        statusButton.innerText = todo.status;
      }
    });
    statusButtonTd.append(statusButton);

    const removeButton = document.createElement('button');
    removeButton.innerText = '削除';
    const removeButtonTd = document.createElement('td');
    removeButton.addEventListener('click', () => {
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

addButton.addEventListener('click', (event) => {
  const todoTitle = todoInput.value;
  createTodo(todoTitle);
  todoInput.value = '';
  showTodoAll();
});
