// Dates

let myDate = new Date()     //Here we are creating an object using the Date constructor, and this object inherits from Date.prototype, so it can access all prototype methods.
 
 console.log(myDate.toString());    //Returns a full, human-readable string representing the date with time and time zone.
 console.log(myDate.toDateString());   //Returns a simplified version of the date without the time.
 console.log(myDate.toLocaleString());      //Returns the date and time formatted according to your local settings
// console.log(typeof myDate);       // Date is object type in JS

// let myCreatedDate = new Date(2023, 0, 23)    // Month start with 0 in js
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  //January 23, 2023 at 05:03 AM
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));  // with Date.now() we get time in ms if we want in sec then divide with 1000

let newDate = new Date()
console.log(newDate);
console.log(newDate.toString());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})
