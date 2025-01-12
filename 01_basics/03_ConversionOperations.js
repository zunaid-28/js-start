// DataTypes Conversion

let score = "33"
// Convert it into a number by Conversion
// console.log(typeof(score))

// Convert into number;
let ValueInNumber = Number(score)
// console.log(typeof ValueInNumber)

score = "33abc" //Not a pure number, so let's checkout how it get converts if we try to convert in a number

ValueInNumber = Number(score)
// console.log(typeof ValueInNumber); 
//Output shows it as a number

// console.log(ValueInNumber);
// 33abc => NaN (Not a Number) But Datatype(NaN) => number;
// datatype => showing Number

score = null
ValueInNumber = Number(score)
console.log(typeof ValueInNumber);

// It can converts null and undefined into number while we use conversion but will not show a numeric value as their output output => NaN, Type = Number

score = false
ValueInNumber = Number(score)
console.log(ValueInNumber);

let IsLoggedIn = "Zunaid";

let BooleanIsLoggedIn = Boolean(IsLoggedIn)
console.log(BooleanIsLoggedIn);

// 1 => True;
// Empty String ("") => False;
// "Zunaid" => true;

/* Conversion of numbers into string */
let n = 37
let stringN = String(n)
console.log(stringN);
console.log(typeof stringN);

// Datatype => String
// Output => 37









