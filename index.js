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
}
