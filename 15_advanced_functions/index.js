// ============================================================================
// Section 7: Advanced Functions - Code Examples
// To run this file: node 15_advanced_functions/index.js
// ============================================================================

console.log("--- Advanced Functions Code Examples ---");

// --- 1. Higher-Order Functions (HOFs) ---
console.log("\n--- 1. Higher-Order Functions ---");

// `withLogging` is a HOF because it takes a function as an argument
// and returns a new function.
function withLogging(fn) {
    return function(...args) {
        console.log(`Calling function: ${fn.name}`);
        const result = fn(...args);
        console.log(`Finished function: ${fn.name}`);
        return result;
    };
}

function subtract(a, b) {
    return a - b;
}

const loggedSubtract = withLogging(subtract);
const result = loggedSubtract(10, 3);
console.log("Result of loggedSubtract:", result);


// --- 2. Function Composition ---
console.log("\n--- 2. Function Composition ---");

const add5 = x => x + 5;
const multiplyBy2 = x => x * 2;

// A simple compose utility for two functions
const compose = (f, g) => x => f(g(x));

const add5AndMultiplyBy2 = compose(multiplyBy2, add5);

const compositionResult = add5AndMultiplyBy2(10); // Runs add5(10) first, then multiplyBy2(15)
console.log("Composition result for (10 + 5) * 2 is:", compositionResult);


// --- 3. Currying ---
console.log("\n--- 3. Currying ---");

// A curried function that takes `a` and returns a new function that takes `b`
const curriedAdd = a => b => a + b;

// We can create a specialized function by "pre-loading" the first argument
const add10 = curriedAdd(10);

console.log("Using our specialized 'add10' function:");
console.log("add10(5):", add10(5));   // 15
console.log("add10(25):", add10(25)); // 35


// --- 4. Partial Application ---
console.log("\n--- 4. Partial Application ---");

function multiply(a, b, c) {
    return a * b * c;
}

// We use .bind() to create a new function with the first argument `a` fixed to 2.
// The first argument to .bind() is the `this` context, which we don't need here, so we pass `null`.
const multiplyBy2 = multiply.bind(null, 2);

// `multiplyBy2` is now a new function that expects the remaining arguments (`b` and `c`).
const partialAppResult = multiplyBy2(5, 10); // Will compute 2 * 5 * 10
console.log("Partial application result for 2 * 5 * 10 is:", partialAppResult);
