// /* 
// Write a function expect that helps developers test their code. 
// It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other.
// If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. 
// If they are equal, it should throw an error "Equal".    */

function expect(val) {
    const throwError = (errorStr) => {throw new Error(errorStr)};
    return{
        toBe: (otherVal) => {
            if(val === otherVal){
                return true
            }else{
                throwError("Not Equal");
            }
        },
        notToBe: (otherVal) => {
            if(val !== otherVal){
                return true
            }else{
                throwError("Equal")
            }
        }
    }
};
const result = () => expect(5).toBe(5);
const result1 = () => expect(5).notToBe(4);
console.log(result());
console.log(result1());


// const expect = (val) => {
//     const throwError = (errorStr) => {throw new Error(errorStr)};
    
//     return {
//         toBe:    (val2) => val2 === val || throwError('Not Equal'),
//         notToBe: (val2) => val2 !== val || throwError('Equal'),
//     };
// };
// console.log(expect(5).toBe(5)); // true
