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
    order:function(starterIndex, mainIndex){
        return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
    }

}

//Destructuring Array
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);


const [x,y,z] = arr;
console.log(x,y,z);

let [main, , , secondary] = restaurant.categories;
console.log(main, secondary);

const [food1, , , food2]= restaurant.mainMenu;

console.log(food1, food2);

// switching variable
let first = 20;
let second = 30;
// let temp = first;
// first = second;
// second =temp;
[first,second] = [second, first];
console.log(first, second);


[main, secondary] = [secondary, main]

console.log(main, secondary);

    let [firstOrder, secondOrder] = restaurant.order(0,0)
    console.log(firstOrder, secondOrder);
