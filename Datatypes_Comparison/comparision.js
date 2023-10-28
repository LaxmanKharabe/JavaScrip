// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true
// console.log("2" > 0); // JavaScript performs type coercion and convert the string into number. so that is why O/P will be true.
// console.log("2" < 0); // JavaScript performs type coercion and convert the string into number. so that is why O/P will be false.
// console.log(null == 0); // "==" equality check operator; null is considered loosely equal to undefined, but not zero. So it will be false.
// console.log(null === 0); // "===" strict equality check operator; null and 0 have different data types, so that is why it will be false
// console.log(null > 0); // While comparing null will be converted into number due to type coercion and treat it as zero [0]. So that is why it returns false.
// console.log(null >= 0); // While comparing null will be converted into number due to type coercion and treat it as zero [0]. So that is why it returns true.
// console.log(null < 0); // While comparing null will be converted into number due to type coercion and treat it as zero [0]. So that is why it returns false.
// console.log(null <= 0); // While comparing null will be converted into number due to type coercion and treat it as zero [0]. So that is why it returns true.
// console.log(undefined == 0); /*  When comparing undefined and 0 using ==, it will perform type coercion, JavaScript will try to make them the same type for the comparison. However, undefined is not loosely equal to 0. so it will be false  type will be boolean.*/
// console.log(undefined < 0); // false
// console.log(typeof(1>"2")); //false
// console.log(undefined > 0); // false
console.log("2" > false); // "2" will be convertred into common data type 2 will be number and false is equal to 0; so O/P will be true.
console.log("0" < true); //"0" will br convertred into common data type; 0 will be number and true is equal to 1; so O/P will be true.