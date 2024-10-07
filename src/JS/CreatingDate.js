// To create a date in js we can use the Date object, by using the constructor new Date()
// The Date will be string

const date = new Date();
console.log(date);

// We can give the custom date Date(year,month,date,hours,minutes,seconds,milliseconds)
// When we custom date the month january will starts from the 0 and the december month will end as 11.
const date1 = new Date(2024, 10, 7);
console.log(date1);

// We can also give the custom date as string
// But when giving the custom date as string the months will start from the january.
const date2 = new Date("2023-10-07");
console.log(date2);

// If you want to get the date/year/day/hours/minutes/seconds/milliseconds specifically you can do like this
console.log(date2.getDate());

console.log(date2.getFullYear());

// The day will also start from the 0 as sunday and 6 as saturday.
console.log(date2.getDay());

// To display only the day/month/date/year.
console.log(date2.toDateString());

// To dispaly the date in the Universal coordinate time
console.log(date2.toUTCString());

// To display the date in the International Organization for standardization time
console.log(date2.toISOString());

// To split a string
const date3 = date2.toISOString().split("T")[0]; // This [0] is to display the left side of the spliting word and for right use[1].
console.log(date3);

// To display the localdate
console.log(date2.toLocaleDateString()); // month/date/year;

console.log(date2.toLocaleDateString("en-GB")); // This is Great Britain format(date//month/year)

// To replace "/" with "-"
console.log(date2.toLocaleDateString("en-GB").replace(/\//g, "-"));

// To display the date with time
console.log(date2.toLocaleString());

// To get the date in millisecond
const ms = Date.now();
console.log(ms);

// To convert the millisecond timestamp into date
const date5 = new Date(ms);
console.log(date5);
