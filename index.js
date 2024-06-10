class person {
  constructor() {
    this._name = "";
    this._age = 0;
    this._job = "";
  }
  set name(value) {
    this._name = value;
  }
  get name() {
    return this._name;
  }
  set age(value) {
    this._age = value;
  }
  get age() {
    return this._age;
  }
}
