// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true
// console.log("2" > 0); // ">" operator convert the string into number. so that is why O/P will be true.
// console.log("2" < 0); // ">" operator convert the string into number. so that is why O/P will be false.
// console.log(null == 0); // "==" equality check operator does not convert null in number so that is why it will print false 
// console.log(null === 0); // "===" equality check operator does not convert null in number so that is why it will print false 
// console.log(null > 0); // greater than ">" operator convert null into number and treat it as zero [0]. So that is why it prints false.
// console.log(null >= 0); // greater than or equal to ">="  operator convert null into number and treat it as zero [0]. So that is why it prints true.
// console.log(null < 0); // Less than "<" operator convert null into number and treat it as zero [0]. So that is why it prints false.
// console.log(null <= 0); // greater than or equal to "<=" operator convert null into number and treat it as zero [0]. So that is why it prints true.
// console.log(undefined == 0); // undefined will not be converted into number so it will be false.
// console.log(undefined > 0); // undefined will not be converted into number so it will be false
// console.log(undefined < 0); // undefined will not be converted into number so it will be false
// console.log(typeof(1>"2"))// type will be boolean.
console.log("2" > false); // "2" will be convertred into common data type 2 will be number and false is equal to 0; so O/P will be true.
console.log("0" < true); //"0" will br convertred into common data type; 0 will be number and true is equal to 1; so O/P will be true.