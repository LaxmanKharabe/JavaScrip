/*
forEach():-
Use "forEach" when you want to perform an action for each element in an array, 
but you don't need to create a new array based on the results.
The forEach() method calls a function (a callback function) once for each array element.
*/

// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);
// function myFunction(value, index, array) {
//   txt = txt + value + " ";
//   return txt;
// }
// console.log(txt);

const myArray = ['apple', 'banana', 'orange'];

myArray.forEach((element, index, arra) => {
console.log(arra);
});

const newArray = myArray.map(addItems=> {
    return addItems + 's';
})
console.log(newArray);


