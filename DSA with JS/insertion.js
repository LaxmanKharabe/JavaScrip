const numArra = [10,20,40,50,30];
let insertItem = 30;
let position = 2;

for (let i = numArra.length-1; i>=0; i--){
    if(i>=position){
        numArra[i+1] = numArra[i]
        if(i==position){
            numArra[i] = insertItem;
        }
    }
}
console.log(numArra)


// Default functions
const arrForDefault = [10,20,40,50,30];
console.log(arrForDefault.slice(1,3))
arrForDefault.splice(2,0, 200)
console.log(arrForDefault)