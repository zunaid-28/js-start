// ARRAYS are objects, containing mix up of various data types, array copy operations created shallow copies;

//1st way to declare array:

const myArr = [1, 2, 3, 4, 5]

//2nd way to declare an array:
const myArr1 = new Array(1, 'momu', null)

//Traversing of array:


    // console.log(myArr1);
    


//Methods in array:

// myArr.push("zunaid") // Push element at the end of array
// myArr.pop() // Removes the last element in an array;
// myArr.unshift("sameer") //insert element at the start of the array
// myArr.shift() // Removes the first element in the array


// console.log(myArr.includes(1))

// indexof() => we can find index of any item

// const myn = myArr.join() // It converts complete arry into string

// console.log(typeof myn);

//slice() !!Interview masala!! key difference bw slice and splice

//index        0   1   2   3   4
const myn1 = [20, 40, 60, 70, 80]
console.log(myn1.slice(1,2)); //isme range include nhi hoti
console.log('A', myn1); //Slice deep copy bnata he, islye main arrey pr koi effect ni pda;

console.log(myn1.splice(0,2)); // 1 prmtr = Start ind, 2 prmtr = deleteCount , further we can insert elemtns by passimg them in splice
console.log ( 'B', myn1); // change modified the main array






