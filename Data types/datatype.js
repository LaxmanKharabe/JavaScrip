// Primitive data type (number)
// 1. Number: Represents numeric values.
let age = 30;
let price = 19.99;
console.log(age, price);  

// 2. String: Represents textual data.
let name = "John";
let message = 'Hello, World!';
console.log(name, message);  

// 3. Boolean: Represents true or false values.
let isTrue = true;
let isFalse = false;
console.log(isTrue, isFalse); 

// 4. Null: Represents the absence of a value or an intentionally non-existent value.
let emptyValue = null;
console.log(emptyValue); 

// 5. Undefined: Represents a declared variable that has not been assigned a value.
let uninitialized;
console.log(uninitialized); // undefined

// 6. Symbol (ES6): Represents a unique and immutable value, often used as object property keys.
const uniqueKey1 = Symbol("123");
const uniqueKey2 = Symbol("123");
console.log(uniqueKey1, uniqueKey2);
// 7. BigInt: Represent arbitrarily large integers
    // Using BigInt literals:
    const bigIntValue1 = 1234567890123456789012345678901234567890n;
    // Using the BigInt() constructor:
    const bigIntValue2 = BigInt("1234567890123456789012345678901234567890");
console.log(bigIntValue1, bigIntValue2);

console.log("====================================================================================");

// Non-primitive data type (object)

// 1. Object: Objects are collections of key-value pairs, often used to represent structured data.
const person = { name: "John", age: 30 };
console.log(person);

// 2. Array: Arrays are ordered lists of values and are a type of object.
const colors = ["red", "green", "blue"];
console.log(colors);

// 3. Function: Functions are blocks of code that can be invoked and perform specific tasks.
function add(a, b) {
    return a + b;
  }
console.log(add(5,6));
  


