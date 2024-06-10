// class person {
//   constructor() {
//     this._name = "";
//     this._age = 0;
//     this._job = "";
//   }
//   set name(value) {
//     this._name = value;
//   }
//   get name() {
//     return this._name;
//   }
//   set age(value) {
//     this._age = value;
//   }
//   get age() {
//     return this._age;
//   }
//   set job(value) {
//     this._job = value;
//   }
//   get job() {
//     return this._job;
//   }
// }

// const person = new person();
// person.name = "유으뜸";
// person.age = "11";
// person.job = "수강생";

// console.log("Name", person.name);
// console.log("Age", person.age);
// console.log("Job",person.job);

const createPerson = (callback) => {
  let person = {};
  callback(person, setName);
}

const setName = (person, callback) => {
  person.name = "유으뜸";
  callback(person, setAge);
}

const setAge = (person, callback) => {
  person.age = "11";
  callback(person, setJob);
}

const setJob = (person, callback) => {
  person.job = "수강생";
  console.log(person);
}
