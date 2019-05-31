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

// console.log(notes.indexOf("Note 4")); // -1 item couldn't be found in the array
// console.log(notes.indexOf({})); // when comparing two empty objects they are not the same {} !== {}

const index = notes.findIndex(function(note, index) {
  return note.title === "Office modification";
});

console.log(index);

// -----------

const findNote = function(notes, noteTitle) {
  const index = notes.findIndex(function(note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase(); // case insensitive search
  });

  return notes[index];
};

const note = findNote(notes, "OfFice moDificaTion");
console.log(note);

// -----------

const findNote = function(notes, noteTitle) {
  return notes.find(function(note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase(); // case insensitive search
  });
};

const note = findNote(notes, "OfFice moDificaTion");
console.log(note);
