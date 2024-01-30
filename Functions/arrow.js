// function outerFunction() {
//     function innerFunction1() {
//         let a = 10; 
//         console.log(a);
//     }
    
//     function innerFunction2() {
//         let b = 20;
//         console.log(b);
//     }

//     return [innerFunction1, innerFunction2];
// }

// const [func1, func2] = outerFunction();
// func1();
// func2();

// function abc (){
//     console.log("Hii without paranthesis");
//     return abc;
// }
// console.log(abc());


// Regular function with its own 'this' context
function regularFunction() {
    this.value = 1;
    setTimeout(function() {
        console.log(this.value);
        this.value++;
        console.log("Inside regularFunction timeout:", this.value);
    }, 1000);
}

// Arrow function with lexical 'this' binding
const arrowFunction = () => {
    this.value = 1;
    setTimeout(() => {
        this.value++;
        console.log("Inside arrowFunction timeout:", this.value);
    }, 1000);
}
regularFunction(); // This may not work as expected due to 'this' behavior
arrowFunction();   // This works as expected

