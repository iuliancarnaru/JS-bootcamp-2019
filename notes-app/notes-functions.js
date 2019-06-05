console.log(uuidv4());

// Read existing notes fron localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem("notes");
    if (notesJSON !== null) {
        return JSON.parse(notesJSON);
    } else {
        return [];
    }
};

// Generate a DOM structure for a note
const generateNoteDOM = function (note) {
  const noteElement = document.createElement("div");
  const textElement = document.createElement("span");

  const button = document.createElement("button");

  button.textContent = "x";
  noteElement.appendChild(button);

    if (note.title.length > 0) {
      textElement.textContent = note.title;
    } else {
      textElement.textContent = "Unnamed note";
    }
  
  noteElement.appendChild(textElement);
  return noteElement;
}

// REnder application notes
const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
      return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });
    document.querySelector("#notes").innerHTML = "";
    filteredNotes.forEach(function(note) {
      const noteElement = generateNoteDOM(note);
      document.querySelector("#notes").appendChild(noteElement);
    });
  };
