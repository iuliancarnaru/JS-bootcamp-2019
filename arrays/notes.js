const notes = ["Note 1", "Note 2", "Note 3", "Note 4"];

console.log(notes.length); // 4
console.log(notes[1]); // Note 2
console.log(notes[notes.length - 1]); // Note 4 (last item)

// ----- END -----
notes.push("Note 5"); // add the new value at the end of arrray
notes.pop(); // remove last item from the array and return the deleted value
console.log(notes);

// ----- BEGIN -----
notes.shift(); // remove first item from the array and return the deleted value
notes.unshift("New note"); // add the new value at the begining of arrray
console.log(notes);

// ----- ANYWHERE -----

// REMOVE
notes.splice(1, 2); // (starting point, how many items)
console.log(notes);

// ADD
notes.splice(1, 0, "New item"); // (starting point, remove none, insert item)
console.log(notes);

// Looping through array
// a calback function is a function that is called by another function

notes.forEach(function(item, index) {
  console.log(index);
  console.log(item);
});

// ([initialization]; [condition]; [final-expression])
for (let i = 0; i <= 5; i++) {
  console.log(`Counting... ${i}`);
}

for (let i = 0; i <= notes.length; i++) {
  console.log(notes[i]);
}

// loop in reverse

for (let i = notes.length - 1; i >= 0; i--) {
  console.log(notes[i]);
}
