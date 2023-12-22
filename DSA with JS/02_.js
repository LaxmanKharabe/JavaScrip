/* Given an integer n, return a counter function. This counter function initially 
returns n and then returns 1 more than the previous value every subsequent 
time it is called (n, n + 1, n + 2, etc). */ 

//Best example for clouser//

var createCounter = function(n) {
    return function() {
        return n++;
    };
};

// Create a counter starting from 10
const counter = createCounter(-2);

// Example usage:
console.log(counter()); // Output: 10
console.log(counter()); // Output: 11
console.log(counter()); // Output: 12

function crCounter(n) {
// function crCounter() {
//     var n = 30;
    return function(){
        return n++;
    };
};

const count = crCounter(10);
console.log(count());
console.log(count());
console.log(count());