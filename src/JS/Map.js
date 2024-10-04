// Map is a object which has key value pairs.keys must be unique in map just like the object.
// Map object iterates the key,value,entries in the order of insertion.
// Syntax to create a map is : new Map()

// Diff between object and map

/*Disadvantages of using an object
1.An object doesn't have the built in size to determine its size.
2.Key of an object must be an string or a symbol, you can't use object as a key
3.An object always has a default key like the prototype
4.Objects do not guarantee any specific order of key-value pair based on the order of insertion*/

/* Advantages of using Map
1.Key and value pair can be any value
2.Map maintain the order of insertion based on the order of insertion.
3.Map has a size property
4.Map provides built-in properties like forEach,keys,values and entries for iteration over key-value pairs.*/

const obj = { age: 12, id: 23, age: 33 };
console.log(obj.age); // If we have two keys with the same name it will take the last key's value.It is also same for the map

// To create an empty Map
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
