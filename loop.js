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
// *for loop 
const arr = [1,3,4,5,67,8];
for(let i = 0; i < arr.length; i++){
    // console.log(arr[i]);
}
// *for of loop 
for(const numbers of arr){
    console.log(numbers);
}

const menu = [...restaurant.mainMenu, ...restaurant.startMenu];
// console.log(...menu.entries()); (key,values)

for(const [i,foods] of menu.entries()){
    console.log(`${i + 1} : ${foods}`);
}
const friends = ["Abus", "karim", "rahim", "jorin", "sabuj"]
const friendEntry = friends.entries();
for(const [i,friend] of friendEntry){
    console.log(`${i + 1} : ${friend}`);
}
 
// // optional chaining
// console.log(restaurant?.openingHours?.san?.open);
// console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant.openingHours?.fri?.open);

const day = ["sun", "sat", "mon", "wed", "ths", "tue", "fri"];

for(const days of day){
  const open = restaurant.openingHours[days]?.open || "offday" 
  
    console.log(`on ${days} we are avalivel  ${open}`);
}

console.log(restaurant?.order?.(1,1));
console.log(restaurant?.orderPasta?.(0,1));