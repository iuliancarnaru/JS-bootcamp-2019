const notes = [
    {
      title: "My next trip",
      body: "I would like to go to Spain."
    },
    {
      title: "Habbits to work on",
      body: "Eat better, sleep earlier."
    },
    {
      title: "Office modification",
      body: "Get a new 4k monitor"
    }
  ];

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(function (paragraph) {
    paragraph.textContent = '***'
});

const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new element from JS';
document.querySelector('body').appendChild(newParagraph);