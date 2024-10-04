// function declaration
functionName(); //functions can be called before the function is declared in the function declaration.
function functionName() {
  console.log("I'm inside the function");
}
functionName();

// function can be called with or without the parameters and the return statement.
function functionName1(parameter1, parameter2) {
  return parameter1 + parameter2;
}
functionName1();

// function Expression
// But the function calling before the function is declared as function Expression is not possible.
let somefunction = functionName;
somefunction();

// function Expression
// A function without name is called as the anonymous function.

var functions = function () {
  console.log(
    "This is called function expression also known as anonymous function"
  );
};
functions();

var function2 = function functionName() {
  console.log("I'm inside the Named function expression");
};
function2();

// functions can also be exported and imported.
export default functionName;
