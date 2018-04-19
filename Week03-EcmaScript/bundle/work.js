'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Immediately invoked  ES6 function
(function () {
    var mathResult = (4 + 6) * 12;
    console.log(mathResult);
})();

// Arrays and forEach
(function (numbers) {
    numbers.forEach(function (number) {
        console.log(number);
    });
})([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);

// Arrays and for...of
var primeNumbers = function primeNumbers(numbers) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = numbers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var number = _step.value;

            console.log(number);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};

primeNumbers([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);

// Property Enumeration for...in
var professor = {
    firstName: 'Charlie',
    lastName: 'Calvert',
    address: '3000 Landerholm Cir SE',
    city: 'Bellevue',
    state: 'Washington',
    zip: '98007'
};

var address = function address(professor) {
    for (var property in professor) {
        if (professor.hasOwnProperty(property)) {
            console.log(property + ": " + professor[property]);
        }
    }
};

address(professor);

// ES6 Class

var Calculator = function Calculator() {
    _classCallCheck(this, Calculator);

    this.add = function (operanda, operandb) {
        return operanda + operandb;
    };

    this.subtract = function (operanda, operandb) {
        return operanda - operandb;
    };

    this.multiply = function (operanda, operandb) {
        return operanda * operandb;
    };

    this.divide = function (operanda, operandb) {
        return operanda / operandb;
    };
};

var calculator = new Calculator();
console.log(calculator.add(2, 3));
console.log(calculator.subtract(5, 3));
console.log(calculator.multiply(3, 5));
console.log(calculator.divide(15, 3));