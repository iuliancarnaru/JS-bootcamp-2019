let notes = getSavedNotes();

const filters = {
  searchText: ""
};

renderNotes(notes, filters);

document
  .querySelector("#create-note")
  .addEventListener("click", function(event) {
    const id = uuidv4();
    notes.push({
      id,
      title: "",
      body: ""
    });

    saveNotes(notes);
    location.assign(`./edit.html#${id}`);
  });

document
  .querySelector("#search-text")
  .addEventListener("input", function(event) {
    filters.searchText = event.target.value;
    renderNotes(notes, filters);
  });

document
  .querySelector("#filter-by")
  .addEventListener("change", function(event) {
    console.log(event.target.value);
  });

window.addEventListener("storage", function(event) {
  if (event.key === "notes") {
    notes = JSON.parse(event.newValue);
    renderNotes(notes, filters);
  }
});
