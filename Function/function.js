// create function

function sayHappyBirthday(){
    console.log("Happy birthday to you .....");
}
// invoke function
sayHappyBirthday();

// ======================================================

function twoPlusFour(){
    return 2+4;
}
const returnedValue = twoPlusFour();
console.log(returnedValue);


// ========================================================
// reusable function

function sumTwoNum(num1, num2){
    return num1+num2;
}
const ans = sumTwoNum(2, 4);
console.log(ans);


// ===========================================================

// arrow functions

const arrowfun =()=> {
    console.log("Happy Birthday to you");
}
arrowfun();


const isEven =(number)=> number%2===0; 
console.log(isEven(6));


// ===========================================================

// functions expresion

const funExpresion = function() {
    console.log("Happy Birthday to you");
}
funExpresion();

















