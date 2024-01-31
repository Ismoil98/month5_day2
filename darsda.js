// CONSTRUCTOR FUNCTION
// constructor/prototype

// function Person(name) {
//   if (!new.target) {
//     console.log('without new');
//   }
//   this.name = name;
// } // constructor

// Person.prototype.getName = function () {
//   return this.name;
// }; // prototype

// let john = Person('John Doe');
// console.log(john);

// ES6 CLASS   ////////////////////////
// class

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// }

// let tom = Person('Tom Smith');
// console.log(tom);

// HOISTING

// function add(a, b) {
//   return a + b;
// }

// const add = function (a, b) {
//   return a + b
// }

// CLASS EXPRESSION ///////////////////
// const Person = class {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// };

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   getFullName() {
//     return this.firstName + ' ' + this.lastName;
//   }
// }

// let p1 = new Person('John', 'Doe');

// let p2 = {
//   firstName: 'Tom',
//   lastName: 'Smith',
// };

// console.log(p1 instanceof Person);
// console.log(p2 instanceof Person);

// console.log(p1 instanceof String);

// let str1 = 'Abdulaziz';

// console.log(str1 instanceof String);

// let str2 = new String('Abdulaziz');

// console.log(str2 instanceof String);

// console.log(String instanceof Object);

// console.log(Function instanceof Object);

// console.log(Function instanceof String);

// GETTER / SETTER   ///////////////////
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(newName) {
//     newName = newName.trim();
//     if (newName === '') {
//       throw 'The name cannot be empty';
//     }
//     this._name = newName;
//   }
// }

// let john = new Person('John Doe');
// john.name = 'Tom Smith';
// console.log(john.name);

// STATIC KEYWORD ////////////////////
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.getName = function () {
//   return this.name;
// };

// Person.createAnonymous = function (gender) {
//   let name = gender == "male" ? "John Doe" : "Jane Doe";
//   return new Person(name);
// };

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
//   static createAnonymous(gender) {
//     let name = gender == 'male' ? 'John Doe' : 'Jane Doe';
//     return new Person(name);
//   }
// }

// let john = new Person('John Doe');
// console.log(john.getName());

// console.log(john.createAnonymous('male')); // X
// console.log(Person.createAnonymous('female'));

// class Product {
//   constructor(name, quantity) {
//     this.name = name;
//     this.quantity = quantity;
//     this.constructor.count++;
//   }
//   static count = 0;
//   static getCount() {
//     return Product.count;
//   }
// }

// let laptop1 = new Product('Acer', 20);
// console.log(Product.getCount());

// INHERITANCE   ---- ////////////////////////////
// class Animal {
//   constructor(legs) {
//     this.legs = legs;
//   }
//   walk() {
//     console.log('walking on ' + this.legs + ' legs');
//   }
// }

// class Bird extends Animal {
//   constructor(legs) {
//     super(legs);
//   }
//   fly() {
//     console.log('flying');
//   }
// }

// let bird = new Bird(2);

// bird.walk();
// bird.fly();

// function Animal(legs) {
//   this.legs = legs;
// }

// Animal.prototype.walk = function () {
//   console.log("walking on " + this.legs + " legs");
// };

// function Bird(legs) {
//   Animal.call(this, legs);
// }

// Bird.prototype = Object.create(Animal.prototype);

// Bird.prototype.fly = function () {
//   console.log("flying");
// };

// var pigeon = new Bird(2);

// pigeon.walk(); // walking on 2 legs
// pigeon.fly(); // flying

// class Circle {
//   #radius = 0;
//   constructor(radius) {
//     this.#radius = radius;
//   }
//   get area() {
//     return Math.PI * Math.pow(this.#radius, 2);
//   }
//   set radius(value) {
//     if (typeof value === 'number' && value > 0) {
//       this.#radius = value;
//     } else {
//       throw 'The radius must be a positive number';
//     }
//   }
//   get radius() {
//     return this.#radius;
//   }
// }

// ABSTRACTION  ////
// class Employee {
//   // encapsulation
//   #name;
//   #baseSalary;

//   // abstraction
//   setName(val) {
//     this.#name = val;
//   }
//   setBaseSalary(val) {
//     this.#baseSalary = val;
//   }

//   getName() {
//     return this.#name;
//   }

//   getSalary() {
//     let bonus = 1000;
//     return this.#baseSalary + bonus;
//   }
// }
// var emp = new Employee();
// emp.setName('abc');
// emp.setBaseSalary(100);
// console.log(emp.getName());
// console.log(emp.getSalary());

// POLYMORPHISM /////
// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   getFullName() {
//     return this.firstName + ' ' + this.lastName;
//   }
// }

// class Student extends Person {
//   constructor(firstName, lastName, university) {
//     super(firstName, lastName);
//     this.university = university;
//   }
//   getInfo() {
//     return super.getFullName() + ` ${this.university} da o'qiyapti !`;
//   }
// }

// class EmployeeStudent extends Student {
//   constructor(firstName, lastName, university, workPlace) {
//     super(firstName, lastName, university);
//     this.workPlace = workPlace;
//   }
//   getInfo() {
//     return super.getInfo() + ` va ${this.workPlace} da ishlaydi !`;
//   }
// }

// let es = new EmployeeStudent('Xurshid', 'Shodiyev', 'TATU', "NAJOT TA'LIM");

// console.log(es);

// console.log(es.getInfo());

// CLASS-1 ///////////////
class Triangle {
    #leftSide;
    #rightSide;
    #width;
    constructor(leftSide, rightSide, width) {
      this.#leftSide = leftSide;
      this.#rightSide = rightSide;
      this.#width = width;
    }
  
    getLeftSide() {
      return this.#leftSide;
    }
    getRightSide() {
      return this.#rightSide;
    }
    getWidth() {
      return this.#width;
    }
    setSides(a, b, c) {
      this.#leftSide = a;
      this.#rightSide = b;
      this.#width = c;
    }
  }
  