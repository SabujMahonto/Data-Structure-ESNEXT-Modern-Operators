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

// createBooking("A2",2 );
// createBooking("v3", undefined, 3300)
// console.log(bookings);

// values vs reference 
// let flight = "B333",
// const info = {
//     nam : "sabuj",
//     passport: 02334333345,
// }
// const checkIn = function(flight, passanger){
//     if(passanger.passport === 02334333345){
//         return "Check In Successfully"
//     }else{
//         return "Wrong Passport"
//     }
// }

// checkIn(flight,ingo)

// function accepting callback function
// first class function
//callback function
// higher order function
const logsCutter = function(logs){
   let picesOfLog = 0;
    for(let log of logs){
     picesOfLog += log;
    }
    return picesOfLog;
}

const logCounter = function(logs ){
    return logs.length
}

const sawmill = function(logs, fn){
    console.log(`Opened by ${logs}`);
    return fn(logs);
}

console.log(sawmill([12,12,12,14,2,] ,logCounter));
console.log(sawmill([12,12,12,14,2,] ,logsCutter));
//curring function
