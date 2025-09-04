// ============================================================================
// Section 1: JavaScript Fundamentals - Code Examples
// To run this file, you need Node.js installed.
// Open your terminal, navigate to this file's directory, and run: node 01-fundamentals.js
// ============================================================================

console.log("--- JavaScript Fundamentals Code Examples ---");

// 2. Setting Up
// You can run this line in your browser's console (F12)
console.log('Hello from a JS file! 👋');

console.log("\n--- 3. Variables & Constants ---");
let age = 25;
console.log("Initial age:", age);
age = 26;
console.log("Updated age:", age);

const birthYear = 1999;
console.log("Birth Year:", birthYear);
// The line below would cause an error if uncommented:
// birthYear = 2000; // TypeError: Assignment to constant variable.

// Common Mistake with `const`
const user = { name: 'Raju' };
console.log("Original user object:", user);
user.name = 'Ravi'; // This is allowed because we are modifying the object's property
console.log("Modified user object:", user);
// The line below would cause an error:
// user = { name: 'Sita' }; // TypeError: Assignment to constant variable.

console.log("\n--- 4. Data Types ---");
let aString = "Hello, World!";
let aNumber = 42;
let aBoolean = true;
let aNullValue = null;
let anUndefinedValue = undefined;
let anObject = { key: 'value' };

console.log("Type of 'Hello':", typeof aString);       // "string"
console.log("Type of 42:", typeof aNumber);         // "number"
console.log("Type of true:", typeof aBoolean);       // "boolean"
console.log("Type of null:", typeof aNullValue);       // "object" (the famous bug!)
console.log("Type of undefined:", typeof anUndefinedValue); // "undefined"
console.log("Type of {}:", typeof anObject);       // "object"

console.log("\n--- 5. Type Coercion ---");
console.log("'5' - 3 =", '5' - 3); // String is coerced to a number
console.log("'5' + 3 =", '5' + 3); // Number is coerced to a string

console.log("Loose equality (5 == '5'):", 5 == '5');   // true
console.log("Strict equality (5 === '5'):", 5 === '5'); // false

// Tricky Interview Questions
console.log("[] + [] =", [] + []);                 // "" (empty string)
console.log("[] + {} =", [] + {});                 // "[object Object]"
console.log("{} + [] =", {} + []);                 // 0 in Node.js, "[object Object]" in browser console

console.log("\n--- 6. Basic Operators ---");
// Logical Operator Short-circuiting
console.log("true || someFunction():", true || console.log("This will NOT run"));
console.log("false && someFunction():", false && console.log("This will NOT run"));

console.log("\n--- 7. Strings ---");
// Template Literals
const name = 'Krishna';
const greeting = `Hello, ${name}! Welcome to the team.`;
console.log(greeting);

// --- String Methods ---

// Category 1: Searching & Finding
console.log("'Hello World'.includes('World'):", 'Hello World'.includes('World')); // true
console.log("'Hello World'.indexOf('o'):", 'Hello World'.indexOf('o'));       // 4
console.log("'Hello World'.lastIndexOf('o'):", 'Hello World'.lastIndexOf('o')); // 7
console.log("'Hello World'.startsWith('Hello'):", 'Hello World'.startsWith('Hello')); // true
console.log("'Hello World'.endsWith('World'):", 'Hello World'.endsWith('World'));   // true

// Category 2: Extracting Parts
console.log("'JavaScript'.slice(0, 4):", 'JavaScript'.slice(0, 4)); // "Java"
console.log("'JavaScript'.substring(4, 10):", 'JavaScript'.substring(4, 10)); // "Script"

// Category 3: Creating New Strings
console.log("'hello'.toUpperCase():", 'hello'.toUpperCase()); // "HELLO"
console.log("'WORLD'.toLowerCase():", 'WORLD'.toLowerCase()); // "world"
console.log("'Hello World'.replace('World', 'JS'):", 'Hello World'.replace('World', 'JS')); // "Hello JS"
console.log("'ha ha ha'.replaceAll('ha', 'he'):", 'ha ha ha'.replaceAll('ha', 'he')); // "he he he"
console.log("'  Hello  '.trim():", '  Hello  '.trim()); // "Hello"
console.log("'apple,banana,grape'.split(','):", 'apple,banana,grape'.split(',')); // [ 'apple', 'banana', 'grape' ]

// Category 4: Accessing Characters
console.log("'Hello'.charAt(1):", 'Hello'.charAt(1)); // "e"
console.log("'Hello'.at(-1):", 'Hello'.at(-1));     // "o"

// Common Mistake with Strings (Immutability)
let myString = "  some text  ";
myString.trim(); // The result is not stored, so myString is unchanged
console.log("Original myString after trim() without assignment:", `"${myString}"`);

// Correct way
let myCorrectString = "  some text  ";
myCorrectString = myCorrectString.trim();
console.log("Correctly trimmed string:", `"${myCorrectString}"`);

// Tricky Interview Question: How to reverse a string?
const originalString = "JavaScript";
const reversedString = originalString.split('').reverse().join('');
console.log(`Reversing "${originalString}":`, `"${reversedString}"`); // "tpircSavaJ"

console.log("\n--- End of Examples ---");
