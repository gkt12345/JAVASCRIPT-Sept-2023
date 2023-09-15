// Data Types:
// string, number, boolean, null, undefined, bigInt, symbol

// typesof operator for find data types
let myName = "Gaurav";
let age = 30;
let marrige = true;

console.log(typeof myName);
console.log(typeof age);
console.log(typeof marrige);

// ============================================================

// convert number to string
console.log(typeof (age+"")); 

// convert string to number
let mystr = +"34"; // use + operator befor string
console.log(typeof mystr); 

// 2nd way to do this
let num = 29;

// convert num to string
num = String(num);
console.log(typeof num);

// convert string to number
num = Number(num);
console.log(typeof num);


// ============================================================

// undefined

// var str1;
let str1;
// const str1;  // with const we have to declare any value
console.log(str1);


// =============================================================
// null

var myVariable = null;
console.log(myVariable);
myVariable = "Gaurav";
console.log(myVariable, typeof myVariable);

// ===============================================================
// bigInt
// declaration two types
let myNum = BigInt(12);
let myNum2 = 123n;
console.log(myNum);
console.log(myNum2);
console.log(myNum + myNum2);



// =============================================================
// booleans & comparison operator

let num1 = 5;
let num2 = 7;

console.log(num1 > num2); // return false

// == vs ===
num1 = "8";
num2 = 8;
console.log(num1 == num2);  // true == compare only value
console.log(num1 === num2);  // false === compare value as well as datatypes 

// != vs !==
console.log(num1 != num2);  // false != compare only value
console.log(num1 !== num2);  // true !== compare value as well as datatypes 








