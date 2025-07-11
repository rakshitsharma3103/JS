const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);       //new Number(100) creates a Number object, not a primitive.
//                               console.log(balance) will show it as Number {100}.

// console.log(balance.toString().length);     //3
// console.log(balance.toFixed(1));            // 100.0

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));    // 123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));      // ('en-IN' = English, India locale).

const money = 123456.78;
console.log(money.toLocaleString('en-IN', { style: 'currency', currency: 'INR' }));    // Output: ₹1,23,456.78 (Currency code is required with currency style.)


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());   //gives value between 0 and 1.
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // (max-min+1) is added to give range from min to max and 1 is added so that avoid 0 value case.
