/** Functions */

function displayAlert(message: string): void {
  alert("The message is " + message);
}

function sum(input: number[]): number {
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

let addAllNumbers = (
  firstNumber: number,
  ...restOfNumbers: number[]
): number => {
  let total: number = firstNumber;
  for (let counter = 0; counter < restOfNumbers.length; counter++) {
    if (isNaN(restOfNumbers[counter])) {
      continue;
    }
    total += Number(restOfNumbers[counter]);
  }
  return total;
};

/** Deconstructed object parameters */

interface Message {
  text: string;
  sender: string;
}

function displayMessage({ text, sender }: Message) {
  console.log(`Message from ${sender}: ${text}`);
}

displayMessage({ sender: "Chistopher", text: "hello, world" });

let addThreeNumbers = (x: number, y: number, z?: number): number => {
  return x + y + (z ? z : 0);
};

/** Type of function */

// type calculator = (x: number, y: number) => number;
interface Calculator {
  (x: number, y: number): number;
}

/** Имена параметров при определении типа не должны совпадать с именами параметров при определении самой функции */
const addNumbers: Calculator = (x: number, y: number) => x + y;
const subtractNumbers: Calculator = (x: number, y: number) => x - y;

console.log(addNumbers(1, 2));
console.log(subtractNumbers(1, 2));

let doCalculation = (operation: "add" | "subtract"): Calculator => {
  if (operation === "add") {
    return addNumbers;
  } else {
    return subtractNumbers;
  }
};
