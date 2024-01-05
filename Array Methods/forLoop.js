// const str = 'Hi this is for loop';

// for(let index=0; index<str.length; index++){
//     console.log(index); // Logs the index of every letter of string 
//     console.log(str[index]); // Logs the complete string; letter by letter
// }

const course = ["Javascript", "TypeScript", "React JS"];
const fees = [1500, 2500, 5000];
let result = '';

for (let index = 0; index < course.length; index++) {
    // result = `${result} ${course[index]} : ${fees[index]}\n`;
    result += `${course[index]} : ${fees[index]}\n`;
}
console.log(result);