/*
map():- [It returns a new array.]
Use map() when we want to create a new array by applying a transformation 
or operation to each element in the original array.

The map() method creates a new array by performing a function on each array element.
The map() method does not execute the function for array elements without values.
The map() method does not change the original array.
*/

const array1 = [45, 40, 90, 16, 25];
const array2 = array1.map(myFunction);

function myFunction(value, index, array) {
//   console.log(value);
//   console.log(index);
//   console.log(array);
console.log(`Array elements: ${value} || Array element index: ${index} || Complete array: ${array}`)
}

const newArray = array1.map(num=> num*2);
console.log(`New array after multiplied every element by 2 is: ${newArray}`);
console.log(`Original array: ${array1}`);