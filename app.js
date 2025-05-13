let todos = [];
// eslint-disable-next-line no-unused-vars
function addTodo() {
  const todoInput = document.getElementById("todo-input");
  if (todoInput.value.trim() !== "") {
    todos.push(todoInput.value.trim());
    todoInput.value = "";
    renderTodos();
  }
}

function removeTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function renderTodos() {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const listitem = document.createElement("li");
    listitem.textContent = todo;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Delete";
    removeBtn.style.marginLeft = "10px";
    removeBtn.style.color = "red";
    removeBtn.onclick = function () {
      removeTodo(index);
    };
    listitem.appendChild(removeBtn);
    list.appendChild(listitem);
  });
}
