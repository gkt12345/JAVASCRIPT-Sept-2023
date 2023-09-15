// object inside array

const users = [
    {id : 1, firstName : "Gaurav", gender : "male"},
    {id : 2, firstName : "Saurav", gender : "male"},
    {id : 3, firstName : "Aarav", gender : "male"},
]

// console.log(users);

for(let user of users){
    // console.log(user.firstName);
}


// =================================================================

// nested destructuring

// const[user1, user2, user3] = users;
// console.log(user1);
// console.log(user1);

    // 1st          2nd     3rd
const[{firstName}, {id}, {gender}] = users;
console.log(firstName);
console.log(gender);
console.log(id);

