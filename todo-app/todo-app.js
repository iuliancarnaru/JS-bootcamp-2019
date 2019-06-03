const todos = [
    {
      text: "Go to gym",
      completed: false
    },
    {
      text: "Clean the house",
      completed: true
    },
    {
      text: "Finish the book",
      completed: true
    },
    {
      text: "Cut hair",
      completed: false
    }
];

const filters = {
  searchText:''
}

const renderTodos = function (todos, filters) {
  const filterTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  const incompleteTodos = filterTodos.filter(function (todo) {
    return !todo.completed
  });

  document.querySelector('#todos').innerHTML = '';

  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos.`;
  document.querySelector('#todos').appendChild(summary);
 
  filterTodos.forEach(function (todo) {
    const todoElement = document.createElement('p');
    todoElement.textContent = todo.text;
    document.querySelector('#todos').appendChild(todoElement);
  });
}

renderTodos(todos, filters);


// working with button
document.querySelector('#add-todo').addEventListener('click', function (event) {
  console.log('Todo added');
}); 

document.querySelector('#new-todo-text').addEventListener('input', function (event) {
  console.log('todo added');
})

document.querySelector('#search-text').addEventListener('input', function (event) {
  filters.searchText = event.target.value;
  renderTodos(todos, filters);
})