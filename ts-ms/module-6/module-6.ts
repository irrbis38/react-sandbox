/** Generic types */

function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
numberArray.push(25); // OK
stringArray.push('Rabbits'); // OK
numberArray.push('This is not a number'); // OK
stringArray.push(30); // OK
console.log(numberArray); // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArray); // ["Cats", "Dogs", "Birds", "Rabbits", 30]

/** Можно использовать несколько переменных общего типа*/

function identity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

let returnNumber = identity<number, string>(100, 'Hello!');
let returnString = identity<string, string>('100', 'Hola!');
let returnBoolean = identity<boolean, string>(true, 'Bonjour!');

returnNumber = returnNumber * 100; // OK
returnString = returnString * 100; // Error: Type 'number' not assignable to type 'string'
returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'

function identity2<T, U>(value: T, message: U): T {
  let result: T = value + value; // Ошибка, т.к. не знает, с каким типом будет работать. Чтобы всё работало, надо ограничить тип.
  console.log(message);
  return result;
}

/** С помощью ключевого слова extends задаём T, как пользовательский тип */
type ValidTypes = string | number;

function identity3<T extends ValidTypes, U>(value: T, message: U) {
  let result: ValidTypes = '';
  let typeValue: string = typeof value;
  if (typeof value === 'number') {
    result = value + value;
  } else if (typeof value === 'string') {
    result = value + value;
  }

  console.log(
    `The message is ${message} and the function returns a ${typeValue} value of ${result}`
  );

  return result;
}

let numberValue = identity<number, string>(100, 'Hello');
let stringValue = identity<string, string>('100', 'Hello');

console.log(numberValue); // Returns 200
console.log(stringValue); // Returns 100100

/** Ограничиваем K тип свойством другого объекта T */
function getPets<T, K extends keyof T>(pet: T, key: K) {
  return pet[key];
}

let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: 'cats', 2: 'dogs', 3: 'parrots', 4: 'fish' };

console.log(getPets(pets1, 'fish')); // Returns 6
console.log(getPets(pets2, '3')); // Error
