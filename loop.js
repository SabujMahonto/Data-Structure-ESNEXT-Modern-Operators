"use street"
const restaurant ={
    restaurantName : "Burgers house240",
    location  : "Puran Dhaka, Dhaka , Bangladesh",
    categories : ["Italian", "Germany", "Organic","local"],
    startMenu : [
        "Chicken cheese", 
        "Matron Burger",
        "Garlic Bread",
        "Italian Pacy Pasta",
        "Shahi Berayani",
    ],
    mainMenu : [
        "Burger",
        "Pizza",
        "Chicken Kabub",
        "Fajita",
        "French fries"
    ],
    openingHours:{
        sun:{
            open:10,
            close:21,
        },
        fri:{
            open:9,
            close:23,
        },
        wed:{
            open:11,
            close:22,
        },
    },
   order:function(staterIndex, mainIndex){
            return [this.startMenu[staterIndex], this.mainMenu[mainIndex]];

 },
 deliveryOrder:function({staterIndex = 0, mainIndex = 0 ,address  = "unknown", time ="10.00 am"}){
          console.log(`${this.startMenu[staterIndex]} ${this.mainMenu[mainIndex]} ${address} ${time}`);  

 },
 bergerOrder:function(item1, item2, item3){
    console.log(`Delicious deist ready to ${item1}, ${item2}, ${item3} . Boom!`);
 }, 
 orderPizza:function(mainItem, ...otherItems){
    console.log(mainItem);
    console.log(otherItems);
 }

}
//?Array 
// *for loop 
const arr = [1,3,4,5,67,8];
for(let i = 0; i < arr.length; i++){
    // console.log(arr[i]);
}
// *for of loop 
for(const numbers of arr){
    // console.log(numbers);
}

const menu = [...restaurant.mainMenu, ...restaurant.startMenu];
// console.log(...menu.entries()); (key,values)

for(const [i,foods] of menu.entries()){
    console.log(`${i + 1} : ${foods}`);
}
const friends = ["Abus", "karim", "rahim", "jorin", "sabuj"]
const friendEntry = friends.entries();
for(const [i,friend] of friendEntry){
    // console.log(`${i + 1} : ${friend}`);
}
 
// //* optional chaining
// console.log(restaurant?.openingHours?.san?.open);
// console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant.openingHours?.fri?.open);

const day = ["sun", "sat", "mon", "wed", "ths", "tue", "fri"];

for(const days of day){
  const open = restaurant.openingHours[days]?.open || "offday" 
  
    // console.log(`on ${days} we are avalivel  ${open}`);
}

// console.log(restaurant?.order?.(1,1));
// console.log(restaurant?.orderPasta?.(0,1));

//* looping Object 
// property , Name , (Key)
const properties = Object.keys(restaurant.openingHours);
console.log(properties);
for(const day of properties){
    console.log(day);
}

//Property values
const values = Object.values(restaurant.openingHours);
console.log(values);
for(const day of values){
    console.log(day);
}
// property entries , (key , values)
const entries = Object.entries(restaurant.openingHours);
console.log(entries);
for(const [key, values] of entries){
    console.log(`on ${key} day we are open at ${values.open} and close at ${values.close} `);
}

// * Object method set
const foods = new Set(["pizza", "burger", "pizza", "pusta", "pizza", "fazida"]);
// console.log(foods);
// console.log(foods.size);
// console.log(foods.has("pizza"));
// foods.add("mango")
// foods.delete("pizza")
// foods.clear()
// console.log(foods);
const arr2 = [10, 20,30,10,20,30,30,20,10,40,50,11,40,];
const unicqArr = [...new Set(arr2)];
// console.log(unicqArr);

//  * Array method map
const rest = new Map()
rest.set("name","Pizza Hutt");
rest.set(1,"Dhaka");
rest.set(1, "Chatagong")
rest.set("catagories",["pizzarian","vagiteriyan","Italian"]).set("open",10).set("close", 22).set(true,"we are open").set(false,"we are closed")
console.log(rest);
console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 10;
console.log(time > rest.get("open") && time < rest.get("close"));
console.log(rest.has(1));
console.log(rest.delete(1));

//* string method 
const station = "Pahartoli station";
const train = "P667"
// console.log(train[0]);
// console.log(station.length);
// console.log("Pahartoli".length);

//* slice(starting index or ending index)
// console.log(station.slice(0,9));
// console.log(station.slice(10,20));
// console.log(station.slice(0, station.indexOf(" ")));
// console.log(station.slice(station.indexOf(" ") +1));
// console.log(station.slice(1,-1));
// last index 
// console.log(station.length(-1));
// console.log(station.slice(-1));
// console.log(station.at(-2));

const checkWindowSet = function(seatNumber){
    // w for  window set
    // m for middle set
    // c or cabin set 
    const sliceSeatNum = seatNumber.slice(2,3);

    console.log(sliceSeatNum);
    if(sliceSeatNum === 'w'){
        console.log( `Your set num is ${seatNumber} it's placed beside windows.`)
    } else if (sliceSeatNum === 'm'){
        console.log( `Your set num is ${seatNumber} it's placed middle.`)
    }else{
        console.log( `Your set num is ${seatNumber} it's a cabin set.`)
    }
    
}
// checkWindowSet("22w111")
// checkWindowSet("65m118")
// checkWindowSet("95c191")

const starion2 = "Komolapur Station"

console.log(starion2.toLowerCase());
console.log(starion2.toUpperCase());

// name conversion
function fixCap(fastName ,lastName){
    const lowerName = fastName.toLowerCase();// sabuj mahonto
    const currentLowerName = lowerName.at(0).toUpperCase() + lowerName.slice(1);

    const lastLowerName = lastName.toLowerCase();
    const correctLastName = lastLowerName.at(0).toUpperCase() + lastLowerName.slice(1);
    const currentName = `${currentLowerName} ${correctLastName}`;
    return currentName;
}
console.log(fixCap("sabuj", "mahonto"));
