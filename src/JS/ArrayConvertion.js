/*Array.from()
Converts array-like or iterable objects into an array. */

const str = "hello";
const arr = Array.from(str); // ['h', 'e', 'l', 'l', 'o']
console.log(arr);

/*Spread Operator (...)
Used to spread elements of an iterable (like an array or a set) into a new array. */

const set = new Set([1, 2, 3]);
const arrr = [...set]; // [1, 2, 3]
console.log(arrr);

/* slice()
When called on an array, it can be used to create a shallow copy. You can also use it on array-like objects. */

const numbers = [1, 2, 3];
const copy = numbers.slice(); // [1, 2, 3]
console.log(copy);

/*String.prototype.split()
Converts a string into an array by splitting it at specified delimiters. */

const strr = "a,b,c";
const array = strr.split(","); // ['a', 'b', 'c']
console.log(array);

/*JSON.parse()
Converts a JSON string representing an array into an actual array. */

const jsonString = "[1, 2, 3]";
const array1 = JSON.parse(jsonString); // [1, 2, 3]
console.log(array1);

/*Map or Set
Both Map and Set can be converted to arrays using the spread operator or Array.from(). */

const map = new Map([
  [1, "a"],
  [2, "b"],
]);
const arrFromMap = Array.from(map); // [[1, 'a'], [2, 'b']]
console.log(arrFromMap);

const SET = new Set([1, 2, 3]);
const arrFromSet = Array.from(SET); // [1, 2, 3]
console.log(arrFromSet);

/*Using Array Constructor
You can create an array with a specified length (but this won't fill it with values). */

const array2 = new Array(5); // [empty × 5]
console.log(array2);

// Convertion of Array of objects.
/*Using JSON Format
If your string is in JSON format, you can use JSON.parse() to convert it into an array of objects. */

const JsonString = '[{"name": "Alice", "age": 25}, {"name": "Bob", "age": 30}]';
const arrayOfObjects = JSON.parse(JsonString);
console.log(arrayOfObjects);
// Output: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]

/*Using a Delimiter with split()
If your string is formatted in a specific way (e.g., comma-separated values), you can split it into an array and then map it to objects. */

const string = "Alice,25;Bob,30"; // Delimiter is ';' for each person and ',' for name and age
const arrayofObjects = string.split(";").map((item) => {
  const [name, age] = item.split(",");
  return { name, age: Number(age) }; // Convert age to a number
});
console.log(arrayofObjects);
// Output: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]

/*Using Regular Expressions
For more complex strings, you can use regular expressions to extract the necessary parts. */

const string1 = "name: Alice, age: 25; name: Bob, age: 30";
const ArrayOfObjects = string1
  .match(/name:\s*(.*?),\s*age:\s*(\d+)/g)
  .map((item) => {
    const [name, age] = item.split(/,\s*/).map((part) => part.split(": ")[1]);
    return { name, age: Number(age) }; // Convert age to a number
  });
console.log(ArrayOfObjects);
// Output: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]

// Convert Array to an Array of Object
// Basic Convertion
const arr1 = ["ajay", "kumar", "v"];

const ArrayObject = arr1.map((name) => ({
  Name: name,
}));
console.log(ArrayObject);

// Convertion of Nested Array to an Array of Object.

const arr2 = [["ajay", "kumar"], ["Ravi", "srikar"]];

const ArrayObject1 = arr2.map(([fname, lname]) => ({ fname, lname }));
console.log(ArrayObject1);

const ArrayObject4 = [Object.fromEntries(arr2)];
console.log(ArrayObject4);

/*Adding Additional Properties
You can also add additional properties while converting:*/

const arr3 = [1, 2, 3];

const ArrayObject3 = arr3.map((num) => ({
  number: num,
  squared: num * num,
}));
console.log(ArrayObject3);

// Combining values from two arrays.

const arr4 = ["Ajay", "kumar", "vv"];
const arr5 = [22, 33, 44];

const ArrayObject5 = arr4.map((name, index) => ({
  Name: name,
  age: arr5[index],
}));
console.log(ArrayObject5);

/*Using Index as a Property
You can include the index of each element in the object: */

const arr6 = ["Ajay", "Kumar", "vvv"];

const ArrayObject6 = arr6.map((name, index) => ({
  Name: name,
  id: index,
}));

console.log(ArrayObject6);

//Converting an Array of object

const arr7 = [
  { name: "ajay", age: 24 },
  { name: "kumar", age: 67 },
];

const ArrayObject7 = arr7.map((obj) => ({
  name: obj.name,
  years: obj.age,
}));
console.log(ArrayObject7);
