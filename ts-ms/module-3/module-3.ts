/** Интерфейс */

interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: Employee = {
  firstName: 'Emil',
  lastName: 'Andersson',
  fullName(): string {
    return this.firstName + ' ' + this.lastName;
  },
};

console.dir(employee);

/** Псевдоним типа (type alias) */
/** Во многом аналогичен интерфейсу, но есть и отлилчия */

type EmployeeType = {
  firstName: string;
  lastName: string;
  fullName(): string;
};

let employeeWithType: EmployeeType = {
  firstName: 'Emil',
  lastName: 'Andersson',
  fullName(): string {
    return this.firstName + ' ' + this.lastName;
  },
};

console.dir(employeeWithType);
