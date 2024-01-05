// Procees of clouser
let counter =(n)=>()=> n++;

const result = counter(10);
console.log(result());
console.log(result());
console.log(result());