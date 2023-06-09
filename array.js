const arr = ["a", "b", "c", "d", "e"];

// arr copy 
console.log(...arr);
console.log(arr.slice());
// last element 
console.log(arr[arr.length -1])
console.log(arr.slice(-1) );
console.log(arr.at(-1));

// splice 
const arr2 = ["j", "k", "l", "m", "n", "o"];


// console.log(arr2.splice(2,5));
// console.log(arr2);

// //reverse
const arr4 = [22, 44,12, 43,99,09,33,];
// console.log(arr4.reverse());

const arr3 =[33,22,66,44,33,77];
// concat
const joinArr = arr3.concat(arr3)
// console.log(joinArr);
// console.log([...arr3, ...arr4]);
// join 
const words = ["this", "is", "a", "nice", "day"];
// console.log(words.join(" "));

// push, usShift, pop , shift, indexOf, includes,
// const arr0 = [2,54,6,7,3,7,34,];
// arr0.push(22)
// arr0.unshift(99)
// arr0.pop()
// arr0.shift()
// arr0.includes(6);
// arr0.indexOf(33)
// console.log(arr0.indexOf(2));
// console.log(arr0.includes(2));

// At 
const arrNew = [1980, 1990,1930,2000,2023];
// console.log(arrNew[4]);
// console.log(arrNew.at(4));

// console.log(arrNew[arrNew.length -1]);
// console.log(arrNew.slice(-1)[0]);
// console.log(arrNew.at(-1));

// console.log(arr0);

// *forEach -> (does not produce new Array)
const numbers = [12,34,56,7,8,33,55,666,]
//  for loop 
for(let i = 0; i < numbers.length; i++){
    // console.log(`${i + 1} ${numbers[i]}`);
}


//* forEach doesn't support continue or break
numbers.forEach(function(element, i, arr){
    // console.log(`${i + 1} ${numbers[i]}`);
})

// numbers.forEach((num , i, arr) =>{
//     console.log(`${i + 1} ${numbers[i]}`);
// })
numbers.forEach((n, i)=>console.log(numbers[i]))

const friends = ['tumpa', 'rumpa', 'arpita','dipa','sangita']

for(let i = 0; i < friends.length; i++){
    // console.log(`${friends[i ] }: index -->${i +1}}`);
}

//* Map 
const currency = new Map([
    ["BDT","Bangladeshi Taka"],
    ["USD", "United State Doller"],
    ["EUR", "Euro"]
    
])
currency.forEach((value, key,)=>console.log(`${key}: ${value},`));

// set 


const currencyUnic = new Set([11,22,22,11,55,66,67,3,3,4,54,54,5,32])

currencyUnic.forEach((num,_,ar)=>{
    console.log(num);
})


// Array method Map(Return a new Array

//* Map

const currentMony = [3000,9000, 4000, 6000,7000];
const vatMony = currentMony.map((mony, i, arr)=>mony + 100)
// console.log(vatMony);
// console.log(currentMony);

//* filter

const transduction = [5000, -3000, 4000, -3000, 9000, -5000];

const depositeMoney = transduction.filter((money, i , arr)=>{
    if(money > 0){
        return transduction
    }
} )
console.log(depositeMoney);
const withdraw = transduction.filter((money,i,arr)=>money < 0  && money)
console.log(withdraw);

const numbersArr = [12,11,23,14,24,22,523,33,52,53];

const oddNum = numbersArr.filter((num, i, arr)=>num % 2 !== 0)

console.log(oddNum);

const eventNum = numbersArr.filter((num, i , arr)=> num % 2 === 0);
console.log(eventNum);

const friendsArr = ["sabuj", "samir", "sumi", "arpi", "arpita", "dipa", "dipok","karim"];

const friendWordS = friendsArr.filter((friend,i,arr)=>friend.startsWith("a"));
 
console.log(friendWordS);


