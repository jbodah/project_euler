// Smallest multiple
// Problem 5
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function findSmallestNumberWhere(condition) {
    var value = 1;
    while (condition(value) != true) {
        value++;
    }
    return value;
}

function isDivisibleByEverythingLessThanOrEqualTo(max, value) {
    var isDivisibleEverythingLessThanOrEqualToByMax = function (value) {
        for (var i = max; i > 1; i--) {
            if (value % i != 0) {
                return false;
            }
        }
        return true;
    }

    // Allow for currying
    return (arguments.length < 2) ? isDivisibleEverythingLessThanOrEqualToByMax
                                  : isDivisibleEverythingLessThanOrEqualToByMax(value);
}

var condition = isDivisibleByEverythingLessThanOrEqualTo(20);
console.log(findSmallestNumberWhere(condition));
