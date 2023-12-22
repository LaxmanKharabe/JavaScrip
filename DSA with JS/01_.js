// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

var createHelloWorld = () => () => 'Hrllo World';
// console.log(createHelloWorld());
const f1 = createHelloWorld();
console.log(f1());

