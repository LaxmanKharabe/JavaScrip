function outerFunction() {
    let outerVariable = "I'm in the outer scope";
    function innerFunction() {
        let innerVariable = "I'm in the inner scope";
        console.log(outerVariable);
        return innerVariable;
    }
    return innerFunction;
}

let inner = outerFunction();
console.log(inner())


// function outerFunction() {
//     let outerVariable = "I'm in the outer scope";
//     function innerFunction() {
//         console.log(outerVariable);
//     }
//     return { innerFunction, outerVariable };
// }

// let result = outerFunction();
// console.log(result.outerVariable);
// result.innerFunction();
