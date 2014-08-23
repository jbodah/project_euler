// Sum square difference
// Problem 6
// The sum of the squares of the first ten natural numbers is,

// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)^2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function sumOfSquaresForRange(start, end) {
    var sum = 0;
    for (var i = start; i <= end; i++) {
        sum += i * i;
    }
    return sum;
}

function squareOfSumsForRange(start, end) {
    var sum = 0;
    for (var i = start; i <= end; i++) {
        sum += i;
    }
    return sum * sum;
}

function getDifference(first, second) {
    return -first + second;
}

var range = [1,100];
var sumOfSquares = sumOfSquaresForRange.apply(this, range);
var squareOfSums = squareOfSumsForRange.apply(this, range);

console.log(getDifference(sumOfSquares, squareOfSums));
