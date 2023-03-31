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
 }

}




// //Destructuring Array
// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);


// const [x,y,z] = arr;
// console.log(x,y,z);

// let [main, , , secondary] = restaurant.categories;
// console.log(main, secondary);

// const [food1, , , food2]= restaurant.mainMenu;

// console.log(food1, food2);

// // switching variable
// let first = 20;
// let second = 30;
// // let temp = first;
// // first = second;
// // second =temp;
// [first,second] = [second, first];
// console.log(first, second);


// [main, secondary] = [secondary, main]

// console.log(main, secondary);

//     let [firstOrder, secondOrder] = restaurant.order(1,2)

   
//     console.log(firstOrder, secondOrder);

//     // Nested Destructuring
//     let friendsList = ['sabuj', 'sakib' , ['ripon' , 'rakib '], 'arpi']

//     let [f1,f2,[f3,f4],f5] = friendsList;
//     console.log(f1,f2,f3,f4,f5);

//     // default values
//    const newArr = [20, 40];
//    const [p, q, r=1, w=2] = newArr;
//    console.log(p, q, r, w);


// * Destructuring Object

const {restaurantName : name, startMenu: strMenu} = restaurant;

console.log(name, strMenu);

const {sun:sunday, fri:friday} = restaurant.openingHours;

console.log(sunday, friday);

//*  mutating variable 
const obj = {a:20,b:30};
({a,b}= obj);
console.log(a, b);

//*  nested Object 
const sabuj = {
    friends :{
        first:"shohag",

        second:"ripon",
    },
};

const {first,second} = sabuj.friends;
// const  {friends: {first,second}} = sabuj;
console.log(first, second);

restaurant.deliveryOrder({
    staterIndex:2,
    mainIndex:2,
    address:"Uttora,Dhaka",
    time: "9.00 pm"
})

// restaurant.deliveryOrder({
//     staterIndex:3,
//     mainIndex:0,
//     address:"Dhaka,BD",
//     time:"9.00 am"
// })

//*  SpreedOperator
const arr3 = [33,44,55,];
// const badArrCopy = [11,22,arr3[0],arr3[1],arr3[2]];
// const goodArrCopy = [88,99,...arr3]
// console.log(goodArrCopy);

// const newMainMenu = [...restaurant.mainMenu, "loodles"];
// console.log(newMainMenu);

// * Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);
// *  Join array
// const allFoods = [...restaurant.mainMenu,...restaurant.startMenu];
// console.log(allFoods);

// * //iterable array, string, maps, sets, ! not object
const gameName = "call of duty: modern Warfare";

console.log(...gameName, " " ,"2023");


const ingredient = ["Tomato", "Chicken", "lettuce"];

// restaurant.bergerOrder(ingredient[0],ingredient[1],ingredient[2]);
restaurant.bergerOrder(...ingredient);


// * rest pattern and parameter 
// for array 
const arr4 = [1,3,...[2,5,4,9]];
 ([a, b, c,...other] = [66, 22,33,88,99,76])
// console.log(a,b,c,other);

const [firstChoice, , secondChoice,...otherFood] = [...restaurant.mainMenu, ...restaurant.startMenu];
// console.log(firstChoice,secondChoice,otherFood);

// for object 
const {sun:sunday2,...othersDays} =restaurant.openingHours;
console.log(sunday2, othersDays);
