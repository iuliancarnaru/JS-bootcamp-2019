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
