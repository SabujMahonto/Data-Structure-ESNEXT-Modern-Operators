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


// Destructuring Object

const {restaurantName : name, startMenu: strMenu} = restaurant;

console.log(name, strMenu);

const {sun:sunday, fri:friday} = restaurant.openingHours;

console.log(sunday, friday);

// mutating variable 
const obj = {a:20,b:30};
({a,b}= obj);
console.log(a, b);
