/* String: The String object is used to represent and manipulate a sequence of characters. 
Creating strings: Strings can be created as primitives, from string literals, or as objects, using 
the String() constructor.
*/
const str1 = "A string primitive";
const str2 = 'Also a string primitive';
const str3 = `Yet another string primitive`;

const str4 = new String("A String object");

/* String Property: */
// length: Returns the length of the string.
let string1 = "My length is: ";
// console.log(`${string1} ${string1.length}`);

/* String Properties */

/* 1. at(): 
    Return the character of the given index in string. 
    It allows us to to provide positive and negative intergers.
    The provided index to this method should be valid otherwise it will reture the undefined.
*/
const string2 = "I'm the letter in given index: ";
// console.log(`${string2} ${string2.at(5)}`)
// console.log(`${string2} ${string2.at(-3)}`)
// console.log(`${string2} ${string2.at(100)}`) // undefined


/* charAt():
    It returns the character at the specified index as a string. 
    If the index is out of range, it returns empty string("").
    It does not allows negative intergers as index.
*/
const string3 = "letters";
// console.log(`${string3.charAt(3)}`)
// console.log(`${string3.charAt(-1)}`)
// console.log(`${string3.charAt(103)}`)

/* charCodeAt():
    It used to retrieve the Unicode value (integer code) of a character at a 
    specified index within a string. 
*/
const str = "Hello, World!";
console.log(str.charCodeAt(2));

/* concat():
    
*/
