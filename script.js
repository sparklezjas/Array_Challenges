function alwaysHungry(arr) {
    for (i=0; i<arr.length; i++) 
    if (arr[i] == "food")
        console.log ("yummy")
        else console.log ("I'm hungry")
    }
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i=0; i<arr.length; i++) {
    if(arr[i] > cutoff) {
        filteredArr.push(arr[i]);
    }}
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

function betterThanAverage(arr) {
    var sum = 0;
    for (var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    var avg = sum / arr.length;
    var count = 0
    for (var i=0; i<arr.length; i++){
        if(arr[i] > avg) {
        count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

const arr = ["a", "b", "c", "d", "e"];
const reversedArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
reversedArr.push(arr[i]);
}

console.log(reversedArr);

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    while (fibArr.length < n){
        var prev = fibArr[fibArr.length - 1];
        var next = fibArr[fibArr.length - 2];
        fibArr.push(prev + next);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

//calculates a dice roll 1-6
function d6() {
    var roll = Math.floor(Math.random() *6) + 1;
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

