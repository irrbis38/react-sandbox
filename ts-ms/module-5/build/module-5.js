"use strict";
class Car {
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        if (doors % 2 === 0) {
            this._doors = doors;
        }
        else {
            throw new Error("Doors must be an even number");
        }
        Car.numberOfCars++;
    }
    static getNumberOfCars() {
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
        }
        else {
            throw new Error("Doors must be an even number");
        }
    }
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} MPH.`;
    }
    brake() {
        return `${this.worker()} is braking with the standard braking system.`;
    }
    turn(direction) {
        return `${this.worker()} is turning ${direction}`;
    }
    worker() {
        return this._make;
    }
}
Car.numberOfCars = 0;
let myCar1 = new Car("Cool car company", "red", 2);
let myCar2 = new Car("Galaxy Motors", "blue");
console.log(Car.getNumberOfCars()); // 2
////////////////////////////////////
// Расширение класса Car
class ElectricCar extends Car {
    constructor(make, color, range, doors = 2) {
        super(make, color, doors);
        this._range = range;
    }
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }
    charge() {
        console.log(this.worker() + " is charging.");
    }
    brake() {
        return `${this.worker()} is braking with the regenerative breaking system.`;
    }
}
let spark = new ElectricCar("Spark Motors", "silver", 150, 4);
let eCar = new ElectricCar("Electric Car Co.", "black", 250);
console.log(eCar.doors);
spark.charge();
console.log(Car.getNumberOfCars());
console.log(eCar.brake());
