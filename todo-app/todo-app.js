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

// You have 2 todos left (p)
const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
});

const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todos.`;
document.querySelector('body').appendChild(summary);

// Add a (p) for each todo
todos.forEach(function (todo) {
    const p = document.createElement('p');
    p.textContent = todo.text;
    document.querySelector('body').appendChild(p);
});