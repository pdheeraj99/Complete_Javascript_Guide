// ==================================================================
// ✂️ Phase 2: String Manipulation - Code Examples ✂️
// ==================================================================

// --- 1. Common String Methods ---
console.log("--- Common String Methods ---");
const greeting = "  Hello, JavaScript World!  ";

console.log("Original String:", `'${greeting}'`);
console.log("Length:", greeting.length); // Includes whitespace
console.log("charAt(3):", greeting.charAt(3)); // 'H'
console.log("indexOf('Java'):", greeting.indexOf('Java')); // 9
console.log("toUpperCase():", greeting.toUpperCase());
console.log("trim():", `'${greeting.trim()}'`);

// slice() - extracts a part of a string and returns a new string
const sliced = greeting.trim().slice(7, 17); // "JavaScript"
console.log("slice(7, 17) on trimmed string:", sliced);

// replace() - returns a new string with the replacement
const replaced = greeting.trim().replace("World", "Universe");
console.log("replace('World', 'Universe'):", replaced);

// split() - splits a string into an array of substrings
const words = greeting.trim().split(" ");
console.log("split(' '):", words); // ["Hello,", "JavaScript", "World!"]
console.log("\n");


// --- 2. String Immutability ---
console.log("--- String Immutability ---");
let myString = "Web";
console.log("Original myString:", myString);

let newString = myString.replace("W", "J"); // Creates a NEW string
console.log("newString after replace:", newString); // "Jeb"
console.log("Original myString is still:", myString); // "Web" - unchanged!

// To "update" myString, you must reassign it
myString = myString.replace("W", "J");
console.log("myString after reassignment:", myString); // "Jeb"
console.log("\n");


// --- 3. Converting between Strings and Arrays ---
console.log("--- String <-> Array Conversion ---");
// split(): String to Array
const csv = "item1,item2,item3,item4";
const csvArray = csv.split(',');
console.log("CSV string converted to array:", csvArray);

// join(): Array to String
const fruitArray = ["Apple", "Banana", "Cherry"];
const fruitString = fruitArray.join(" | ");
console.log("Fruit array converted to string:", fruitString);
console.log("\n");


// --- 4. Regular Expressions (Regex) Basics ---
console.log("--- Regex Basics ---");
const sentence = "The quick brown fox jumps over the lazy dog. The dog is very lazy.";

// Replacing only the first occurrence
const replacedOnce = sentence.replace("dog", "cat");
console.log("Replaced only the first 'dog':", replacedOnce);

// Using regex to replace ALL occurrences
// 'g' flag stands for "global"
const replacedAll = sentence.replace(/dog/g, "cat");
console.log("Replaced all 'dog's using /g:", replacedAll);

// Using 'i' flag for case-insensitive replacement
const mixedCaseSentence = "JavaScript is Fun, javascript is powerful.";
const replacedCaseInsensitive = mixedCaseSentence.replace(/javascript/gi, "JS");
console.log("Replaced all 'javascript' case-insensitively:", replacedCaseInsensitive);
console.log("\n");

console.log("🎉 Phase 2 Data Structures & Manipulation Complete! Well done! 🎉");
