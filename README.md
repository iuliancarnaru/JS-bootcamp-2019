# JS-bootcamp-2019

localStorage C.R.U.D. (only supports string based data)

// CREATE
localStorage.setItem("location", "London");

// READ
console.log(localStorage.getItem("location"));

// UPDATE
localStorage.setItem("location", "London");

// DELETE
localStorage.removeItem("location");
localStorage.clear(); <-- clear all

    const user = {
        name: "Iulian",
        age: 34
    }

    // write
    const userJSON = JSON.stringify(user);
    localStorage.setItem('user', userJSON);

    // read
    const userJSON = localStorage.getItem("user");
    const user = JSON.parse(userJSON);
