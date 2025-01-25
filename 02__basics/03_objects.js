//Singleton => only one instance
// Object.create

//Object literals;
 // Object is working with Key: Value principle and take key as an string

 let mySym = Symbol("mykey")
const jsUser = {
   name : "zunaid",
   "Full name" : "Zunaid Chauhan",  //Special case we cant access it using dot operator(ager space nhi ho to)
   age : 18,
   email : "zunaid@gmail.com",
   city: "Bulandshaher",
   isLoggedIn : false,
   LoginDays : ["Monday", "Saturday"],

   //Way to initialize symbol in object
   [mySym] : "key"
}

//Ways to access objects
// -> 1
console.log(jsUser.name);

// -> 2 More better way!
// console.log(jsUser."Full name"); //This is not allowed
console.log(jsUser["Full name"]); 

console.log(typeof jsUser.mySym); //Value to theek h pr abhi ye ek string k form me h not in symbol

console.log(typeof jsUser[mySym]); // It shows typeof mysym string bcz the value in it is a string type

//Overwrite

jsUser.age = 19;
console.log(jsUser.age);

// Object.freeze(jsUser)  //It freeze() the object to overwrite
jsUser.age = 20;
console.log(jsUser.age);

jsUser.Greeting = function(){
   console.log("Hello Js user"); 
}

jsUser.GreetingTwo = function(){
   console.log(`Hello JS user, ${this.name}`);
   
}

console.log(jsUser.Greeting) // =>Function Anonymous
console.log(jsUser.GreetingTwo());


