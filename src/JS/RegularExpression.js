/* regular expressions are patterns/rules that help you describe, find, or change text. They're like special codes you use to do things like find words, replace text, or check if data is correct. In JavaScript, you can use regular expressions as objects to perform tasks like finding matches in strings, replacing text, or splitting strings into parts so regular expressions are also objects. In JavaScript, you can use regular expressions by putting them between two forward slashes like this: /pattern/. Or you can create them using the RegExp function like this: new RegExp('pattern').

      Below we have the components/parts/building blocks of regular expressions those are literal characters,metacharacters,quantifiers,anchors,character classes,flags each described.

      Literal Characters: Regular expressions can have regular letters and symbols that match exactly themselves. For example, the regex /okay/ finds the word "okay" wherever it appears in text.

      Metacharacters: Regular expressions use metacharacters to specify more complex patterns:
        1) . Matches any single character except newline.
        2) ^ Matches the start of a string.
        3) $ Matches the end of a string.
        4) * Matches the preceding character zero or more times.
        5) + Matches the preceding character one or more times.
        6) ? Matches the preceding character zero or one time.
        7) [] Matches any single character within the brackets.
        8) () Groups regular expressions together.
        9) | Acts like a boolean OR, matches the expression before or after it.
        10) \ Escapes special characters or indicates a special sequence (e.g., \d matches a digit character).
        11) \b Matches a word boundary.


      Quantifiers: Quantifiers specify how many times a character or group may occur. Common quantifiers include:
        1) * Matches zero or more occurrences.
        2) + Matches one or more occurrences.
        3) ? Matches zero or one occurrence.
        4) {n} Matches exactly n occurrences.
        5) {n,} Matches n or more occurrences.
        6) {n,m} Matches between n and m occurrences.


      Anchors: Anchors are used to indicate positions in the string:
        1) ^ indicates the start of a string.
        2) $ indicates the end of a string.


      Character Classes: Character classes match specific sets of characters:
        1) \d Matches any digit character.
        2) \w Matches any word character (alphanumeric character plus underscore).
        3) \s Matches any whitespace character.
        4) \D, \W, \S Matches any character that is not a digit, word character, or


      Flags: Regular expressions can also have options that change how they work when finding text:
        1) i Case-insensitive matching.
        2) g Global matching (find all matches rather than stopping after the first match).
        3) m Multiline matching (treats beginning and end characters (^ and $) as working across multiple lines).

      */

const sentence = "airport is this way.";

// To define a pattern we use the forward slashes and in between enter the pattern also called as regular expression literal we are looking for.So below, we define a regular expression pattern to match the word "air" but the problem with this is that it can't tell you if the word 'air' in this case is used as a whole separately in a sentence or exist within another word such as 'port' , we will get true in both cases from the test method
const regex = /air/;

// built-in 'test' method is used on a regular expression object to test if a string matches the regular expression pattern.  It returns 'true' if the pattern is found within the string and 'false' otherwise. our 'regex' variable is a regular expression so we can use the test method on it
console.log(regex.test(sentence));

//  To find the word 'air' as a whole word separated from the other words in a sentence(but it can include space,comma,exclamation mark or similar non-word characters), use \b \b , it helps ensure that the pattern matches a position between a word character and a non-word character like comma, space, exclamation mark and so on. The reason we have a backslash \ before the metacharacter 'b' is that we need to escape 'b' because it is a special character and if you don't use backslash \ then 'b' would be the part of the pattern we are looking for so it would be 'bair' not 'air' so we are saying that use the special b metacharacter by using \b.
const regex2 = /\bair\b/;

//   We get false this time because regex2 means find the word 'air' as a whole word separated from the other words and 'air' in the sentence variable exists in the word 'airport' so 'air' is not a whole word used separately from the other words in the sentence.
console.log(regex2.test(sentence));

// But you see that regex gives true because regex uses the /air/ syntax meaning that if there is the word 'air' anywhere in the sentence then test will be true
console.log(regex.test(sentence));

