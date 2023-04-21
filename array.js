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

//reverse
const arr4 = [22, 44,12, 43,99,09,33,];
console.log(arr4.reverse());

const arr3 =[33,22,66,44,33,77];
// concat
const joinArr = arr3.concat(arr3)
console.log(joinArr);
console.log([...arr3, ...arr4]);
// join 
const words = ["this", "is", "a", "nice", "day"];
console.log(words.join(" "));

