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
  
const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(function (paragraph) {
    if (paragraph.textContent.includes('the')) {
        paragraph.remove();
    }
});


