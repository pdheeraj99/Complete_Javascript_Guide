// ==================================================================
// 🎤 Phase 1: Functions Fundamentals - Code Examples 🎤
// ==================================================================

// --- 1. Function Declaration and Calling ---
console.log("--- Function Declaration & Calling ---");

// Declaring a function that calculates the area of a rectangle
function calculateArea(width, height) {
  const area = width * height;
  console.log(`The area of a rectangle with width ${width} and height ${height} is ${area}.`);
}

// Calling the function with different arguments
calculateArea(10, 5);
calculateArea(20, 15);
console.log("\n");


// --- 2. The `return` Statement ---
console.log("--- The `return` Statement ---");

// This function returns a value, which we can store in a variable
function createGreeting(name) {
  const greeting = `Hello, ${name}!`;
  return greeting;
}

const messageForRavi = createGreeting("Ravi");
console.log(messageForRavi);

const messageForSita = createGreeting("Sita");
console.log(messageForSita);

// A function with no `return` statement implicitly returns `undefined`
function logSomething(text) {
  console.log(text);
}
const returnedValue = logSomething("This is just a log.");
console.log("Value returned from logSomething:", returnedValue); // It will be undefined
console.log("\n");


// --- 3. Function Scope (Local vs. Global) ---
console.log("--- Function Scope ---");

const appName = "My Awesome App"; // Global variable

function showAppDetails() {
  const version = "v1.0"; // Local variable
  console.log(`Welcome to ${appName} (Version: ${version})`);
}

showAppDetails();

console.log(`The app name is: ${appName}`); // Works fine
// console.log(version); // This would cause a ReferenceError because `version` is local to showAppDetails.
console.log("\n");


// --- 4. Function Declaration vs. Expression (Hoisting) ---
console.log("--- Function Declaration vs. Expression ---");

// a) Function Declaration
// We can call it BEFORE it's defined because of hoisting.
console.log("Calling declared function (hoisted):", add(5, 5));

function add(a, b) {
  return a * b;
}

// b) Function Expression
// Assigning an anonymous function to a variable.
const multiply = function(a, b) {
  return a * b;
};

// We can only call it AFTER it's defined.
console.log("Calling function expression:", multiply(5, 5));

// Uncommenting the line below would throw an error because `multiply` is not initialized yet.
// console.log(multiply(3, 3)); // This would fail.

// Example of trying to call an expression before definition
try {
  // subtract(10, 5); // This will fail
} catch (e) {
  console.log("Error trying to call function expression before definition:", e.message);
}

const subtract = function(a, b) {
  return a - b;
};

console.log("Now we can call subtract:", subtract(10, 5));
console.log("\n");

console.log("🎉 Phase 1 Fundamentals Complete! Great job! 🎉");
