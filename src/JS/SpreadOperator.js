// To extract/unpack/spread an array/object/string

// To extract an array to a new array, the syntax is[...array]

const arr1 = [1, 2, 3];
console.log(...arr1);

const arr2 = [...arr1];
console.log(arr2);

const arr3 = [arr1, 4, 5, 6];
console.log(...arr3);

const arr4 = [1, 2, 3, 4];
const arr5 = [5, 6, 7, 8];

console.log(...arr4, arr5);

const arr6 = [...arr4, arr5];
console.log(arr6);

// To extract an object to a new object, the syntax is{...object}
// The same as the array everything is possible
const obj1 = { key1: "value1", key2: "value2" };
console.log(...obj1);

const obj2 = { ...obj1 };
console.log(obj2);

const obj3 = { ...obj1, key3: "value3" };
console.log(obj3);

// To extract an text from a string, the syntax is[...text]
const text = "hello";
console.log([...text]); // This will return the text in a array like['h','e','l','l','o']
