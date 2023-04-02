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

//sort circuiting
// console.log(3||"tumpa");
// console.log("" || "subrina");
// console.log(false || 0);
// console.log(undefined || null);
// console.log(undefined || "" || "maysha" || null);
// console.log(false || true);
// console.log(true || false);
// console.log(0 || "");

restaurant.guest = 33;
const guest = restaurant.guest ? restaurant.guest : 29;
console.log(guest);

// *sort circuiting 
// useing or ||
const guest2 = restaurant.guest || 30;
console.log(guest2);

restaurant.founder = "tumpa";
// const founder = restaurant.founder ? restaurant.founder : "anower"
const founder = restaurant.founder || "anower"
console.log(founder);

// using and && 
console.log(0 && "shabuj");
console.log(10 && "supermen");
console.log("object" && "You" && "me" && null && "tumppa" && 33);
console.log(false && true);
console.log(20 && true && "hello" && undefined);

// practical example
// if(restaurant.orderPizza){
//     restaurant.orderPizza("masrums", "onioun", "tomato")
// }
restaurant.orderPizza && restaurant.orderPizza("masrums", "onioun", "tomato");