// const color = ["white", "black", "blue", "green", "tomato","orange","pink", "crimson"];
// for(let colors of color){
//     let fav = colors[0].toUpperCase() + colors.slice(1)
//     console.log(fav);
// }

// for(let i =0; i<color.length; i++){
//   fav = color[i][0].toUpperCase() + color[i].slice(1)
//   console.log(fav);
// }


// const favColor = color.map(color =>color[0].toLocaleUpperCase() + color.slice(1))
// console.log(favColor);
// const num = [20, 30,60,80,20,90,];

// const newNum = num.map(n =>n -10)
// console.log(newNum);

// const color2 = ["white", "black", "blue", "green", "tomato","orange","pink", "crimson"];
// const favColorT = color2.filter(color=>color.startsWith("t"));
// console.log(favColorT);



// * Reduce
// const money = [20, 21,33,5,2,3,61,30,60,80,20,90,]
// const balance = money.reduce((acc,value, i, arr)=>{
//     // return acc + value 
   
 
// },0)

// console.log(balance);
const multi = [2,3,5,6,7,];
const totalMulti = multi.reduce((acc,el, i , arr) =>acc* el,1)
console.log(totalMulti);

const numArr = [20, 21,33,5,2,3,61,30,60,80,20,90,]

const maxNum = numArr.reduce((acc,el,i,arr)=>{
    if(acc > el){
        return acc
    }else{
        return el
    }
},numArr[0])

console.log(maxNum);
const minNum = numArr.reduce((acc,value)=>acc < value ? acc : value,numArr.at(0));
console.log(minNum);

//* Data Transformation pipeline

const bankMoney = [8000,-3000,20000,4000,-40000,39990, 36995,-98454];

const deposit = bankMoney.filter((deposit)=>deposit >=10000).map(deposit =>deposit /2).filter(money=>money >=10000).reduce((acc,value,i, arr)=>acc + value,0);

const lastWithDrow = bankMoney.find(withdraw => withdraw < 0)


console.log(lastWithDrow);

//*find
const student = [
    {name: "sabuj",id:29},
    {name:"somir", id:33},
    {name:"korim",id:22,},
    {name: "sagor", id:44}
]

const id44 = student.find(student=>student.id ===44)
console.log(id44);

//* some and every
const  arr00 = [29,15,48, 20,30];
const getterNum40 = arr00.some((num)=>num >0)
// console.log(getterNum40); 

const everyNum = arr00.every(num=>num > 10);
// console.log(everyNum);

//*flat or flatMap
const arr11 = [20,44,[30,53,],90,84,[22,99],55];
// console.log(arr11.flat(1));
const accounts = [
    {
        owner : "sabuj Mahonto",
        movement : [200,-500,-300,300,500,900,-700],
        
    },
    {
        owner : "dipok roy",
        movement : [1200,-1500,-1300,3200,5060,9030,-7100],
        
    },
    {
        owner : "mollika rani",
        movement : [2600,-5300,-3090,3090,5300,9000,-7300],
        
    }
]
// const arrOfMovement = accounts.map(account => account.movement).flat()
const arrOfMovement = accounts.flatMap(account => account.movement)
// console.log(arrOfMovement);

// *sorting (sort muted orginal array)
const studentArr = ["rina", "bina","dipok","dipika", "arpita","sabuj","abuj"]
// console.log(studentArr.sort());

const alphabet = ["g", "f", "e","d","c","b,",'a']

// console.log(alphabet.sort());

const arr22 = [8,5,3,2,1,0]
// console.log(arr22.sort());
const arrr = [222,111,4444,333,666,0009,3388,]

const ascending = arrr.sort((a,b)=>{
    return  a>b ?1 : -1;
}) 
// const ascending = arrr.sort((a,b)=>a-b)

const descending = arrr.sort((a,b)=>{
    return a > b ?-1 : 1;
})
// const descending = arrr.sort((a,b)=>b-a)
console.log(ascending);
console.log(descending);