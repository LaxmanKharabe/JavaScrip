const numArra = [10,20,40,50,30];
let left = 0;
let right = numArra.length-1;

while (left<=right) {
    [numArra[left], numArra[right] ] = [numArra[right], numArra[left]];
    left++;
    right--;
}
console.log(numArra);