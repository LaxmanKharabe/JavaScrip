// Write a code for converting an integer number to roman number
function integerToRoman(num) {
    if (num <= 0 || num > 10) {
        return "Invalid number. Please enter a number between 1 and 10.";
    }
    const romanNumerals = [
        { numValue: 10, numeral: "X" },
        { numValue: 9, numeral: "IX" },
        { numValue: 5, numeral: "V" },
        { numValue: 4, numeral: "IV" },
        { numValue: 1, numeral: "I" }
    ];
    let result = "";

    for (let pos=0; pos<romanNumerals.length; ++pos){
        while(num>=romanNumerals[pos].numValue){
            result += romanNumerals[pos].numeral;
            num -= romanNumerals[pos].numValue;
        }
    }
    

    return result;
}

const number = 10;
const romanNumber = integerToRoman(number);
console.log(`The Roman numeral for ${number} is: ${romanNumber}`);
