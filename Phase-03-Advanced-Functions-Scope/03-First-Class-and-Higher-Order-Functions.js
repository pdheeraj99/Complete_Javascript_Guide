// ========================================================================
// 🏆 Phase 3: First-Class & Higher-Order Functions - Code Examples 🏆
// ========================================================================

// --- 1. Functions as First-Class Citizens ---
console.log("--- Functions as First-Class Citizens ---");

// a) Assigning a function to a variable
const sayHello = function() {
  console.log("Hello, I am a function stored in a variable!");
};
sayHello();

// b) Passing a function as an argument (Callback)
function executeFunction(fn) {
  console.log("About to execute the function passed to me...");
  fn();
}
executeFunction(sayHello);

// c) Returning a function from another function
function createLogger() {
  return function(message) {
    console.log(`[LOG]: ${message}`);
  };
}
const myLogger = createLogger();
myLogger("This is my first log message.");
myLogger("This is another one.");
console.log("\n");


// --- 2. Higher-Order Functions (HOF) in Action ---
console.log("--- Higher-Order Functions ---");

// Example 1: A HOF that accepts a function.
// `map` is a built-in HOF for arrays. Let's create our own version.
function myMap(array, transformFn) {
  const newArray = [];
  for (const item of array) {
    newArray.push(transformFn(item));
  }
  return newArray;
}

const numbers = [1, 2, 3, 4, 5];
const square = (x) => x * x;

const squaredNumbers = myMap(numbers, square);
console.log("Our custom map function result:", squaredNumbers);


// Example 2: A HOF that returns a function.
// This is often used for creating "factory" functions that produce other functions.
function createComparison(comparisonType) {
  if (comparisonType === '>') {
    return (a, b) => a > b;
  } else if (comparisonType === '<') {
    return (a, b) => a < b;
  } else {
    return (a, b) => a === b;
  }
}

const isGreaterThan = createComparison('>');
const isLessThan = createComparison('<');

console.log("\nUsing our returned functions:");
console.log("isGreaterThan(10, 5):", isGreaterThan(10, 5)); // true
console.log("isLessThan(10, 5):", isLessThan(10, 5)); // false
console.log("\n");


// --- 3. Practical Callback Example ---
console.log("--- Practical Callback Example ---");

function calculate(a, b, operationCallback) {
  console.log(`Performing an operation on ${a} and ${b}`);
  return operationCallback(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

const sumResult = calculate(10, 20, add);
const productResult = calculate(10, 20, multiply);

console.log("Result of 'add' callback:", sumResult);
console.log("Result of 'multiply' callback:", productResult);
console.log("\n");
