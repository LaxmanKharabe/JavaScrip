function romanToInteger(roman) {
    const romanNumerals = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let result = 0;

    for(let i=0; i<roman.length; i++){    
        let currVal = romanNumerals[roman[i]];
        let nextVal = romanNumerals[roman[i+1]];

        if(currVal<nextVal){
            result+=nextVal-currVal;
            i++
        }else{
            result+=currVal;
        }
    }
    return result;
}

// Example usage:
const roVal = 'LXII';
const finalVal = romanToInteger(roVal.toUpperCase());
console.log(`The integer value of ${roVal} is: ${finalVal}`);
