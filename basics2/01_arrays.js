// array
// JS array copy operation creates Shallow copy rather than Deep copy.
// Shallow copy -> In this it shares/ points to the same reference.
// Deep Copy -> In this it does not points to the same reference.

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "ironman"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()         // 7 popped out

// myArr.unshift(9)      // add 9 in start of array
// myArr.shift()         // remove array element from start.

console.log(myArr.includes(9));     // checks for 9 in the array if it includes return true otherwise false.
// console.log(myArr.indexOf(3));      // 2  [1,2,3,4,5,6]

const newArr = myArr.join()   // join method bind the array and convert it into string

console.log(myArr);
console.log( newArr);
console.log(typeof newArr);     // string


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) 

console.log(myn1);
console.log("B ", myArr);   // [0,1,2,3,4,5,6]


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);   // [0,4,5,6]
console.log(myn2);

/*
    In slice last index is excluded and in splice last index is included in result 
    Slice do not change original array, but splice change original array(try running the above code and you will see difference)

*/
