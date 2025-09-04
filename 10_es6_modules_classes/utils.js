// This file exports functionality to be used by other modules.

// Named Export 1: A constant
export const PI = 3.14159;

// Named Export 2: A function
export function add(a, b) {
    return a + b;
}

// Default Export: A function
// There can only be ONE default export per file.
export default function greet(name) {
    return `Hello, ${name}! Welcome to ES6 Modules.`;
}

console.log("utils.js module has been loaded.");
