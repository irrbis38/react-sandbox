interface Vehicle {
  make: string;
  color: string;
  doors: number;
  accelerate(speed: number): string;
  brake(): string;
  turn(direction: "left" | "right"): string;
}

class Car implements Vehicle {
  private static numberOfCars: number = 0;
  private _make: string;
  private _color: string;
  private _doors: number;

  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number");
    }
    Car.numberOfCars++;
  }

  public static getNumberOfCars(): number {
    return Car.numberOfCars;
  }

  get make() {
    return this._make;
  }
  set make(make) {
    this._make = make;
  }
  get color() {
    return `The color of the car is ${this._color}`;
  }
  set color(color) {
    this._color = color;
  }
  get doors() {
    return this._doors;
  }
  set doors(doors) {
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number");
    }
  }
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`;
  }
  brake(): string {
    return `${this.worker()} is braking with the standard braking system.`;
  }
  turn(direction: "left" | "right"): string {
    return `${this.worker()} is turning ${direction}`;
  }
  protected worker(): string {
    return this._make;
  }
}

let myCar1 = new Car("Cool car company", "red", 2);
let myCar2 = new Car("Galaxy Motors", "blue");

console.log(Car.getNumberOfCars()); // 2

////////////////////////////////////
// Расширение класса Car

class ElectricCar extends Car {
  private _range: number;

  constructor(make: string, color: string, range: number, doors = 2) {
    super(make, color, doors);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(range: number) {
    this._range = range;
  }

  charge() {
    console.log(this.worker() + " is charging.");
  }

  brake(): string {
    return `${this.worker()} is braking with the regenerative breaking system.`;
  }
}

let spark = new ElectricCar("Spark Motors", "silver", 150, 4);
let eCar = new ElectricCar("Electric Car Co.", "black", 250);

console.log(eCar.doors);
spark.charge();

console.log(Car.getNumberOfCars());
console.log(eCar.brake());
