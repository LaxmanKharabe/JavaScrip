function convert(number){
    let numbPairs = [
        {romanNumber : 'M', numValue: 1000},
        {romanNumber:'CM', numValue: 900},
        {romanNumber:'D', numValue : 500},
        {romanNumber:'CD', numValue : 400},
        {romanNumber:'C', numValue : 100},
        {romanNumber:'XC', numValue: 90},
        {romanNumber:'L', numValue: 50},
        {romanNumber:'XL', numValue: 40},
        {romanNumber:'X', numValue: 10},
        {romanNumber:'IX', numValue: 9},
        {romanNumber:'V', numValue: 5},
        {romanNumber:'IV', numValue: 4},
        {romanNumber:'I', numValue: 1}
    ];

    let getCurrentPosRomanNum = '';

    for(let pos=0; pos<numbPairs.length; ++pos){
        while(number>= numbPairs[pos].numValue){
            getCurrentPosRomanNum += numbPairs[pos].romanNumber;
            number -= numbPairs[pos].numValue;
        }
    }
    return getCurrentPosRomanNum;
}
function getNumber(){
    let getNumb = document.querySelector('#numbers').value;
    var finalResult  = convert(getNumb);
    document.querySelector('#romNumb').innerHTML = finalResult;
}
// let getNumb = document.querySelector('#numbers').value;
// console.log(getNumb);
// console.log(convert(getNumb));
getNumber();
