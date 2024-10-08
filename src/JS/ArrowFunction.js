// Arrow function can be replaced for function decleration, named function expression anonymous function expression.

// Arrow functions cannot be used as constructors
// Arrow functions cannot be bind their own buildings

// Syntax for arrow function is
// const x = () => {
//    expression
// }

// without the curly braces, the arrow function means that this a one line function no need of return value.
// ie. const x = () => 12.

const x = (num) => {
  return num * 2;
};
console.log(x);

const user = {
  id: 343,
  info: () => console.log(this.id),
};

console.log(user); // here the value of this will be bind because the arrow function will not bind with the object.

const arr = [1, 2, 3, 4, 5];

arr.forEach((val) => console.log(val));
