const testData = {
  message: "[apple,banana,cherry]",
};

// /[\[\]]/g is the regular expression pattern.
// [...]: This defines a character set, meaning "match any one of these characters."
// \[ and \]: These are escaped square brackets. Square brackets are special characters in regex, so they need to be escaped with a backslash (\) to be treated literally.
// g: This flag stands for "global," meaning the replacement will occur for all instances of the matched characters in the string, not just the first one.

const extractedData = testData?.message.replace(/[\[\]]/g, "").split(",");

console.log(extractedData); // This will come as a array, because the split will defaultly return as a array.

// To convert a array into an array an object

const arrayObject = extractedData.map((data) => ({
  functionCode: data,
}));

console.log(arrayObject); // Remember we have to pass the data as array of object to display in the table.
