// Immediately Invoked Function Expressions (IIFE)
// Syntax of iife "()()" for learning purpose, first parenthesis is for function defination and 2nd parenthesis is for function call. 

// IIFE is used so that we can remove the issue of global variable pollution as sometime global variable with similar names as passed in function create problem.

(function chai(){
    // "named IIFE"
    console.log(`DB CONNECTED`);
})();                               // this semicolon is important to use otherwise code after this will not run properly.

( (name) => {                       // iife implemented using arrow function
    console.log(`DB CONNECTED TWO ${name}`);  // backticks are used to implement string interpolation in JavaScript.
} )('hitesh')

// take care of semicolon while writting 2 iife's together.