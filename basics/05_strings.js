const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)  // substring can also run with -ve value but treat it as 0 
console.log(newString);

const anotherString = gameName.slice(-8, 4)  // slice also take negative values
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());  // trim removes the whitespaces from both end.... we also have trimStart() & trimEnd() read documentation from mdn.

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));