
const accountId = 144553
let accountEmail = "rakshit@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"   // It is Possible to write without keyword but not a good approach.
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"  

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
