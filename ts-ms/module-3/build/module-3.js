"use strict";
/** Интерфейс */
let employee = {
    firstName: "Emil",
    lastName: "Andersson",
    fullName() {
        return this.firstName + " " + this.lastName;
    },
};
console.dir(employee);
let employeeWithType = {
    firstName: "Emil",
    lastName: "Andersson",
    fullName() {
        return this.firstName + " " + this.lastName;
    },
};
console.dir(employeeWithType);
let iceCream = {
    flavor: "vanilla",
    scoops: 2,
    sauce: "chocolate",
    whippedCream: true,
};
console.log(iceCream.flavor);
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + " is too many scoops!";
    }
    else {
        return "Your order will be ready soon!";
    }
}
console.log(tooManyScoops({ flavor: "vanilla", scoops: 5, sauce: "caramel" }));
let myIceCream;
myIceCream = ["chocolate", "vanilla", "strawberry"];
let myStr = myIceCream[2];
console.log(myStr);
