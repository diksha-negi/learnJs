const accountId= 1234
let accountEmail = "diksha@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"
let accountState
// accountId = 2 //not allowed

console.log(accountId);
accountEmail ="hi@gmail.com"
accountPassword = "2122"
accountCity = "Bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*prefer not to use var because 
of issues in block scope and functional scope*/