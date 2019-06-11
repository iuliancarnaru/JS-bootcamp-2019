const getSavedTodos = function() {
  const todosJSON = localStorage.getItem("todos");

  try {
    return todosJSON ? JSON.parse(todosJSON) : [];
  } catch (error) {
    return [];
  }
};

const toggleTodo = id => {
  const todo = todos.find(todo => todo.id === id);

  if (todo) {
    todo.completed = !todo.completed;
  }
};

const saveTodos = todos => localStorage.setItem("todos", JSON.stringify(todos));

const removeTodo = id => {
  const todoIndex = todos.findIndex(todo => todo.id === id);

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

const renderTodos = (todos, filters) => {
  const filterTodos = todos.filter(todo => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filterTodos.filter(todo => !todo.completed);

  document.querySelector("#todos").innerHTML = "";
  document
    .querySelector("#todos")
    .appendChild(generateSummaryDOM(incompleteTodos));

  if (todos.length > 0) {
    filterTodos.forEach(todo => {
      document.querySelector("#todos").appendChild(generateTodoDOM(todo));
    });
  } else {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = `No todos to show`;
    emptyMessage.classList.add("empty-message");
    document.querySelector("#todos").appendChild(emptyMessage);
  }
};

const generateTodoDOM = todo => {
  const todoElement = document.createElement("label");
  const containerElement = document.createElement("div");
  const checkboxElement = document.createElement("input");
  const textElement = document.createElement("span");
  const button = document.createElement("button");

  checkboxElement.setAttribute("type", "checkbox");
  checkboxElement.checked = todo.completed;
  containerElement.appendChild(checkboxElement);
  checkboxElement.addEventListener("change", function() {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  textElement.textContent = todo.text;
  containerElement.appendChild(textElement);

  // setup container
  todoElement.classList.add("list-item");
  containerElement.classList.add("list-item__container");
  todoElement.appendChild(containerElement);

  button.textContent = "remove";
  button.classList.add("button", "button--text");
  todoElement.appendChild(button);
  button.addEventListener("click", function() {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return todoElement;
};

const generateSummaryDOM = incompleteTodos => {
  const summary = document.createElement("h2");
  const text = incompleteTodos.length === 1 ? "todo" : "todos";
  summary.classList.add("list-title");
  summary.textContent = `You have ${incompleteTodos.length} ${text}.`;
  return summary;
};
