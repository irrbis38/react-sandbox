"use strict";
/*  Module 5: Declare and instantiate classes in TypeScript
    Lab Start  */
/*  EXERCISE 1 */
var Direction;
(function (Direction) {
    Direction[Direction["ascending"] = 0] = "ascending";
    Direction[Direction["descending"] = 1] = "descending";
})(Direction || (Direction = {}));
class BuildArray {
    constructor(items, sortOrder) {
        this.sortDescending = (a, b) => {
            if (a > b) {
                return -1;
            }
            else if (b > a) {
                return 1;
            }
            else {
                return 0;
            }
        };
        this.sortAscending = (a, b) => {
            if (a > b) {
                return 1;
            }
            else if (b > a) {
                return -1;
            }
            else {
                return 0;
            }
        };
        this._items = items;
        this._sortOrder = sortOrder;
    }
    get items() {
        return this._items;
    }
    set items(items) {
        this._items = items;
    }
    get sortOrder() {
        return this._sortOrder;
    }
    set sortOrder(sortOrder) {
        this._sortOrder = sortOrder;
    }
    buildArray() {
        let randomNumbers = [];
        let nextNumber;
        for (let counter = 0; counter < this.items; counter++) {
            nextNumber = Math.ceil(Math.random() * (100 - 1));
            if (randomNumbers.indexOf(nextNumber) === -1) {
                randomNumbers.push(nextNumber);
            }
            else {
                counter--;
            }
        }
        if (this.sortOrder === Direction.ascending) {
            return randomNumbers.sort(this.sortAscending);
        }
        else {
            return randomNumbers.sort(this.sortDescending);
        }
    }
}
/*  sortDescending is a comparison function that tells the sort method how to sort numbers
  in descending order. */
/*  sortAscending is a comparison function that tells the sort method how to sort numbers
  in ascending order. */
/*  buildArray builds an array of unique random numbers containing the number of items
  based on the number passed to it. The sortOrder parameter determines whether to sort
  the array in ascending or descending order. */
/*  TODO: Instantiate the BuildArray objects. */
let testArray1 = new BuildArray(12, Direction.ascending);
let testArray2 = new BuildArray(8, Direction.descending);
console.log(testArray1);
console.log(testArray2);
