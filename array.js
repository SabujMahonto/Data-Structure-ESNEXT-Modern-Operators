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

// forEach -> (does not produce new Array)
const numbers = [12,34,56,7,8,33,55,666,]
//  for loop 
for(let i = 0; i < numbers.length; i++){
    // console.log(`${i + 1} ${numbers[i]}`);
}


// forEach doesn't support continue or break
numbers.forEach(function(element, i, arr){
    // console.log(`${i + 1} ${numbers[i]}`);
})

// numbers.forEach((num , i, arr) =>{
//     console.log(`${i + 1} ${numbers[i]}`);
// })
numbers.forEach((n, i)=>console.log(numbers[i]))

const friends = ['tumpa', 'rumpa', 'arpita','dipa','sangita']

for(let i = 0; i < friends.length; i++){
    console.log(`${friends[i ] }: index -->${i +1}}`);
}