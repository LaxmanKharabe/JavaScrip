const myArray = [1, 2, 3, 4, 5];
const indexToRemove = 3;

if(indexToRemove >=0 && indexToRemove<myArray.length){
    for(let index = indexToRemove; index<myArray.length-1; index++){
        myArray[index] = myArray[index - 1];
    }
    // myArray.length--;
    console.log(myArray);
}
