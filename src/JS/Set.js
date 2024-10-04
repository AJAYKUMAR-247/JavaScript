// Set is used to store the unique values, there is no keys in the set
// Set will maintain the order of insertion

// To create a set use new Set() method

const someSet = new Set();
console.log(someSet); // someSet is an empty set.

// To add values to an Set use built-in add method.
// We can add any type of data to an set, but the values should be unique.
someSet.add(12);
someSet.add("Hello");
someSet.add(false);
someSet.add(null);
someSet.add([1, 2, 3]);

console.log(someSet);

// If we try to add an existing element, in a set that is not possible, because Set will check for the value.
// Primitive data types are referenced by values. But the Non-primitive types such as array and object are referenced by address.

someSet.add("Hello"); // This is not possible.
someSet.add([1, 2, 3]); // This is possible.

var arr = [4, 5, 6];
someSet.add(arr);

console.log(someSet);

// If we try to add the same arr which is declared using the variable will hold the same address in the memory.
someSet.add(arr);
console.log(someSet); // Now the arr will not added again

// To delete an item in a Set use delete() method, this will require the specific value.
someSet.delete(12);
console.log(someSet);

// We can also loop through an Set
for (const val of someSet) {
  console.log(val);
}

// We can place an iterable such as an array in between the parentheses when creating the set.
const someSet2 = new Set([1, 2, 3, 4]);
console.log(someSet2);

// Values() method is used to get all the values of the Set.
const values = someSet.values();
console.log(values);

// We can loop through the iterable, because the values() method will return a iterable.
for (const val of values) {
  console.log(val);
}

// We can also loop using entries
const entry = someSet2.entries();
for (const ent of entry) {
  console.log(ent); // This will give the value as [value,value] pair because there is no key in set.
}

// To check whether that the specific item is there or not in the set use built-in has() method.
console.log(someSet2.has(12));
// If it has the value it gives true or else false.

// We can also loop using forEach
someSet.forEach(function (value) {
  console.log(value);
});

// Even for a string it takes the value only once
const someSet3 = new Set("This is Set");
console.log(someSet3); // This will remove the repeated letters in the set.

// We can use size keyword to get how many elements in the set.
console.log(someSet3.size);
