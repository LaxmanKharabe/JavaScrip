/*
filter():-
The filter() method in JavaScript is used to create a new array containing only 
the elements that satisfy a specified condition. It doesn't modify the original array; 
instead, it returns a new array containing the elements that pass the provided function's test.
Syntax: 
const newArray = originalArray.filter(callback(element[, index[, array]])[, thisArg]);
*/
// Example 1:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray1 = numbers.filter(num=> num > 4);
let newArray2 = numbers.filter(num=> num % 2 !== 0);
console.log(newArray1);
// console.log(newArray2);


// Example 2
const numArray = [45, 4, 9, 16, 25];
const over18 = numArray.filter(myFunction);

function myFunction(value, index, array) {
    // console.log(value);
    // console.log(index);
    // console.log(array);
  return value > 18;
}
console.log(over18);