//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// Even though both symbols have the same description '123', each Symbol() call creates a unique and different value.
// Symbols are guaranteed to be unique, even if they have the same description.
console.log(id === anotherId);  // false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // defining array
let myObj = {                       // defining object
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof outsideTemp);
console.log(typeof anotherId);

//Learn the table from link -->

// https://262.ecma-international.org/5.1/#sec-11.4.3


//    +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive) & Heap (Non-Primitive)

let myYoutubename = "rs@google.com"

let anotherName = myYoutubename
anotherName = "chaiaurcode"

console.log(myYoutubename)
console.log(anotherName)

let userOne = {                     // this will save in Heap
    email : "rs31@google.com",
    upi : "rs@oksbi"
}

let userTwo = userOne  // both have same object reference in heap, if anyone is change other also changed.

userTwo.email = "rakshit@google.com"

console.log(userOne.email);
console.log(userTwo.email);