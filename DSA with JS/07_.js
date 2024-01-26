//     let convertNumb = (val) =>{
//     let numbPairs = [
//         {romanNumber : 'M', numValue: 1000},
//         {romanNumber:'CM', numValue: 900},
//         {romanNumber:'D', numValue : 500},
//         {romanNumber:'CD', numValue : 400},
//         {romanNumber:'C', numValue : 100},
//         {romanNumber:'XC', numValue: 90},
//         {romanNumber:'L', numValue: 50},
//         {romanNumber:'XL', numValue: 40},
//         {romanNumber:'X', numValue: 10},
//         {romanNumber:'IX', numValue: 9},
//         {romanNumber:'V', numValue: 5},
//         {romanNumber:'IV', numValue: 4},
//         {romanNumber:'I', numValue: 1}
//     ];
//     let result = '';
//     for(let pos=0; pos<numbPairs.length; ++pos){
//         while(val>=numbPairs[pos].numValue){
//             result+=numbPairs[pos].romanNumber;
//             console.log(result);
//             val-= numbPairs[pos].numValue;
//             console.log(val);
//         }
//     }
//     return result;
// }
// console.log(convertNumb(10));
// ==================================================================

let romanToNumber = (roman) => {
    const romanPairs = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for(let i=0; i<roman.length; i++){
        let currChar = roman[i];
        let nextChar = roman[i+1];
        // console.log(romanPairs[currChar], romanPairs[nextChar])
        
        if(romanPairs[currChar] < romanPairs[nextChar]){
            result-=romanPairs[currChar];
        }else{
            result+=romanPairs[currChar];
        }
    }
    return result;
}

console.log(romanToNumber('IX'));
