// shallowcopy means that the two varaibles holding the address of the same object or array.
// In javascript, the primitive data types are assigned by value
// Whereas non-primitives like array and object are assigned by reference(holding the same address).

const originalObject = { id: 12, name: "ajay", age: 34 };

const shallowcopy = originalObject;

shallowcopy.age = 44;
console.log(originalObject);
console.log(shallowcopy);
// Both in this object the value of the age is changed.

const originalObject2 = { a: 1, b: { c: 1 } };

const nestedObject = { ...originalObject2 };

nestedObject.a = 5;
console.log(originalObject2); // The value is not changed here, because we created a new object by coping it.So top-level properties not linked
console.log(nestedObject); // The value is only changed here.

nestedObject.b.c = 10;
console.log(originalObject2); // Here the value of the nested object is changed, because nested objects are still shared between originalObject2 and nestedObject.
console.log(nestedObject);

// Same for the arrays

const originalArray = [1, 2, 3, 4];

const shallowArray = originalArray;

shallowArray[1] = 10;
console.log(originalArray);
console.log(shallowArray);
// Here this will change in both of the array
