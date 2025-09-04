// ============================================================================
// Section 10: Advanced Objects - Code Examples
// To run this file: node 18_advanced_objects/index.js
// ============================================================================

console.log("--- Advanced Objects Code Examples ---");

// --- 1. Property Descriptors with Object.defineProperty ---
console.log("\n--- 1. Property Descriptors ---");

const user = {};

// Define a property with specific descriptors
Object.defineProperty(user, 'name', {
    value: 'Jules',
    writable: false,       // Cannot be changed
    enumerable: true,      // Will show up in for...in loops
    configurable: false    // Cannot be deleted
});

Object.defineProperty(user, 'secretCode', {
    value: 'xyz123',
    writable: true,
    enumerable: false,     // Will NOT show up in for...in loops
    configurable: true
});

console.log("User object:", user);
console.log("user.name:", user.name);

// Try to change the non-writable property
try {
    user.name = 'Mawa'; // This will fail silently in non-strict mode, or throw an error in strict mode
} catch (e) {
    console.error("Error trying to change non-writable property:", e.message);
}
console.log("user.name after trying to change:", user.name); // Still 'Jules'

// Check enumerability
console.log("\nKeys in user object (enumerable properties only):", Object.keys(user)); // ['name']


// --- 2. Proxies and Reflection (`Reflect` API) ---
console.log("\n--- 2. Proxies and Reflection ---");

// The original object
const target = {
    name: 'Ravi',
    age: 30
};

// The handler object with traps
const handler = {
    // Trap for getting a property
    get(target, prop, receiver) {
        console.log(`[Proxy GET] Reading property: "${prop}"`);
        // Use Reflect.get to perform the default behavior
        return Reflect.get(target, prop, receiver);
    },

    // Trap for setting a property
    set(target, prop, value, receiver) {
        console.log(`[Proxy SET] Trying to set property "${prop}" to "${value}"`);

        // Add validation
        if (prop === 'age' && typeof value !== 'number') {
            console.error("[Validation] Age must be a number.");
            return false; // Indicate that the set operation failed
        }

        // Use Reflect.set to perform the default behavior
        // It returns true/false, which we can return from the trap.
        return Reflect.set(target, prop, value, receiver);
    }
};

// Create the proxy
const proxyUser = new Proxy(target, handler);

// Interact with the proxy, not the target
console.log("\nReading name from proxy:");
console.log("Name:", proxyUser.name); // Triggers the 'get' trap

console.log("\nSetting age to a valid number:");
proxyUser.age = 31; // Triggers the 'set' trap
console.log("Current age:", proxyUser.age);

console.log("\nTrying to set age to an invalid value:");
proxyUser.age = 'thirty-two'; // Triggers the 'set' trap with validation
console.log("Current age (should be unchanged):", proxyUser.age);

console.log("\nOriginal target object:", target); // The proxy forwards valid changes to the target
