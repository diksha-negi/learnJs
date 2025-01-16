//singleton
//Object.create

//object literals

const mySum = Symbol("key1")
const JsUser = {
    name : "hitesh",
    "full Name" : "hitesh choudhary",
    [mySum]: "mykey1",
    age : 18,
    location : "jaipur",
    email : "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
//console.log(JsUser.full Name) //=>dot notation aise nin kregi kaam
// console.log(JsUser["full Name"])
// console.log(JsUser.mySum)
// console.log(typeof JsUser.mySum)
// console.log(JsUser[mySum])

JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());