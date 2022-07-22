class DataStore<T> {
  private _data: Array<T> = new Array(10);

  AddOrUpdate(index: number, item: T) {
    if (index >= 0 && index < 10) {
      this._data[index] = item;
    } else {
      alert('Index is greater than 10');
    }
  }
  GetData(index: number) {
    if (index >= 0 && index < 10) {
      return this._data[index];
    } else {
      return;
    }
  }
}

// use with string
let cities = new DataStore<string>();

cities.AddOrUpdate(0, 'Mumbai');
cities.AddOrUpdate(1, 'Chicago');
cities.AddOrUpdate(11, 'London'); // item not added

console.log(cities.GetData(1)); // returns 'Chicago'
console.log(cities.GetData(12)); // returns 'undefined'

// use with numbers
let numbers = new DataStore<number>();

numbers.AddOrUpdate(0, 1991);
numbers.AddOrUpdate(8, 42);

console.log(numbers.GetData(0));
console.log(numbers.GetData(8));

// use with objects
type User = { name: string };

let obj = new DataStore<User>();

obj.AddOrUpdate(0, { name: 'Vasil' });
obj.AddOrUpdate(8, { name: 'Ann' });

console.log(obj.GetData(0));
console.log(obj.GetData(8));
