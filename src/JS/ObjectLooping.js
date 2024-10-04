let User = {
  id: 24,
  name: "ajay",
  age: "21",
  contact: {
    phoneNo: 9876543210,
    email: "ak@mail",
  },
};

// Use for...in loop
for (let i in User) {
  console.log(i);
}

// Using Object.keys method
Object.keys(User).forEach(function (key) {
  // keys is a method that will return the object's key in a array so we're using the forEach loop to access the array
  console.log(User[key]);
});

// Using object.values method
Object.values(User).forEach(function (values) {
  // values method will return the values of the object in the array. So using the forEach loop to access the array.
  console.log(values); // values method will directly gives the value so we can give use the values directly.
});

// Using object.entries method
Object.entries(User).forEach(function ([key, value]) {
  // entries method will return a array of array, the one array contain key/value pairs
  console.log(key);
  console.log(value);
});

// using for...of loop with Object.values
for (const value of Object.value(User)) {
  console.log(value);
}

// Using for...of loop with Object.keys
for (const key of Object.keys(User)) {
  console.log(key); //for key
  console.log(User[key]); //for values
}

// Using for...of loop with Object.entries
for (const [key, value] of Object.entries(User)) {
  console.log(`${key} : ${value}`);
}
