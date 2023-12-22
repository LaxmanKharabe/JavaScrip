/* 
Write a function createCounter. It should accept an initial integer init. 
It should return an object with three functions.
The three functions are:
1) increment() increases the current value by 1 and then returns it.
2) decrement() reduces the current value by 1 and then returns it.
3) reset() sets the current value to init and then returns it.
*/

// var createCounter = (init) =>{
//     let restVal = init;
//     return{
//         increment : () => {
//             restVal++;
//             return restVal;
//         },
//         reset : () => {
//             restVal = init
//             return restVal;
//         },
//         decrement : () => {
//             restVal --;
//             return restVal;
//         }
//     }
// }
// // Create a single counter instance
// const counter = createCounter(5);
// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.decrement());


var createCounter = (init) =>{
    let restVal = init;
    return{
        increment : () => ++restVal,
        reset : () => restVal = init,
        decrement : () => --restVal
    }
}
const counter = createCounter(5);
counter.increment();
counter.reset();
counter.decrement();