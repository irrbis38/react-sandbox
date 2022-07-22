class processIdentity<T, U> {
  private _value: T;
  private _message: U;
  constructor(val: T, msg: U) {
    this._value = val;
    this._message = msg;
  }
  getIdentity(): T {
    console.log(this._message);
    return this._value;
  }
}

let processor = new processIdentity<number, string>(100, 'Hello');
processor.getIdentity(); // Hello
