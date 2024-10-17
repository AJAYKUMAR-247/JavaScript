// Map is a object which has key value pairs.keys must be unique in map just like the object.
// Map object iterates the key,value,entries in the order of insertion.
// Syntax to create a map is : new Map()

// Diff between object and map

/*Disadvantages of using an object
1.An object doesn't have the built in size to determine its size.
2.Key of an object must be an string or a symbol, you can't use object as a key
3.An object always has a default key like the prototype
4.Objects do not guarantee any specific order of key-value pair based on the order of insertion*/

/* Advantages of using Map object
1.Key and value pair can be any value
2.Map maintain the order of insertion based on the order of insertion.
3.Map has a size property
4.Map provides built-in properties like forEach,keys,values and entries for iteration over key-value pairs.*/

const obj = { age: 12, id: 23, age: 33 };
console.log(obj.age); // If we have two keys with the same name it will take the last key's value.It is also same for the map

// To create an empty Map object
const someMap = new Map();

// To set values to a Map
someMap.set("age", 12);

// To get the Values from map
console.log(someMap.get("age"));

// To see the size of the map
console.log(someMap.size);

// To delete properties from the map
someMap.delete("age");
console.log(someMap);

// To check whether the map has a specific key
console.log(someMap.has("age"));

// We can use forEach to loop through an map, this forEach will give the key,value pair.
someMap.forEach(function (key, value) {
  console.log(key, value);
});

// Looping map through entries will return the key,value pair in square brackets[key,value]
for (const i of someMap.entries()) {
  console.log(i);
}

// looping through keys
for (const i of someMap.keys()) {
  console.log(i); // This will give only the keys values.
}

//looping through values
for (const i of someMap.values()) {
  console.log(i); // This will give only the values.
}

// To clear the Map completely
someMap.clear();
console.log(someMap);

// We can also add the key/value pair into the new Map()
const someMap1 = new Map([
  ["id", 12],
  ["age", 23],
  ["name", "ajay"],
]);

console.log(someMap1);

/*Map Methods
set(key, value)

Adds a new element with the specified key and value to the Map. If the key already exists, the value is updated.
 */
const myMap = new Map();
myMap.set("a", 1);
myMap.set("b", 2);

/*get(key)

Returns the value associated with the specified key, or undefined if the key does not exist.
 */
console.log(myMap.get("a")); // Output: 1
console.log(myMap.get("c")); // Output: undefined

/*has(key)

Returns a boolean indicating whether the Map contains a value for the specified key.
 */
console.log(myMap.has("b")); // Output: true
console.log(myMap.has("c")); // Output: false

/*delete(key)

Removes the specified element from the Map by key. Returns true if the element was successfully removed; otherwise, returns false.
 */
myMap.delete("a");
console.log(myMap.has("a")); // Output: false

/*clear()

Removes all elements from the Map. */
myMap.clear();
console.log(myMap.size); // Output: 0

/*size

A property that returns the number of key-value pairs in the Map. */
console.log(myMap.size); // Output: 0 (after clearing)

/*keys()

Returns a new Iterator object that contains the keys for each element in the Map in insertion order. */
myMap.set("x", 10);
myMap.set("y", 20);
const keys = myMap.keys(); // This method will return the data as Map Iterator {1,2,3}, iterator is an indeed object.

// To covert a map into an array.
console.log([...keys]); // Output: ['x', 'y']

// To convert a map into an object.
const asObject = Object.fromEntries(myMap);
console.log(asObject); // Output: { a: 1, b: 2, c: 3 }

/*values()

Returns a new Iterator object that contains the values for each element in the Map in insertion order. */
const values = myMap.values(); // This will also return the data as an iterator or Map Iterator.
console.log([...values]); // Output: [10, 20]

/*entries()

Returns a new Iterator object that contains an array of [key, value] for each element in the Map in insertion order. */
const entries = myMap.entries(); // This will also return the data as an iterator or Map Iterator.
console.log([...entries]); // Output: [['x', 10], ['y', 20]]

/* forEach(callback)

Executes a provided function once for each key-value pair in the Map. */

myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
