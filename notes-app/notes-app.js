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
  
const filters = {
  searchText: ''
}

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector('#notes').innerHTML = '';
  
  filteredNotes.forEach(function (note) {
    const noteElement = document.createElement('p');
    noteElement.textContent = note.title;
    document.querySelector('#notes').appendChild(noteElement);
  })
}

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function (event) {
  console.log('Note created');
});

document.querySelector('#remove-all').addEventListener('click', function (event) {
  document.querySelectorAll('.note').forEach(function (note) {
    note.remove();
  });
});

document.querySelector('#search-text').addEventListener('input', function (event) {
  filters.searchText = event.target.value;
  renderNotes(notes, filters);
});