const sentence2 = "There isn't enough air";
//testing the regular expression regex2 on sentence2 below works,we get true, why? Because the word 'air' is separate this time from the other words and separated by the non-word character which is space
console.log(regex2.test(sentence2));

//We still get true below because air is still used as a separate whole word and followed by a non-word character which is ! and remember having non-word characters,special characters next to the pattern('air') is okay
const sentence3 = "There isn't enough air!";
console.log(regex2.test(sentence3));

/*
        [] is a metacharacter that matches any single character within the brackets
  
        a-z Matches any lowercase letter from 'a' to 'z' in the set such as [a-zA-Z0-9._%+-]
        
        A-Z Matches any uppercase letter from 'A' to 'Z in the set  
        
        0-9 Matches any digit from '0' to '9' in the set  
        
        ._%+-: Matches any of the special characters period '.', underscore '_', percent '%', plus '+', or minus '-' so we can use these characters.
  
        The + sign right before the @ symbol means one or more characters from that set that is [a-zA-Z0-9._%+-] should occur before the "@" symbol.
  
        [a-zA-Z0-9.-] Matches one or more occurrences of characters that can be lowercase or uppercase letters, digits, dots, or hyphens, representing the domain part of the email address.
  
        \. Matches a literal dot (.), separating the domain name from the com , net,org,info,biz or similar so this means that dot most come right before
  
        The last [a-zA-Z] means character set that matches any single uppercase or lowercase letter.
        
        {} means a quantifier, {2,} means the minimum number of occurrences. In this case, {2,} 'means match two or more occurrences of the preceding character set'. So, [a-zA-Z]{2,} means 'match two or more occurrences of any uppercase or lowercase letter' so that we have something like co,uk,com,net,ai,biz and so on
  
        */
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

const email = "john00example@example.com";

if (emailRegex.test(email)) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}

const sentence4 = "I need to decode this video";
const regex3 = /code/;

//   the built-in exec method is used on a regular expression and returns an array that has the pattern, index of the first occurrence of the pattern that matches the regular expression, input and groups which is used to divide searched patterns into groups
const result = regex3.exec(sentence4);

//   We get 12 for index meaning that the first index where the pattern(code) occurred is the 12th index
console.log(result);

// How to find all the words in the text that has currency ?
const sentence5 =
  "Currency exchange rates fluctuate daily. If your economy is not stable currency will keep changing.";

// Notice we used the g Global matching flag. If we didn't use 'g' flag then we would only get the first occurrence and we also used 'i' Case-insensitive matching flag. Because we have Currency word in the sentence with a capital C
const regex4 = /\bcurrency\b/gi;

console.log(regex4.test(sentence5));

//To find the patterns(in this case 'currency') we are looking for and get them in an array, we can use the built in 'match' method on any string(sentence5 in this case) which can take a regex as an argument and it will return all the patterns in an array
const matches = sentence5.match(regex4);
// We get all the results in an array
console.log(matches);

//How to replace all the occurrences of the word 'currency' with 'money' in the sentence below?
const sentence6 =
  "Currency conversion is necessary for international trade. Different countries use different currency.";

// We can use the built-in replace method on any string and sentence6 variable is a string, replace method can take a regex as an argument and replaces the text you want with whatever you want. notice the regex has i flag for case insensitivity and the g flag to find all occurrences
const newSentence = sentence6.replace(/\bcurrency\b/gi, "money");

console.log(newSentence);

// built-in search method can be applied on a string(sentence6) and take an argument as regex then returns the first index of the pattern(currency) we are looking for.Notice we have the i flag
const position = sentence6.search(/\bcurrency\b/i);
console.log(position);

// Regular expressions can be created using the RegExp() constructor and the first argument we pass is the pattern you want to search for and the second are the flags.
const reg = new RegExp("\\bcurrency\\b", "gi");

// We can now again use any of the regex methods such as test,exec ...
console.log(reg.test(sentence6));
console.log(reg.exec(sentence6));

