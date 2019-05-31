const todos = [
  "Go to gym",
  "Clean the house",
  "Finish the book",
  "Cut hair",
  "Call sister"
];

console.log(`You have ${todos.length} todos.`);
console.log(todos);

todos.splice(2, 1);
todos.push("Clean car");
todos.shift();

todos.forEach(function(item, index) {
  console.log(`${index + 1}. ${item}`);
});

for (let i = 0; i <= todos.length; i++) {
  console.log(todos[i]);
}
