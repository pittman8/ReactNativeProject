var person = {
    firstName : "Hannah",
    lastName : "Pittman",
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}

var calculator = {
    operand01 : -1,
    operand02 : -1,
    get add() {
        return this.operand01 + this.operand02;
    },
    get subtract() {
        return this.operand01 - this.operand02;
    }
}

function divider(title) {
    console.log("========================================");
    console.log(title);
    console.log("========================================");
}

divider('Person');
console.log("My first name: " + person.firstName);
console.log("My last name: " + person.lastName);
console.log("My full name: " + person.fullName);

calculator.operand01 = person.firstName.length;
calculator.operand02 = person.lastName.length;
calculator.multiply = calculator.operand01 * calculator.operand02;

divider('Calculator');
console.log("operand01 = " + calculator.operand01);
console.log("operand02 = " + calculator.operand02);
console.log("Add: " + calculator.add);
console.log("Subtract: " + calculator.subtract);
console.log("Multiply: " + calculator.multiply);