
const accountId = 144553
let accountEmail = "rakshit@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"   // It is Possible to write without keyword but not a good approach.JavaScript will still allow it by making it a global variable, but it can lead to bugs and confusion.
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"  

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope.

var is not block-scoped, so it can leak outside {} blocks.
let and const are block-scoped, which is safer.
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
