// The bind() method will create a new function

const obj = {
  id: 12,
  displaysName: function () {
    console.log(this);
  },
};

let userName = obj.displaysName;
userName(); // here the value of the this will be window because we didn't call it inside any function or method

// To overcome this use bind() method
userName = obj.displaysName.bind(obj);
userName(); // Now this keyword value is equal to the object.

setTimeout(obj.displaysName, 2000);

setTimeout(obj.displaysName.bind(obj), 2000);

const obj2 = {
  id: 22,
  display: function () {
    console.log(`${this.id}`);
  },
};

let user = obj2.display.bind(obj2);
console.log(user); // only now the value of the this will be bind to the object.
