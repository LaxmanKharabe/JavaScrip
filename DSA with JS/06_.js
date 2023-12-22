function intToRoman(num) {
    if (num <= 0 || num > 50) {
        return "Invalid input. Please enter a number between 1 and 9.";
    }

    const romanNumerals = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X",]
    ];

    return romanNumerals[0][num];
}

// Example usage:
console.log(intToRoman(15)); // Output: I
console.log(intToRoman(5)); // Output: V
console.log(intToRoman(10)); // Output: IX
