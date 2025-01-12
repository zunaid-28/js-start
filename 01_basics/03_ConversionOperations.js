// DataTypes Conversion

let score = "33"
// Convert it into a number by Conversion
// console.log(typeof(score))

// Convert into number;
let ValueInNumber = Number(score)
// console.log(typeof ValueInNumber)

score = "33abc" //Not a pure number, so let's checkout how it get converts if we try to convert in a number

ValueInNumber = Number(score)
// console.log(typeof ValueInNumber); Type => Number

// console.log(ValueInNumber);
// 33abc => NaN (Not a Number), 
// But Datatype(NaN) => number;

score = null
ValueInNumber = Number(score)
// console.log(typeof ValueInNumber);

// It can converts null and undefined into number while we use conversion but will not show a numeric value as their output output => NaN, Type = Number

score = false
ValueInNumber = Number(score)
// console.log(ValueInNumber);

let IsLoggedIn = "Zunaid";

let BooleanIsLoggedIn = Boolean(IsLoggedIn)
// console.log(BooleanIsLoggedIn);

// 1 => True;
// Empty String ("") => False;
// "Zunaid" => true;

/* Conversion of numbers into string */
let n = 37
let stringN = String(n)
// console.log(stringN);
// console.log(typeof stringN);

// Datatype => String
// Output => 37


// **********************Operations***********************
// Normal Operations 
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3) //Power
// console.log(2/2)
// console.log(2%3)

let str1 = "Zunaid"
let str2 = " Chauhan"

let str3 = str1 + str2 // Merging two strings
// console.log(str3);

//Observe the Outputs
// console.log(1 + "2") => 12
// console.log("1" + 2);  => 12
// console.log("1" +2 +2); => 122
// console.log( 1 +2 + "2"); => 32
 
/*
Jab string number left me ho to aage k number conconate hojate he, or string number right me ho toh left numbers add hote he then string append hojati h
*/

let a = "1" + 2 + 2
console.log(typeof a);
console.log(a);

a = 1 + 2 +"2"
console.log(typeof a);


//Increment and Decrement operators
let x = 10
let y = 10
console.log(++x);
console.log(y++);

// ALHAMDULILLAH DONE












