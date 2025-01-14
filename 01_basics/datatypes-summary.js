//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
 
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


/*=================Stack & heap memory==================== */

// STACK Memory (Primitive Data types.)

let MyEmail = "zunaid@gmail.com"
let MyEmail2 = MyEmail

MyEmail2 = "monu@google.com" // Email updated in 2nd variable
 console.log(MyEmail2); // Email updated only in MyEmail2 bcz stack gives the copy to 2nd variable of 1st var..
 console.log(MyEmail); // 
 

 //Heap memory

 let MyDetails1 = {
      Name: "Monu",
      contact: 4772
 }

 let MyDetails2 = MyDetails1;
 MyDetails2.Name = "Zunaid"

 console.log(MyDetails1.Name); // here 1st and 2nd variable both point to same memory in heap(Reference of var) thats why change occurs in that reference. 
 
 
