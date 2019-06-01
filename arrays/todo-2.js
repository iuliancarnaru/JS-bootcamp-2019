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
    completed: false
  },
  {
    text: "Cut hair",
    completed: true
  }
];

const deleteTodo = function(todos, todoTitle) {
  const findIndex = todos.findIndex(function(todo) {
    return todo.text.toLowerCase() === todoTitle.toLowerCase();
  });

  if (findIndex !== -1) {
    todos.splice(findIndex, 1);
  }

  return todos;
};

const getThingsToDo = function(todos) {
  return todos.filter(function(todo) {
    return !todo.completed;
  });
};

const sortTodos = function(todos) {
  todos.sort(function(a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortTodos(todos);
console.log(todos);
