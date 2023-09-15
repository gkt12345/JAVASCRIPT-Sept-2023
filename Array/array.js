// intro to arrays

// creation

let fruits = ["apple", "mango", "graps"];
let number = [1,2,3,4];
let mixed = [1,2,3,4, "string", null, undefined];

// console.log(fruits);
// console.log(number);
// console.log(mixed);

// update value of array
fruits[1] = "banana";  // change mango with banana
// console.log(fruits);


// ==================================================
// it is refrence type : object

// console.log(typeof Array); // function  
// console.log(typeof fruits);  // object
// console.log(Array.isArray(fruits)); // true


// ================================================
// delete and insert elements in array
// push pop shift unshift

// push: insert in last
fruits.push("pineapple");
console.log(fruits);

// pop: remove from last
fruits.pop();
console.log(fruits);

// unshift: insert in start
fruits.unshift("pineapple");
console.log(fruits);

// shift: remove from start
fruits.shift();
console.log(fruits);












