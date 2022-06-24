/** Интерфейс */

interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: Employee = {
  firstName: "Emil",
  lastName: "Andersson",
  fullName(): string {
    return this.firstName + " " + this.lastName;
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
  firstName: "Emil",
  lastName: "Andersson",
  fullName(): string {
    return this.firstName + " " + this.lastName;
  },
};

console.dir(employeeWithType);

interface IceCream {
  flavor: string;
  scoops: number;
  instruction?: string;
}

interface Sundae extends IceCream {
  sauce: "chocolate" | "caramel" | "strawberry";
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: string;
}

let iceCream: Sundae = {
  flavor: "vanilla",
  scoops: 2,
  sauce: "chocolate",
  whippedCream: true,
};

console.log(iceCream.flavor);

function tooManyScoops(dessert: Sundae) {
  if (dessert.scoops >= 4) {
    return dessert.scoops + " is too many scoops!";
  } else {
    return "Your order will be ready soon!";
  }
}

console.log(tooManyScoops({ flavor: "vanilla", scoops: 5, sauce: "caramel" }));

interface IceCreamArray {
  [index: number]: string;
}

let myIceCream: IceCreamArray;
myIceCream = ["chocolate", "vanilla", "strawberry"];
let myStr: string = myIceCream[2];
console.log(myStr);
