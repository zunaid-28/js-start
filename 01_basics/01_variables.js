const accountId = 145522
let EmailAccount = "zunaid@google.com"
var AccountPassword = "1235"
accountCity = "delhi"

// accountId = 22 this is not allowed bcoz, accountId is a constant and we can not change the constant values
console.log(accountId)

EmailAccount = "monu@gmail.com"
AccountPassword ="212112"
accountCity = "Mumbai"

/*var has a scope problem , block as well as functional, so we should use let for variables*/ 
console.table({accountId, EmailAccount, AccountPassword, accountCity})