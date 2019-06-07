const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const removeButtonElement = document.querySelector("#remove-note");
const dateElement = document.querySelector("#last-edited");

const noteId = location.hash.substring(1);
let notes = getSavedNotes();

let note = notes.find(note => note.id === noteId);

if (note === undefined) {
  location.assign("./index.html");
}

titleElement.value = note.title;
bodyElement.value = note.body;
dateElement.textContent = generateLastEdited(note.updatedAt);

titleElement.addEventListener("input", event => {
  note.title = event.target.value;
  note.updatedAt = moment().valueOf();
  dateElement.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
});

bodyElement.addEventListener("input", event => {
  note.body = event.target.value;
  note.updatedAt = moment().valueOf();
  dateElement.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
});

removeButtonElement.addEventListener("click", event => {
  removeNote(note.id);
  saveNotes(notes);
  location.assign("./index.html");
});

window.addEventListener("storage", event => {
  if (event.key === "notes") {
    notes = JSON.parse(event.newValue);
    note = notes.find(note => note.id === noteId);

    if (note === undefined) {
      location.assign("./index.html");
    }

    titleElement.value = note.title;
    bodyElement.value = note.body;
    dateElement.textContent = generateLastEdited(note.updatedAt);
  }
});
