"use strict";
/** Functions */
function displayAlert(message) {
    alert("The message is " + message);
}
function sum(input) {
    let total = 0;
    for (let count = 0; count < input.length; count++) {
        if (isNaN(input[count])) {
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
sum([1, 2, 3]);
/** Rest */
let addAllNumbers = (firstNumber, ...restOfNumbers) => {
    let total = firstNumber;
    for (let counter = 0; counter < restOfNumbers.length; counter++) {
        if (isNaN(restOfNumbers[counter])) {
            continue;
        }
        total += Number(restOfNumbers[counter]);
    }
    return total;
};
function displayMessage({ text, sender }) {
    console.log(`Message from ${sender}: ${text}`);
}
displayMessage({ sender: "Chistopher", text: "hello, world" });
let addThreeNumbers = (x, y, z) => {
    return x + y + (z ? z : 0);
};
const addNumbers = (x, y) => x + y;
const subtractNumbers = (x, y) => x - y;
console.log(addNumbers(1, 2));
console.log(subtractNumbers(1, 2));
