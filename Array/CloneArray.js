// how to clone array

let arr1 = ["item1", "item2"];

// gives refrence number changes reflect in both array  
// let arr2 = arr1; 

// slice method
// let arr2 = arr1.slice(0);

// concatination
// let arr2 = [].concat(arr1);

// new way
// spread operator
let arr2 = [...arr1];

arr1.push("item3");
console.log(arr1 === arr2);
console.log(arr1);
console.log(arr2);