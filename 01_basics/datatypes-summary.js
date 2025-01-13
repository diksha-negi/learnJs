// Primitive
//7 types: String, number, boolean, null, undefined, symbol, bigint

//Reference (Non primitive)
// Array, Objects, Functions

//js is dynamically typed
// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123');
// const anotherId = Symbol('123');
// console.log(id === anotherId);

//const bigNumber = 34565435766543656743n

//Array, Objects, Functions

// const heros = ["shaktiman", "nagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }
// const myFunction = function(){
//     console.log("Hello World");
// }
// console.log(typeof bigint)
// console.log(typeof myFunction)
// console.log(typeof heros);

//*************************Memory Management*********************************************** */

//Stack (primitive), Heap(non-primitive)

// let myYoutubename = "hiteshchoudharydotcom"
// let anothername = myYoutubename
// anothername = "chaiaurcode"
// myYoutubename = anothername
// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);