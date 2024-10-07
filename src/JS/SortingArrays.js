// Sort() method is used to sort the array, it defaultly sorts the array in the alphabetical Ascending order.
// if the string as number(ie. "23"), then it will not sort based on the numerical value, instead of that it will sort based on the unicode value of the number.
// Sort() method will overwrite and changes the original array.

const arrays = [
  "Iron Man",
  "Caption America",
  "Super Man",
  "Groot",
  "Rocket",
  "E-Man",
];

const sortedArray = arrays.sort();
console.log(sortedArray);

// This will also change the original Array also.
console.log(arrays);

// To do the sorting in the reverse order means Descending order.
const descendingArray = arrays.sort().reverse(); // reverse() method will reverse the array which id given.
console.log(descendingArray);

// Sort() method for numbers
const numbers = [9, 3, 12, 11, 40, 28, 5];

const sortedNumbers = numbers.sort();
console.log(sortedNumbers);

// Here the output will like[11,12,28,3,40,5,9];
// Because here the number is first converted into an string and sort based on the unicode characters.

// To sort the numbers in the correct way we have to pass a function in the sort method.
const SortedNum = numbers.sort(function (a, b) {
  return a - b;
});
console.log(SortedNum);

// To Sort the numbers array in the correct way use(a-b);
/* If a is less than b, a-b will return a negative value, indicating that a should come before b.(eg  5-10 = -5)
If a is equal to b, it will return a 0
if a is greater than b, a-b will return the positive value, indicating that b should come before a. (eg 10-5 = 5)*/

// To do sorting of the numbers in the descending order
const descendingNum = numbers.sort(function (a, b) {
  return b - a;
});
console.log(descendingNum);
