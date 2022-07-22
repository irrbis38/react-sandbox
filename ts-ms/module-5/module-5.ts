class Car {
  _make: string;
  _color: string;
  _doors: number;

  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error('Doors must be an even number');
    }
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
      throw new Error('Doors must be an even number');
    }
  }
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`;
  }
  brake(): string {
    return `${this.worker()} is braking with the standard braking system.`;
  }
  turn(direction: 'left' | 'right'): string {
    return `${this.worker()} is turning ${direction}`;
  }
  private worker(): string {
    return this._make;
  }
}

let myCar1 = new Car('Cool car company', 'red', 2);

console.log(myCar1.color);
console.log(myCar1._color);

let myCar2 = new Car('Galaxy Motors', 'blue');

console.log(myCar2.doors);
// myCar2.doors = 5;

console.log(myCar2.accelerate(40));
console.log(myCar2.turn('left'));
console.log(myCar2.brake());
