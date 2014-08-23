// Largest palindrome product
// Problem 4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindrome(num) {
    var str = num.toString();
    var head = 0;
    var tail = str.length - 1;

    while (head < tail) {
        if (str[head] != str[tail]) {
            return false;
        }
        head++;
        tail--;
    }
    return true;
}

function getAllProductsWhere(start, end, condition) {
    var first = start;
    var second = start;
    var passingProducts = [];

    while (first <= end) {
        product = first * second;
        if (condition(product)) {
            passingProducts.push(product);
        }
        if (second == end) {
            first++;
            second = start;
        }
        else {
            second++;
        }
    }

    return passingProducts;
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

var threeDigitProductPalindromes = getAllProductsWhere(100, 999, function (product) { return isPalindrome(product); });
console.log(findMax(threeDigitProductPalindromes));
