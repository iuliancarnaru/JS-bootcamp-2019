const getSavedTodos = function () {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    } else {
        return [];
    }
};

const saveTodos = function (todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
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
    document.querySelector("#todos").appendChild(generateSummaryDOM(incompleteTodos));
  
    filterTodos.forEach(function(todo) {
      document.querySelector("#todos").appendChild(generateTodoDOM(todo));
    });
};
  
const generateTodoDOM = function (todo) {
    const todoElement = document.createElement("p");
    todoElement.textContent = todo.text;
    return todoElement;
}

const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement("h2");
    summary.textContent = `You have ${incompleteTodos.length} todos.`;
    return summary;
}