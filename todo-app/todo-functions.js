const getSavedTodos = function() {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

const toggleTodo = function (id) {
  const todo = todos.find(function (todo) {
    return todo.id === id
  });

  if (todo !== undefined) {
    todo.completed = !todo.completed
  }
}

const saveTodos = function(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const removeTodo = function(id) {
  const todoIndex = todos.findIndex(function(todo) {
    return todo.id === id;
  });

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

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
  document
    .querySelector("#todos")
    .appendChild(generateSummaryDOM(incompleteTodos));

  filterTodos.forEach(function(todo) {
    document.querySelector("#todos").appendChild(generateTodoDOM(todo));
  });
};

const generateTodoDOM = function(todo) {
  const todoElement = document.createElement("div");
  const checkboxElement = document.createElement("input");
  const textElement = document.createElement("span");
  const button = document.createElement("button");

  checkboxElement.setAttribute("type", "checkbox");
  checkboxElement.checked = todo.completed;
  todoElement.appendChild(checkboxElement);
  checkboxElement.addEventListener('change', function () {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  textElement.textContent = todo.text;
  todoElement.appendChild(textElement);

  button.textContent = "x";
  todoElement.appendChild(button);
  button.addEventListener("click", function() {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return todoElement;
};

const generateSummaryDOM = function(incompleteTodos) {
  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos.`;
  return summary;
};
