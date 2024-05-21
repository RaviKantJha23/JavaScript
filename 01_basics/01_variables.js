const accountId = 1445533
let accountEmail = "ravi@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "rk@google.com"
accountPassword = "12121"
accountCity = "Delhi"

console.log(accountId);


/*
Prefer no to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail, accountPassword, accountCity, accountState]);