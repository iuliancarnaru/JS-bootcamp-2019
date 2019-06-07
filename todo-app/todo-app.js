const todos = getSavedTodos();

const filters = {
  searchText: "",
  hideCompleted: false
};

renderTodos(todos, filters);

document.querySelector("#search-text").addEventListener("input", event => {
  filters.searchText = event.target.value;
  renderTodos(todos, filters);
});

document.querySelector("#todo-form").addEventListener("submit", event => {
  event.preventDefault();

  todos.push({
    id: uuidv4(),
    text: event.target.elements.todoText.value,
    completed: false
  });

  saveTodos(todos);

  event.target.elements.todoText.value = "";
  renderTodos(todos, filters);
});

document.querySelector("#hide-completed").addEventListener("change", event => {
  filters.hideCompleted = event.target.checked;
  renderTodos(todos, filters);
});
