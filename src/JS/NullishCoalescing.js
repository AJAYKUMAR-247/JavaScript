// ?? This is nullish coalescing operator
// This will execute the right hand side if only the left hand side is null or undefined.

var var1 = null;
var var2 = undefined;

const res = var1 ?? "From the right side";
console.log(res);

const ress = var2 ?? "From the right side";
console.log(ress);

// This is nullish coalescing assignment
// If the value of the left hand side is null or undefined then it will take the value on the right hand side
var var3 = null;
const var4 = (var3 ??= 25);
console.log(var4);
