"use strict"
const bookings = [];
const createBooking = function(roomNum, numOfGuest = 1, price = 500 * numOfGuest){
    const booking ={
        roomNum,
        numOfGuest,
        price,
    }
    bookings.push(booking)
}

createBooking("A2",2 );
createBooking("v3", undefined, 3300)
console.log(bookings);