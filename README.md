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

// update pages when localStorage is updated

    window.addEventListener("storage", function(event) {
        if (event.key === "notes") {
            notes = JSON.parse(event.newValue);
            renderNotes(notes, filters);
        }
    });

// working with dates - date object

    const now = new Date(); <-- current point in time
    const timestamp = now.getTime();

    const myDate = newDate(timestamp);
    console.log(myDate.getFullYear());

// working with dates - moment.js library

    const now = moment(); <-- current point in time
    now.add(1, 'year').subtract(2, 'days');

    console.log(now.toString());
    now.format(String) <-- new.format("MMMM Do YYYY");

    console.log(now.fromNow()); <-- in a year
    const nowTimestamp = now.valueOf();

    console.log(moment(nowTimestamp).toString());

// TRUTHY - values that resolve to TRUE in a boolean context
// FALSY - values that resolve to FALSE in a boolean context

    TRUTHY: all the others

    FALSY: false, 0, -0, "", null, undefined, NaN

// Ternary operator

    return (condition) ? TRUE : FALSE

// TRY - CATCH block

    const getTip = (amount) => {
        if (typeof amount === 'number') {
            return amount * 0.25
        } else {
            throw Error('Argument must be a number')
        }
    }

    try {
        const result = getTip('test');
        console.log(result);
    } catch (error) {
        console.log(error, 'Catch block is running');
    }

// GETTERS and SETTERS

    const data = {
    locations: [],
    get location() {
        return this._location;
    },
    set location(value) {
        this._location = value.trim();
        this.locations.push(this._location);
    }
    };

    // code that use data object
    data.location = "  London";
    data.location = "Bucharest   ";

    console.log(data);

// Get list of globally installed packages

    npm list -g --depth 0
