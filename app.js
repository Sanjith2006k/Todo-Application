let todos = [];
function addTodo() {
  const todoInput = document.getElementById("todo-input");
  if (todoInput.value.trim() !== "") {
    todos.push(todoInput.value.trim());
    todoInput.value = "";
    renderTodos();
  }
}
function renderTodos() {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const listitem = document.createElement("li");
    listitem.textContent = todo;
    list.appendChild(listitem);
  });
}
