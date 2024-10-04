// destructuring is used to extract or unpack specific items from an array or object into distinct variables.

// To destructure an array, the syntax is let[variable name] = array

let food = ["Burger", "onion soup", "ice cream"];

const [mainDish] = food;
console.log(mainDish); //Burger

const [maindish, soup] = food;
console.log(maindish, soup); //Burger,onion soup

const [, , desert] = food; //,(comma) to skip the item/elements of the array.
console.log(desert); //ice cream

const [Maindish, ...others] = food;
console.log(Maindish); //Burger

console.log(others); //onion soup,ice cream

// we can also create variables while destructuring an array
const [one, two, three, four = "fish"] = food;
console.log(one, two, three, four); //Burger,onion soup, ice cream, fish

// To destructuring from an object, the syntax is let{variableName} = object;

const user = { id: 23, age: 21, name: "ajay" };

var { name } = user; //Unlike destructuring the array here order is not important.
console.log(name, id); //But we should destructure with the same exact key(name).

var { id, ...rest } = user; //we can use spread operator to select the properties.
console.log(rest); //now rest is an object because it holds key value pairs

// We can also change the property name during destructuring.
var { age: agess } = user;
console.log(agess);

// We can also add variables while destructuring the object
var { age, department = "It" } = user;
console.log(department);

// We can also use destructuring while calling the function
function displayName({ age }) {
  console.log(`My age is${age}`);
}

displayName(user);
