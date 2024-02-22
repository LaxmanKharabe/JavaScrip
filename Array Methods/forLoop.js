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
// console.log(result);


for (let ind = 0; ind < course.length; ind++){
    // console.log(course[ind])
}
course.forEach((element, index, arra)=>{
    // console.log(index)
})

let arrayCol = [
    {name: 'Laxman', height: 150},
    {name: 'Amol', height: 160},
    {name: 'Shankar', height: 170},
    {name: 'Vijay', height: 170},
    {name: 'Prakash', height: 170}
]

let personData = arrayCol.filter(filByHeight=>filByHeight.height>160);
// console.log(personData.map(allItems=>allItems.name));


// const arraY = new Array(5);
// // arraY.map((ele, ind)=>console.log(ind));
// arraY.push("Laxman");
// arraY.push("Laxman");
// arraY.push("Laxman");
// arraY.push("Laxman");
// arraY.push("Laxman");
// arraY.push("Laxman");
// arraY.push("AMol");
// for (let Index = 0; Index < arraY.length; Index++) {
//     console.log(arraY[Index]);
// }
const arraY = ["Laxman", 10, "sdfsaf"]
const newArray = ["abc", "124",...arraY]
console.log();
for (let Index = 0; Index < arraY.length; Index++) {
    // console.log(arraY[Index]);
}

const lastItems = arraY.pop();

console.log(newArray);
console.log(lastItems);
console.log(arraY);