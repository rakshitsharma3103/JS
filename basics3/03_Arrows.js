const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);    // here this keyword is used for current context reference. In this case, this refers to the user object, so this.username works.
        console.log(this);          // Here "this" gives current context/values.
    }

}

 user.welcomeMessage()
// user.username = "sam"        // here we change the context to "sam"
// user.welcomeMessage()        // sam, welcome to website

// console.log(this);              // Here "this" gives empty object as we are in node environment, but in browser it gives global "Window" object. 

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);      //In this case this.username prints "undefined", so from this we know that this work with object and not in function like this.
                                        // this in a regular function call (chai()) refers to the "global object" (or undefined in strict mode). So in regular function we cannot use this keyword
                                        // this.username looks for a property on the global object — not local variables. 
//  }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);         // undefined.
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);      // in Arrow function also this keyword gives undefined value
}


// chai()

// const addTwo = (num1, num2) => {  // Simple arrow function
//     return num1 + num2            // Explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2      // Implicit return method

// const addTwo = (num1, num2) => ( num1 + num2 )   // Agar ham curly bracket use krte h to return keyword likhna padega but agar paranthesis likhe h to return keyword nhi likhna

const addTwo = (num1, num2) => ({username: "hitesh"})  // here to "return the object" keep in mind to wrap it with "paranthesis".


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()