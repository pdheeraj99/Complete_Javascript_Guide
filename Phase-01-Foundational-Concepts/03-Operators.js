// ==================================================================
// 🧮 Phase 1: Operators in JavaScript - Code Examples 🧮
// ==================================================================

// --- 1. Arithmetic Operators ---
console.log("--- Arithmetic Operators ---");
let a = 15;
let b = 4;
console.log(`a = ${a}, b = ${b}`);
console.log(`a + b = ${a + b}`);       // Addition
console.log(`a - b = ${a - b}`);       // Subtraction
console.log(`a * b = ${a * b}`);       // Multiplication
console.log(`a / b = ${a / b}`);       // Division
console.log(`a % b = ${a % b}`);       // Modulus (Remainder) -> 15 / 4 is 3 with a remainder of 3
console.log(`5 ** 2 = ${5 ** 2}`);     // Exponentiation (5 to the power of 2)
console.log("\n");

// --- 2. Assignment Operators ---
console.log("--- Assignment Operators ---");
let score = 100;
console.log("Initial score:", score);
score += 50; // score = score + 50
console.log("After += 50:", score);
score -= 25; // score = score - 25
console.log("After -= 25:", score);
score *= 2;  // score = score * 2
console.log("After *= 2:", score);
console.log("\n");

// --- 3. Comparison Operators ---
console.log("--- Comparison Operators ---");
let num = 7;
let strNum = "7";

console.log(`num = ${num} (number), strNum = "${strNum}" (string)`);

// Loose Equality (==) - Avoid using this!
console.log(`num == strNum  -> ${num == strNum}`);   // true, because it converts string "7" to number 7 before comparing.

// Strict Equality (===) - Always use this!
console.log(`num === strNum -> ${num === strNum}`);  // false, because type is different (number vs string).

// Not Equal (!= and !==)
console.log(`num != strNum  -> ${num != strNum}`);   // false
console.log(`num !== strNum -> ${num !== strNum}`);  // true, because types are different.

console.log(`10 > 5 -> ${10 > 5}`);
console.log(`10 <= 10 -> ${10 <= 10}`);
console.log("\n");


// --- 4. Logical Operators ---
console.log("--- Logical Operators ---");
let hasGoodMarks = true;
let hasAttendance = false;

// Logical AND (&&)
console.log(`Can student get distinction? (hasGoodMarks && hasAttendance) -> ${hasGoodMarks && hasAttendance}`);

// Logical OR (||)
console.log(`Can student pass the exam? (hasGoodMarks || hasAttendance) -> ${hasGoodMarks || hasAttendance}`);

// Logical NOT (!)
console.log(`Is student NOT having good marks? (!hasGoodMarks) -> ${!hasGoodMarks}`);
console.log("\n");


// --- 5. Ternary Operator ---
console.log("--- Ternary Operator ---");
let userAge = 17;
let canDrive = (userAge >= 18) ? "Yes, can drive 🚗" : "No, cannot drive 🚫";
console.log(`User is ${userAge} years old. Can they drive? ${canDrive}`);

let anotherAge = 25;
let canDrive2 = (anotherAge >= 18) ? "Yes, can drive 🚗" : "No, cannot drive 🚫";
console.log(`Another user is ${anotherAge} years old. Can they drive? ${canDrive2}`);
console.log("\n");


// --- Type Coercion Example with Operators ---
console.log("--- Type Coercion Fun ---");
console.log("5 + '5' =", 5 + '5'); // The + operator with a string performs concatenation. Result: "55"
console.log("10 - '5' =", 10 - '5'); // The - operator converts the string '5' to a number. Result: 5
console.log("10 * '5' =", 10 * '5'); // The * operator also converts. Result: 50
console.log("true + 1 =", true + 1);   // true is coerced to 1. Result: 2
console.log("false + 1 =", false + 1); // false is coerced to 0. Result: 1
// This is why `===` is so important, to avoid these weird behaviors!
