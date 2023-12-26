function onloadf1() {
    let fruits = ['apple', 'banana', 'orange'];

    console.log(fruits.indexOf('banana'));
    
    console.log(fruits.slice(1, 3));
    
    fruits.push('ABC');
    console.log(fruits);

    fruits.pop();
    console.log(fruits);

    fruits.unshift('ABC');
    console.log(fruits);

    fruits.shift();
    console.log(fruits);
}
onloadf1();


