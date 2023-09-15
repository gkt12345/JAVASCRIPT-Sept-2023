// array destructuring

const myArray = ["val1", "val2"];

// first way:
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];

// 2nd way:
// let [myvar1, myvar2] = myArray;
// console.log(myvar1, myvar2);


// =====================================
// thodi aur kalakari

myArray.push("val3");
myArray.push("val4");

// reamain elemnt spread in newArry
let [myvar1, myvar2, ...newArry] = myArray;

console.log(myvar1, myvar2);
console.log(newArry);