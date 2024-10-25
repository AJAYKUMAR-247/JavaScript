// closure is when a child function keeps access to the variables outside of it even after the parent function has called/executed/returned.

// It is the combination of a function bundled together(enclosed) with references to its surrounding state (the lexical environment/scope).

// Lexical Scoping:
/* When a function is defined within another function in javascript, the inner function has the access to the variables and functions declared in the outer's function scope.
 This concept is called Lexical Scoping. */

const func = () => {
  let counter = 0;
  console.log((counter += 1));
};

func();//1
func();//1

// Here the function is calling again and again,it is not incrementing the counter value, Instead it is re-creating. So in these cases we can use closure.

function outerFunction() {
  let counter = 0;
  function innerFunction() {
    counter += 1;
    console.log(counter); // Here we can are recreating the counter variable, instead we are incrementing.
  }
  return innerFunction; // Here we are not calling the innerfunction, we're just returning the reference of the innerfunction.
}

const closure = outerFunction(); // So that here the closure variable is holding the reference for the innerFunction.

console.log(closure);
closure();//1
closure();//2
closure();//3

//So whenever we call the function closure the value of the counter is increasing.