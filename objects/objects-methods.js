let restaurant = {
    name: "Las Iguanas",
    guestCapacity: 75,
    guestCount: 0,

    // inside a method this keyword points to the object where that method is defined on
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },

    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize;
    },

    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize;
    }
}


restaurant.seatParty(72);
console.log(restaurant.checkAvailability(6)); // false

restaurant.removeParty(8);
console.log(restaurant.checkAvailability(6)); // true
