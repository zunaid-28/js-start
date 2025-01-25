const marvel_heros = ['Spiderman', 'Thor' , 'CA']
const dc_heros = ['Superman', 'Batman', 'Flash']

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);  // When we use push method then it push the complete array as one element in 1st array;
// i     0           1       2               3
//  [ 'Spiderman', 'Thor', 'CA', [ 'Superman', 'Batman', 'Flash' ] ]

//It takes the complete array as one element, its becoz array can take any element in it in javascript

//Concat() => It merges two Arrays and return as a new array;

const combine_heros = marvel_heros.concat(dc_heros);
console.log(combine_heros); 

// Spread operator => It spread out the array ;

const new_array = [...marvel_heros, ...dc_heros]
// console.log(new_array);

// Flat() method : => if there are nested arrays (arrays in array) then it spread and mix up them;


// Depth                          1      2               1     
const another_array = [1, 2, 3, [4, 5, [5,9 ],], 5, 6, [6, 7, [8, 7]]]
console.log(another_array.flat(Infinity));  //We can use infinity

console.log(Array.isArray(another_array)) // Truue or false
console.log(Array.from('16267')); // it Converts strings into array , and give empty arrays is a case of Number;

console.log(Array.from({Value: "zunaid"})); //interesting => Empty array;

//From method cant take more than one args


let score = 100
let score1 = 1000
let score2 = 200

console.log(Array.of(score, score1, score2)); 










