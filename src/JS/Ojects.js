// like array objects can store all type of datas

let mixedObject = {
  id: 1,
  name: null,
  address: undefined,
  greeting: function (Name) {
    console.log(`Hi I'm ${Name}`);
  },
  object: {
    id: 2,
    email: "ajay@gmail.com",
  },
};

console.log(mixedObject);

// To access the properties of the object (use . or [""] to access the properties)
console.log(mixedObject.id);

// To access the nested object properties
console.log(mixedObject.object["email"]);

// To Access the function in object, use key
mixedObject.greeting("Ajay");

// We can also add an properties to the existing object
mixedObject.phone = "+9876543210";
console.log(mixedObject.phone);

// To delete an property of the object, use delete keyword
delete mixedObject.phone;
console.log(mixedObject.phone); // This will give you a error(undefined), when you try to access an property which is not available.

// To use the existing variable name as the name of the key.
let firstName = "Ajay";
let person = {
  // The name of the property is taken from the firstName's value.
  [firstName]: 20,
};

console.log(person.Jack);

const obj2 = {
  name: "ajay",
  age: 34,
  email: "asdasd@mail",
};

const keyValues = Object.values(obj2);

let filtered = keyValues.filter(function (key) {
  return obj2[key].length > 5;
});

console.log(filtered);

/*Object Methods
Object.keys(obj): Returns an array of a given object's own enumerable property names.
Object.values(obj): Returns an array of a given object's own enumerable property values.
Object.entries(obj): Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
Object.assign(target, ...sources): Copies the values of all enumerable properties from one or more source objects to a target object.
Object.freeze(obj): Freezes an object, preventing new properties from being added and existing properties from being removed or changed. */