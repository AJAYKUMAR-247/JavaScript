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
