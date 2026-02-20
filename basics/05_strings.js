const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // This is String Interpolation
// String interpolation is a way to insert variables or expressions directly inside a string instead of manually concatenating them.

const gameName = new String('hitesh-hc-com')  // String object created it is not a primitive string
const gname = 'Rakshit'          // this is primitive string not a object

// console.log(typeof gameName)        // object
// console.log(typeof gname)           // string

console.log(gameName[0]);
console.log(gameName.__proto__);        // What is __proto__?
//                                          It's a reference to the prototype object from which gameName inherits methods and properties.
//                                          Since gameName is a String object, its __proto__ points to String.prototype.
//                                          This prototype contains all the string methods like:
//                                          toUpperCase()
//                                          slice()
//                                          includes()
//                                          charAt(), etc.

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(6));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)  // substring can also run with -ve value but treat it as 0 
console.log(newString);

const anotherString = gameName.slice(-8, 4)  // slice also take negative values  (-8 from end.)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());  // trim removes the whitespaces from both end.... we also have trimStart() & trimEnd() read documentation from mdn.

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('rakshit'))

console.log(gameName.split('-'));
