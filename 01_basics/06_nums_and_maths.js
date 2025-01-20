const score = 100  //Implicit data type

const balance = new Number(400) //Explicit
console.log(typeof balance)

// Prototype functions

const anotherNumber = 600.0644584
console.log(anotherNumber.toFixed(2)) //you can decide how many digits you want after a decimal

// tostring()

console.log(anotherNumber.toString().length); // It converts into string a number and further we can use string methods in it..

//Precision()

const number = 20.002
console.log(number.toPrecision(4)); //Argument must betwee 1-100;

const sum = 10000000
console.log(sum.toLocaleString('en')); // By default - American style

// +++++++++++++++ MATHS ++++++++++++++++++

console.log(Math.abs(-3)); //Converts negative numbers into positive
console.log(Math.round(3.2)) //Give roundoff value of dcimals
console.log(Math.max(1, 2, 3, 4, 0, 100)); //Give max value of an array


Math.random()   //tricks -----
Math.random()*10
Math.random()*10 + 1 // This assures that values are atleast 1 & more than 1
console.log((Math.random()*10) + 1)

const min = 10
const max = 100

console.log(Math.floor(Math.random()* max - min + 1)+min)




