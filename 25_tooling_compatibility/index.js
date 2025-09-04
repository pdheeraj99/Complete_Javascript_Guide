// ============================================================================
// Section 17: Tooling & Compatibility - Code Examples
// To run this file: node 25_tooling_compatibility/index.js
// ============================================================================

console.log("--- Tooling & Compatibility Examples ---");

// --- 1. Polyfill Example for Array.prototype.includes ---
console.log("\n--- Polyfill Demo ---");

// In a modern environment (like this Node.js runtime or a new browser),
// `Array.prototype.includes` already exists.
console.log("Does Array.prototype.includes exist already?", !!Array.prototype.includes);

// A polyfill first checks if the feature is missing.
if (!Array.prototype.includes) {

    console.log("⚠️ Polyfill for Array.prototype.includes is being applied!");

    // If it's missing, we define it ourselves.
    Array.prototype.includes = function(searchElement, fromIndex) {

        console.log("  (Running our custom polyfilled `includes` function)");

        // Basic implementation of `includes` using `indexOf`
        // Note: A real polyfill would be more robust and follow the spec exactly.

        // `this` refers to the array the method is called on.
        return this.indexOf(searchElement, fromIndex) !== -1;
    };

} else {
    console.log("✅ No polyfill needed. The native .includes() method will be used.");
}


// --- Demonstration ---
const myArray = [1, 2, 3, 4, 5];

console.log("\nTesting the .includes() method:");
console.log("Does myArray include 3?", myArray.includes(3)); // true
console.log("Does myArray include 99?", myArray.includes(99)); // false

// If you were to run this code in a very old browser (like IE11),
// you would see the "Polyfill is being applied!" message, and the code
// would still work correctly. In our modern environment, it doesn't need to.
// This is the power of polyfilling!
