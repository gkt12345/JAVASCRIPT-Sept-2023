
const key1 ="objkey1";
const key2 ="objkey2";

const value1 ="myVal1";
const value2 ="myVal2";

// want this type of object dynimicly
// const obj = {
//     objkey1 : "myval1",
//     objkey2 : "myval2";
// }

// const obj = {        // not give correct result we want
//     key1 : value1,   // key1 : myval1
//     key2 : value2    // key2 : myval2
// }

const obj = {
    [key1] : value1,
    [key2] : value2
}

// console.log(obj);


// =========================================================================

// spread operator in objects:

const obj1 = {
    key1 : "val1",
    key2 : "val2"
}

const obj2 = {
    key3 : "val3",
    key4 : "val4"
}

const newObj = {...obj1, ...obj2, key5:"val5"};

console.log(newObj);



// ===========================================================================

// Object destructuring
const band = {
    bandName : "led zepling",
    famousSong : "stairway to heaven"
}

// one way
// const bandName = band.bandName;
// const famousSong = band.famousSong;

// 2nd way
// const {bandName, famousSong} = band;
// console.log(bandName, famousSong);


// if you want to give you own name to these variable
const {bandName:bar1, famousSong:bar2} = band;
// console.log(bandName, famousSong);      // isse nahi hoga
console.log(bar1, bar2);








