/*
Given an integer array arr and a mapping function fn, return a new array with a 
transformation applied to each element.
The returned array should be created such that returnedArray[i] = fn(arr[i], i).
Please solve it without the built-in Array.map method.
*/

const arr = [1, 2, 3];
const plusOne = (n) => n + 1;

var map = function(arr, fn) {
    const mappedArray = [];

    for (let i = 0; i < arr.length; i++) {
        mappedArray[i] = fn(arr[i]);
    }

    return mappedArray;
};

// Example usage:
const result = map(arr, plusOne);
console.log(result); // Output: [2, 3, 4]

