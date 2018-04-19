// Immediately invoked  ES6 function
(() => {
    const mathResult = (4 + 6) * 12;
    console.log(mathResult);
})();

// Arrays and forEach
((numbers) => {
    numbers.forEach(function (number) {
        console.log(number);
    })
})([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);

// Arrays and for...of
const primeNumbers = (numbers) => {
    for(let number of numbers) {
        console.log(number);
    }
};

primeNumbers([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);

// Property Enumeration for...in
const professor = {
    firstName: 'Charlie',
    lastName: 'Calvert',
    address: '3000 Landerholm Cir SE',
    city: 'Bellevue',
    state: 'Washington',
    zip: '98007'
}

const address = (professor) => {
    for(let property in professor) {
        if(professor.hasOwnProperty(property)) {
            console.log(property + ": " + professor[property]);
        }
    }
};

address(professor);

// ES6 Class
class Calculator {

    add = (operanda, operandb) =>
        operanda + operandb;

    subtract = (operanda, operandb) =>
        operanda - operandb;

    multiply = (operanda, operandb) =>
        operanda * operandb;

    divide = (operanda, operandb) =>
        operanda / operandb;
}

var calculator = new Calculator();
console.log(calculator.add(2, 3));
console.log(calculator.subtract(5, 3));
console.log(calculator.multiply(3, 5));
console.log(calculator.divide(15, 3));