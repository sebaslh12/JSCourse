let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 73,
    checkAvailability: function (partySize) {
        //this refers to the object that the method is defined in
        let seatsLeft = this.guestCapacity - this.guestCount
        return seatsLeft >= partySize
    }, //A method is an object property that has a function as a value
    seatParty: function (partySize) {
        this.guestCount += partySize
    },
    removeParty: function (partySize) {
        this.guestCount -= partySize
    }
}

// Lecture challenge, create seatParty, removeParty methods
restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))