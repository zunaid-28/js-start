const accountId = 145522
let EmailAccount = "zunaid@google.com"
var AccountPassword = "1235"

// Bina let aur var ke variable declare karna technically possible hai, par ye ek buri practice hai. Isse code unreliable aur bug-prone ban sakta hai. Hamesha let, const, ya var ka use karein taaki aapka code safer aur maintainable ho.
accountCity = "delhi"

// accountId = 22 this is not allowed bcoz, accountId is a constant and we can not change the constant values
console.log(accountId)

EmailAccount = "monu@gmail.com"
AccountPassword ="212112"
accountCity = "Mumbai"

/*var has a scope problem , block as well as functional, so we should use let for variables*/ 
console.table({accountId, EmailAccount, AccountPassword, accountCity})