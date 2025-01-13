/*BASICS COMPARISONS WE ALL KNOW! */
// console.log( 2 > 1);
// console.log(2==1)
// console.log(2>=1)
// console.log(2!=1)
// console.log(2<=1)
// console.log(2 > 1)

// console.log("2" > 1);
// console.log("02" > 1);

// Above code gives predictible outputs, but this is Not a good practice to compare two different data types and typescript doesn't allow this.

console.log(null == 0); // => False
console.log(null > 0);  // => False
console.log(null >= 0); // => True
// In last comparison (null >= 0) >= this check converts null into zero

console.log("Undefined");

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined < 0);

// We should avoid these type of comparison(different data types)

// (===) Strict check, Check equality as well as data type 

console.log("Strict checking..");

console.log(2 === "2"); // => False


