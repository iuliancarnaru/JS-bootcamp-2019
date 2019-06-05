const todos = getSavedTodos();

const filters = {
  searchText: "",
  hideCompleted: false
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

    saveTodos(todos);

    event.target.elements.todoText.value = "";
    renderTodos(todos, filters);
  });

document
  .querySelector("#hide-completed")
  .addEventListener("change", function(event) {
    filters.hideCompleted = event.target.checked;
    renderTodos(todos, filters);
  });
