// primitive data type
// number, string, bool, undefined, null, bigint etc
// primitive data types use stack memory thats why after asign the value
// there is no relation between them.


let num1 = 6;
let num2 = num1;

console.log("Value of num 1", num1);
console.log("Value of num 2", num2);
num1++;
console.log("Value of num 1", num1);
console.log("Value of num 2", num2);


// =====================================================

// Refrance data type
// array, object
// Refrance type use heap memory thats why here assign address of that array
// not value, whenever change made by any varible it reflect on that address.

let arr1 = ["item1", "item2"];
let arr2 = arr1;

console.log("Value of arr 1", arr1);
console.log("Value of arr 2", arr2);
arr1.push("item3");
console.log("Value of arr 1", arr1);
console.log("Value of arr 2", arr2);






