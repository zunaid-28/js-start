let name = "Zunaid"
let age = 19

//Outdated TARIKA
// console.log(name + 19);

//Modern Tarika / String interpolation / More readable ,reliable
// console.log(`My name is ${name} and my age is ${age}`);

// One more way to declare strings

const gameName = new String('zunaidfss') // Strings created as objects using the string() constructor;

console.log(gameName);
console.log(gameName.__proto__);

//There are many methods that are avaialable in js for strings 

console.log(gameName.toUpperCase());

const url = "https://www.zunaid.com/zunaid%20chauhan"

console.log(url.replace("%20", " "));

// Instead of using variable we can use string itself with any method like given below: 
console.log("dog".replace('o', 'a'));

//Eval() Method: use to evaluate the string if it had any operations, it works differently with primitive and object  strings

const stringName = "2+2"  //Primitive string

console.log(eval(stringName)); // =>4

const string2 = new String(stringName)  //Object string

console.log( eval(string2));  // => '2+2'
console.log(eval(string2.valueOf()));  // => 4


const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // => "string"
console.log(typeof strPrim2); //=> "string"
console.log(strPrim3); //=> "string"
console.log(typeof strObj);  // => "object"


//Concat();


const s1 = "I"
const s2 = "am"
const s3 = "the best"

console.log(s1.concat(' ', s2,' ', s3));

// replaceall()

const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replaceAll('dog', 'cat')); // jahan jahan dog hai puri string me wo cat se replace hojayga


const name1 = "    zunaid     chauhan  "

console.log(name1.trim());

// includes()

let Email = new String("zunaid.gmail.com")
console.log(Email.includes('@gmail'));
