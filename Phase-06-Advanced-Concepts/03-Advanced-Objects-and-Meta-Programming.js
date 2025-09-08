// ==================================================================
// 🤖 Phase 6: Advanced Objects & Meta-Programming - Code Examples 🤖
// ==================================================================

// --- 1. Object Protection Methods ---
console.log("--- Object Protection ---");
const user = {
  name: "Suresh",
  role: "Admin"
};

// Object.freeze(user); // Uncomment to make the object completely immutable

// try {
//   user.name = "Ramesh"; // This would fail if frozen
//   user.newProp = true;  // This would fail if frozen
//   delete user.role;     // This would fail if frozen
// } catch (e) {
//   console.error("Error modifying frozen object:", e.message);
// }
console.log("Object.freeze() makes an object read-only. (Example commented out).");
console.log("\n");


// --- 2. Property Descriptors ---
console.log("--- Property Descriptors ---");
const product = {};

Object.defineProperty(product, 'id', {
  value: 'P123',
  writable: false,      // Cannot be changed
  enumerable: true,     // Will show up in for...in loops
  configurable: false   // Cannot be deleted or reconfigured
});

console.log("Product ID:", product.id);

try {
  // product.id = 'P456'; // This will throw a TypeError in strict mode
} catch (e) {
  console.error("Error trying to write to a non-writable property:", e.message);
}

console.log("Product property 'id' is non-writable.");

// Let's see the descriptor
const descriptor = Object.getOwnPropertyDescriptor(product, 'id');
console.log("Descriptor for 'id':", descriptor);
console.log("\n");


// --- 3. Proxies and Reflect ---
console.log("--- Proxies and Reflect ---");

// Target object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

// Handler with traps
const personProxyHandler = {
  get(target, property) {
    console.log(`[GET] Accessing property: '${property}'`);
    // Use Reflect to perform the default operation
    return Reflect.get(target, property);
  },

  set(target, property, value) {
    console.log(`[SET] Setting property: '${property}' to '${value}'`);

    // Add validation logic
    if (property === 'age' && (typeof value !== 'number' || value < 0)) {
      throw new TypeError("Age must be a positive number.");
    }

    // Use Reflect to perform the default operation
    return Reflect.set(target, property, value);
  },

  has(target, property) {
    console.log(`[HAS] Checking if property: '${property}' exists`);
    return Reflect.has(target, property);
  }
};

// Create the proxy
const proxyPerson = new Proxy(person, personProxyHandler);

// Interact with the proxy, not the original object
console.log("\nAccessing name:");
console.log(proxyPerson.firstName);

console.log("\nSetting age (valid):");
proxyPerson.age = 31;

console.log("\nSetting age (invalid):");
try {
  proxyPerson.age = "thirty-two";
} catch (error) {
  console.error("Caught error:", error.message);
}

console.log("\nChecking for property existence:");
'lastName' in proxyPerson;

console.log("\nOriginal person object:", person); // The proxy forwards the operations
console.log("\n");
