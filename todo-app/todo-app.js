let todos = [];

const filters = {
  searchText: "",
  hideCompleted: false
};

const todosJSON = localStorage.getItem("todos");
if (todosJSON !== null) {
  todos = JSON.parse(todosJSON);
}

const renderTodos = function(todos, filters) {
  const filterTodos = todos.filter(function(todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filterTodos.filter(function(todo) {
    return !todo.completed;
  });

  document.querySelector("#todos").innerHTML = "";

  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos.`;
  document.querySelector("#todos").appendChild(summary);

  filterTodos.forEach(function(todo) {
    const todoElement = document.createElement("p");
    todoElement.textContent = todo.text;
    document.querySelector("#todos").appendChild(todoElement);
  });
};

renderTodos(todos, filters);

document
  .querySelector("#search-text")
  .addEventListener("input", function(event) {
    filters.searchText = event.target.value;
    renderTodos(todos, filters);
  });

document
  .querySelector("#todo-form")
  .addEventListener("submit", function(event) {
    event.preventDefault();

    todos.push({
      text: event.target.elements.todoText.value,
      completed: false
    });

    localStorage.setItem("todos", JSON.stringify(todos));

    event.target.elements.todoText.value = "";
    renderTodos(todos, filters);
  });

document
  .querySelector("#hide-completed")
  .addEventListener("change", function(event) {
    filters.hideCompleted = event.target.checked;
    renderTodos(todos, filters);
  });
