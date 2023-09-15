// declare of string
let myName = "Gaurav";
// print a letter of string
console.log(myName[2]); // print 3rd lettter og string 0 base indexing

// length of string
console.log("length: " + myName.length);

// ===============================================================

// trim() : 
// use to remove space of start and end of the string
// Note: trim changes in new string not in orignal string
// "    Gaurav    " : "Gaurav"

myName = "     Gaurav     ";
// console.log(myName.trim()); // not work 
// let newString = myName.trim();  // new string for print 
myName = myName.trim();
console.log("trim: " + myName);


//==================================================================

// toUpperCase()
// changes all letter in capital 
// myName.toUpperCase();  // not work because it also cange in new string
myName = myName.toUpperCase();
console.log("toUpperCase: " + myName); 

// toLowerCase()
let newName = myName.toLowerCase();
console.log("toLowerCase: " + newName);

// ===================================================================

// slice()
// slice method take two argument : slice(start end);
let firstName = "harshit";
firstName = firstName.slice(0, 4); // first-0 base, 2nd:1 base
console.log("Slice Method: " + firstName);


// =============================================================
// String concatenation

let string1 = "Gaurav";
let string2 = "Trivedi";
let fullName = string1 + " " + string2;

console.log("String Concatenation" + fullName);


// ================================================================ 

// template String

let myName1 = "Gaurav";
let age = 30;
let aboutMe = `My name is ${myName1} ans my age is ${age}.`;

console.log(aboutMe);




