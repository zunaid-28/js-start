// Date is an object in javascript
// JavaScript stores dates as number of milliseconds since January 01, 1970
// New temporal ane k baad date ek static object ki trah use hone lgega


// Creating an instance of a date

let myDate = new Date()
// console.log(myDate); // => Not readable
// console.log(myDate.toString()); // => More readable than previous one
// console.log(myDate.toDateString()); //=> 100% readable
// console.log(myDate.toLocaleDateString('en-IN')); //=>
// console.log(myDate.toTimeString());


// We can create a date by passing it in date arguments

// let MyCreatedDate = new Date(2025, 0, 1, 5, 5)
// // => Month as an array starts with 0;

let MyCreatedDate = new Date("10-11-2025")
// In a string we can give a date as DD-MM-YYYY OR YYYY-MM-DD fORMAT
console.log(MyCreatedDate.toString());


// Date.now => Return the total milliseconds since 1 jan,1970 to the present time

let MyTimeStamp =  Date.now()
console.log(MyTimeStamp)
// Further we would need to compare various dates if we make a website where dates are more crucial or we need to compare the dates so we can directly compare dates in this milliseconds format;
console.log(MyCreatedDate.getTime()); //=> Now we get the same milliseconds format of My createdDate 

// if we want to convert those ms into seconds

console.log(Date.now()/1000) // => Now this format can occur a Problem which is it can give the seconds into decimal so to cutoff this problem(Which causes problems while comparing two or more dates)we use floor or round function of math object like this:

console.log(Math.round(Date.now()/1000));


// Can get m, dt, dy, y individually
let newDate = new Date();
// console.log(newDate.getMonth()+1);


//Using LocaleString method we can customize our date and time format by using object in the parameters

newDate.toLocaleString('default',{
    weekday : "long"
})