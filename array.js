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


console.log(arr2.splice(2,5));
console.log(arr2);