"use strict";
/** Интерфейс */
let employee = {
    firstName: 'Emil',
    lastName: 'Andersson',
    fullName() {
        return this.firstName + ' ' + this.lastName;
    },
};
console.dir(employee);
let employeeWithType = {
    firstName: 'Emil',
    lastName: 'Andersson',
    fullName() {
        return this.firstName + ' ' + this.lastName;
    },
};
console.dir(employeeWithType);
