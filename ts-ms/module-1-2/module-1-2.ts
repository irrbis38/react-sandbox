function addNumbers(x: number, y: number) {
  return x + y;
}
console.log(addNumbers(3, 6));

let firstName: string = 'Mateo';
let sentence: string = `My name is ${firstName}.
I am new to TypeScript`;
console.log(sentence);

enum ContractStatus {
  Permanent = 1,
  Temp,
  Apprentice,
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log('Employee Status:', employeeStatus);
console.log(ContractStatus[employeeStatus]);

let randomValue: unknown = 10;

randomValue = true;
randomValue = 'Vasily';
/** Утверждение типа с помощью as */
if (typeof randomValue === 'string') {
  console.log((randomValue as string).toUpperCase());
} else {
  console.log('Error - A string was expected here.');
}

/** Тип объединения (Union types) */
function add(x: number | string, y: number | string) {
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

/** Тип пересечений (Intersection  types) */
/** Итоговый тип обладает свойствами всех исходных */

interface Employee {
  employeeID: number;
  age: number;
}
interface Manager {
  stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
  employeeID: 12345,
  age: 34,
  stockPlan: true,
};

/** Литеральные типы (Literal   types) */
/** Набор из конкретных вариантов. Доступны для stirng, number, boolean */
type testResult = 'pass' | 'fail' | 'incomplete';
let myResult: testResult;
myResult = 'incomplete'; //* Valid
myResult = 'pass'; //* Valid
// myResult = "failure";       //* Invalid

type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1; //* Valid
diceRoll = 2; //* Valid
// diceRoll = 7;    //* Invalid

/** Массивы */
/** Имеют два типа записи. */

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

/** Кортежи (Tuples) */
/** Это массивы со значениями одного типа */
let person1: [string, number] = ['Marcia', 35];
