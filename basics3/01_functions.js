
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){    // If we write username = "sam" it will never be undefined 
    if(!username){                              // Can also written as if(username === undefined) {}
        console.log("PLease enter a username");
        return                                  // here return used so that if we enter in "if" block then compiler return from here don't go ahead in function
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))  // if argument hitesh is passed then it will overwrite sam in function parameter.
// console.log(loginUserMessage())        // As there is no argument passed in this function, so this gives undefined to the function parameter, but as we mentioned username as sam in function argument so it will not be undefined.


function calculateCartPrice(...num1){    // to get multiple parameters we can use rest operator here (...num1)
    return num1                         // return an array [200, 400, 500, 2000]
}

function calculateCartPrice(val1, val2, ...num1){    // here ...num1 get all the remaining value which are not assigned by val1, val2. 
    return num1                                      // return an array [500, 2000]
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)       // here we pass an object to function.

handleObject({          // This is how we can pass object directly
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));