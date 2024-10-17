// ESLint: This is a tool for identifying and fixing problems in your JavaScript code. It helps enforce coding standards and improve code quality.

// Arrays can be mixed
let mixedArray = [
  1,
  null,
  undefined,
  [1, 2, 3],
  { id: "ajay" },
  function ak() {
    console.log("I'm the function inside the array");
  },
];
console.log(mixedArray);

// To Access the elements of the array
console.log(mixedArray[3]);

// To Access or call the function which is available in the array.
mixedArray[5]();

// We can also create an empty Array.
let emptyArray = [];
console.log(emptyArray);

// We can also add element to an empty array.
emptyArray[0] = "Ajay";

const Function1 = function functionName() {
  console.log("I'm going inside the function");
};

emptyArray[1] = Function1;
console.log(emptyArray);

// We can also overwrite the existing element in the Array.
emptyArray[0] = 12;
console.log(emptyArray[0]);

// Arrays can also be exported in the module system(like ES6 modules).
export default mixedArray;

//we can also create Array using
// eslint-disable-next-line no-array-constructor
const array = new Array("ajay", 23, null, undefined, "kumar", 23, 34, 45);
console.log(array);

array[4] = "Kumar";

// we can change the whole array into an String using toString method.
let Array1 = ["ajay", 23, null];
console.log(Array1.toString());

//Verify
console.log(typeof Array1);

// to find length
console.log(array.length);

// to add element to the last of the array
array.push("ajay");
console.log(array);

// to remove the first element of the array
array.shift();
console.log(array);

//to remove the last element of the array
array.pop();
console.log(array);

// We can concat to array
let arr1 = [12, 23, 2, 34, 345, 3];
let arr2 = [23, 34, 5, 54, 54, 46];

arr1.concat(arr2);
console.log(arr1);

//OR

let newArr = arr1.concat(arr2);
console.log(newArr);

// Remove elements using splice
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr3.splice(2, 5);

// first parameter is for the starting index
// second parameter is for the number of elements
console.log(arr3);

// to delete the specific element in the array
delete arr3[3];
console.log(arr3);

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter() method create a new array with all the elements that pass the test implemented by the provided function.
arr4 = arr4.filter((num) => num % 2 === 0);
console.log(arr4);

/*map() method create a new array with all the elements in the array without any filtering conditions.
 while do mapping we have to give the map(element,index,array). In this, index and array is optional.
here we give the element as ins we can give whatever we want.*/
arr4?.map((ins) => (ins?.includes(2) ? "True" : "False"));
arr4 = arr4.map((num) => num * 2);
console.log(arr4);

// map() method will also take the callback fun
const mapp = arr4.map(function (val) {
  return val * 2;
});
console.log(mapp);

// find() method will return the first element in the array which passes the given condition
// This find() method will return undefined if no element in the array statify the condition.

const finder = arr4.find(function (value, index, array) {
  // find() method will take a callback function that will return the value.
  console.log(value, index, array);
});

console.log(finder);


/*Array Methods
push(element): Adds one or more elements to the end of an array.
pop(): Removes the last element from an array.
shift(): Removes the first element from an array.
unshift(element): Adds one or more elements to the beginning of an array.
map(callback): Creates a new array with the results of calling a function on every element.
filter(callback): Creates a new array with all elements that pass the test implemented by the provided function.
reduce(callback, initialValue): Executes a reducer function on each element of the array.
forEach(callback): Executes a provided function once for each array element.
find(callback): Returns the value of the first element that satisfies the provided testing function. */