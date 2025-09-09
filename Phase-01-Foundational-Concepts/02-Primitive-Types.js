// ==================================================================
// 🧱 Phase 1: Primitive Data Types - Code Examples 🧱
// ==================================================================

// `typeof` operator ni use chesi variable yokka type ni chuddam.

// --- 1. String ---
console.log("--- String Type ---");
const singleQuoteString = 'Hello, World!';
const doubleQuoteString = "JavaScript is awesome!";
const name = "Mahesh";
const templateLiteralString = `Hello, ${name}! Welcome.`; // Most flexible way

console.log(singleQuoteString, `(Type: ${typeof singleQuoteString})`);
console.log(doubleQuoteString, `(Type: ${typeof doubleQuoteString})`);
console.log(templateLiteralString, `(Type: ${typeof templateLiteralString})`);
console.log("\n");

// --- 2. Number ---
console.log("--- Number Type ---");
const integerNumber = 42;
const floatNumber = 3.14;
const negativeNumber = -15;

console.log(integerNumber, `(Type: ${typeof integerNumber})`);
console.log(floatNumber, `(Type: ${typeof floatNumber})`);
console.log(negativeNumber, `(Type: ${typeof negativeNumber})`);

// Special Number values
const infinity = Infinity;
const notANumber = NaN; // Example: 0 / 0 results in NaN
console.log(infinity, `(Type: ${typeof infinity})`);
console.log(notANumber, `(Type: ${typeof notANumber})`);
console.log("\n");

// --- 3. Boolean ---
console.log("--- Boolean Type ---");
const isLearning = true;
const isTired = false;

console.log(`Are we learning JS? ${isLearning}`, `(Type: ${typeof isLearning})`);
console.log(`Are we tired? ${isTired}`, `(Type: ${typeof isTired})`);
console.log("\n");

// --- 4. Undefined ---
console.log("--- Undefined Type ---");
let car; // Variable declared but no value assigned
console.log(`Value of car is: ${car}`, `(Type: ${typeof car})`);
console.log("\n");

// --- 5. Null ---
console.log("--- Null Type ---");
let loggedInUser = null; // Intentionally set to no value
console.log(`Logged in user: ${loggedInUser}`, `(Type: ${typeof loggedInUser})`);
// IMPORTANT: This is a famous JS quirk. typeof null is 'object'!
console.log("Watch out! The type of null is actually 'object'. This is a long-standing bug.");
console.log("\n");

// --- 6. Symbol ---
console.log("--- Symbol Type ---");
const sym1 = Symbol('id');
const sym2 = Symbol('id');

console.log(sym1 === sym2); // false -> Symbols are always unique
console.log(`sym1 type is: ${typeof sym1}`);

const user = {
  email: 'user@example.com',
  [sym1]: 'user-secret-key' // Using a symbol as an object key
};
console.log("User object with symbol key:", user);
console.log("Accessing value via symbol:", user[sym1]);
console.log("\n");

// --- 7. BigInt ---
console.log("--- BigInt Type ---");
const regularMaxSafeInteger = Number.MAX_SAFE_INTEGER;
console.log("Max safe integer in JS:", regularMaxSafeInteger);

const largeNumber = 90071992547409911234n; // 'n' makes it a BigInt
const anotherLargeNumber = BigInt("12345678901234567890");

console.log(`largeNumber: ${largeNumber}`, `(Type: ${typeof largeNumber})`);
console.log(`anotherLargeNumber: ${anotherLargeNumber}`, `(Type: ${typeof anotherLargeNumber})`);

// You cannot mix BigInt and Number in operations
try {
  // let result = largeNumber + 10; // This will throw a TypeError
} catch (e) {
  console.log("Error mixing BigInt and Number:", e.message);
}

// You must convert the number to a BigInt first
let result = largeNumber + 10n;
console.log("Result of BigInt addition:", result);
