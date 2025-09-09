// --- This is the `utils.js` module ---

console.log("`utils.js` module has been loaded.");

// Named Export 1: A constant
export const VERSION = "1.0";

// Named Export 2: A function
export function double(n) {
  return n * 2;
}

// Another function, not exported directly here
function add(a, b) {
  return a + b;
}

// Another constant, not exported
const SECRET_KEY = "12345";

// Exporting at the end
export { add };

// Default Export: There can only be ONE default export per file.
// This is often used for the "main" thing the module provides.
export default function greet(name) {
  return `Hello, ${name}! Welcome to ES6 Modules.`;
}

// Note: `SECRET_KEY` is private to this module because it is not exported.
// The outside world cannot access it.
