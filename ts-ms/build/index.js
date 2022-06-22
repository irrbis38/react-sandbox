"use strict";
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(3, 6));
let firstName = 'Mateo';
let sentence = `My name is ${firstName}.
I am new to TypeScript`;
console.log(sentence);
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Temp;
console.log('Employee Status:', employeeStatus);
console.log(ContractStatus[employeeStatus]);
let randomValue = 10;
randomValue = true;
randomValue = 'Vasily';
/** Утверждение типа с помощью as */
if (typeof randomValue === 'string') {
    console.log(randomValue.toUpperCase());
}
else {
    console.log('Error - A string was expected here.');
}
/** Тип объединения (Union types) */
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers of strings');
}
console.log(add('one', 'two'));
console.log(add(1, 2));
console.log(add('one', 2));
