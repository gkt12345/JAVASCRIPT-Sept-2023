// if else

let age = 20;

if(age>18){
    console.log("you can play pubg");
}else{
    console.log("you can play mario");
}

// =============================================
// ternary operator

age = 19;
let drink = age >= 18 ? "you can drink" : "do not drink";

console.log(drink);

// ==============================================
// & and or operator

let firstName = "marshit";
let age1 = 22;

if(firstName[0] == "M" && age>18){
    console.log("your Name start with M and abobe 18");
}else{
    console.log("inside else");
}

if(firstName[0] || "M" && age>18){
    console.log("your Name start with M and abobe 18");
}else{
    console.log("inside else");
}


// ====================================================
// nested if else

let winningNumber = 19;
// let userGuess = +prompt("Guess a number");

// if(userGuess == winningNumber){
//     console.log("Your guess is right");
// }else{
//     if(userGuess > winningNumber)
//         console.log("You guess too hight !!!");
//     else
//         console.log("you guess too low !!!");
// }


// =====================================================
// switch statement

let day = 3;

switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");                   
}











