const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const removeButtonElement = document.querySelector("#remove-note");

const noteId = location.hash.substring(1);
let notes = getSavedNotes();

let note = notes.find(function(note) {
  return note.id === noteId;
});

if (note === undefined) {
  location.assign("./index.html");
}

titleElement.value = note.title;
bodyElement.value = note.body;

titleElement.addEventListener("input", function(event) {
  note.title = event.target.value;
  saveNotes(notes);
});

bodyElement.addEventListener("input", function(event) {
  note.body = event.target.value;
  saveNotes(notes);
});

removeButtonElement.addEventListener("click", function(event) {
  removeNote(note.id);
  saveNotes(notes);
  location.assign("./index.html");
});

window.addEventListener("storage", function(event) {
  if (event.key === "notes") {
    notes = JSON.parse(event.newValue);
    note = notes.find(function(note) {
      return note.id === noteId;
    });

    if (note === undefined) {
      location.assign("./index.html");
    }

    titleElement.value = note.title;
    bodyElement.value = note.body;
  }
});
