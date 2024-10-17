let menu = [
  "Dosa",
  "Idly",
  "chappathi",
  "Boori",
  "icecream",
  "juice",
  "chocolate",
  "Meals",
  "Pasta",
  "coffee",
];
/*Use a for loop when:
You know how many times you need to iterate.
You need to manage an index for array access or counting.
Use a while loop when:
The number of iterations is not known in advance and depends on a condition.
You are reading input or performing tasks until a specific condition is met.*/

// 1st method to loop through an array
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}

// while loop
let index = 0;
while (index < menu.length) {
  console.log(menu[index]);
  index++;
}

// Using the forEach built in method, which takes function as an argument
menu.forEach(function (value, index, array) {
  // The function will pass three arguments
  console.log(value); // this will give the values of the array.

  console.log(index); // this 2nd argument will give the index of thr array

  console.log(array); // this 3rd argument will give the array itself.
});

/* Use for...of when:
You want to iterate over values of an array or other iterable.
You are focusing on the contents rather than the indices.
Use for...in when:
You need to iterate over the keys of an object.
Avoid using it with arrays unless you have a specific reason and are aware of its limitations.*/

// Using built-in for...of loop
// This is we use only if we want only the values of the array.
for (let x of menu) {
  console.log(x);
}

// Using built-in for...in loop
// This is used when you want to access the index of arrays or properties of the array.
for (let index in menu) {
  console.log(`Index :${index},Value : ${menu[index]}`);
}

//do...while, this will make sure that the loop will run atleast once.
let indexes = 0;
do {
  console.log(menu[indexes]);
  indexes++;
} while (indexes < menu.length);

// Using map method, this is method which will take callbackfn as a argument.
// Although primarily used to create a new array based on the original array.
menu.map((items) => {
  console.log(items);
  return items; // return is mandatory for map
});

// To access the items of an array.
/*Index Access
You can access an array element directly using its index (zero-based). */

const arr = ["apple", "banana", "cherry"];
console.log(arr[0]); // Output: 'apple'
console.log(arr[1]); // Output: 'banana'

/*Using for Loop
You can iterate over the array using a traditional for loop. */

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// Output: apple, banana, cherry

/* Using for...of Loop
The for...of loop allows you to iterate directly over the values of the array. */

for (const fruit of arr) {
  console.log(fruit);
}
// Output: apple, banana, cherry

/*Using forEach Method
The forEach method executes a provided function once for each array element. */

arr.forEach((fruit) => {
  console.log(fruit);
});
// Output: apple, banana, cherry

/* Using map Method
You can use the map method to create a new array by transforming each element. */

const upperCaseFruits = arr.map((fruit) => fruit.toUpperCase());
console.log(upperCaseFruits); // Output: ['APPLE', 'BANANA', 'CHERRY']

/*Using filter Method
You can use filter to access elements based on a condition, creating a new array. */

const longFruits = arr.filter((fruit) => fruit.length > 5);
console.log(longFruits); // Output: ['banana', 'cherry']

/* Using find Method
The find method returns the first element that satisfies a provided testing function. */

const foundFruit = arr.find((fruit) => fruit.startsWith("b"));
console.log(foundFruit); // Output: 'banana'

/*Using Destructuring
You can destructure an array to access its elements. */

const [first, second] = arr;
console.log(first); // Output: 'apple'
console.log(second); // Output: 'banana'

/* Using includes Method
Check if a specific value exists in the array (returns a boolean). */

console.log(arr.includes("banana")); // Output: true or false

/*
The splice method in JavaScript is used to modify an array by adding, removing, or replacing elements.
It changes the contents of the array in place and returns an array of the removed elements. */

// This will not create an new array, instead it will modify the original array.

// array.splice(start, deleteCount, item1, item2);
const spliceFruits = arr.splice(0, 2);
console.log(spliceFruits);

/*Parameters
start: The index at which to start changing the array.
deleteCount: The number of elements to remove from the array starting at the start index. If set to 0, no elements are removed.
item1, item2, ... (optional): The elements to add to the array starting at the start index. If no items are specified,
splice will only remove elements. */

/*A shallow copy of an array means creating a new array that contains references to the same elements as the original array, 
rather than duplicating the elements themselves. This means that if the original array contains objects or nested arrays,
changes to those objects or nested structures will be reflected in both the original and the copied array.

Key Characteristics of a Shallow Copy
References: The new array holds references to the same objects or nested arrays as the original array.
Primitive Types: If the array contains primitive types (like numbers or strings), they are copied by value,
meaning changes to those values in one array won't affect the other. */

/*slice Method
The slice method returns a shallow copy of a portion of an array. */

const slicedFruits = arr.slice(1, 3);
console.log(slicedFruits); // Output: ['banana', 'cherry']

const spreadFruits = [...arr];
console.log(spreadFruits); // This will also create a shallow copy of an array.   //reduce,from
