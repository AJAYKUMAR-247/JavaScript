// ObjectConstructor is a function. it is also a object itself.

function User(firstName, lastName, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;

  // when it comes inside a object constructor it is not a function it is a method.
  this.displayUser = function () {
    return `${this.firstName}  ${this.lastName}`;
  };
}

const Ajay = new User("Ajay", "Kumar", "ajay@mail");

console.log(Ajay);

//As we said it is a object so we're Accessing its properties like this.
console.log(Ajay.firstName);
console.log(Ajay.displayUser());

// To add a new property to the object
Ajay.age = 21;
console.log(Ajay.age);

Ajay.checkifAbove18 = function () {
  return Ajay.age > 18;
};

console.log(Ajay.checkifAbove18());

// If you want to add any other property, add to the objects prototype
User.prototype.checkifAbove20 = function () {
  return this.age > 20;
};

// Instead of creating the methods inside the constructor function, do it inside the prototype
User.prototype.displayUser = function () {
  console.log("AJAY");
};

// this keyword
// if we use this keyword outside of any constructor function it belongs to the global context or global object. In the web browser the global object is "window".

console.log(this); // will give window object.Only in the non-Strict mode

function test() {
  console.log(this); // this is non-strict mode.
}
test();

function test1() {
  "use Strict";
  console.log(this);// Now the value of this will be always undefined when you give it inside the strict mode.
}
test1();
