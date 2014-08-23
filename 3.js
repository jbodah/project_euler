// Largest prime factor
// Problem 3
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function getPrimeFactorsOf(num) {
    var factors = [];
    var currentPrime = 2;

    if (num < 1) {
        return [];
    }

    if (num == 1) {
        return [1];
    }

    while (currentPrime <= num) {
        if (num % currentPrime == 0) {
            factors.push(currentPrime);
            num = num / currentPrime;
        }
        else {
            currentPrime = getNextPrimeGreaterThan(currentPrime);
        }
    }

    if (factors.length == 0) {
        throw 'Unexpected error!';
    }

    return factors;
}

function isPrime(num) {
    for (var i = 2, max = num - 1; i < max; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

function getNextPrimeGreaterThan(num) {
    var candidate = num + 1;
    return isPrime(candidate) ? candidate : getNextPrimeGreaterThan(candidate);
}

function findMax(values) {
    var max = values[0];
    for (var i = 1, len = values.length; i < len; i++) {
        if (max < values[i]) {
            max = values[i];
        }
    }
    return max;
}

var max = findMax(getPrimeFactorsOf(600851475143));
console.log(max);
