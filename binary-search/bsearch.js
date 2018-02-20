
function bsearch(arry, targetValue) {
    var min = 0;
    var max = arry.length - 1;
    var currentIndex, currentValue, guess;
    while(min < max) {
        guess = Math.floor((min + max)/2);
        currentValue = arry[guess];
        if (currentValue === targetValue) {
            return guess
        } else if(currentValue < targetValue) {
            min = guess + 1;
        } else {
            max = guess;
        }
    }
    return guess;
}

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var result = bsearch(primes, 73);

