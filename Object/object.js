// objects:  reference type

// Array are good but not sufficient
// for real world data
// object store key value pair
// object don't have index
// console.log(typeof Object); // return function

// Creation:-

const person = {name:"Gaurav", age:30};
console.log(typeof person);
console.log(person);



// how to access data from object
console.log(person.name);

// add value in object:
person.address = "delhi";
person.hobbies = ["singing", "cricket", "music"];

console.log(person.hobbies[1]);


// ===================================================

// itreation in objects:

// print only key from person
for(let key in person)
{
    // console.log(key); 
}

// print value from person
for(let key in person)
{
    // console.log(person[key]); 
}

// print key value pair in person
for(let key in person)
{
    console.log(key, person[key]); 
}
























