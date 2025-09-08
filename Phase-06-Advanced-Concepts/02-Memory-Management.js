// ==================================================================
// 🧠 Phase 6: Memory Management - Code Examples 🧠
// ==================================================================

// NOTE: We cannot directly "see" garbage collection happen in JavaScript.
// These examples illustrate the CONCEPTS and patterns to be aware of.

// --- 1. Memory Leak Pattern: Forgotten Timer ---
console.log("--- Memory Leak Pattern: Forgotten Timer ---");

function startLeakyInterval() {
  const data = {
    message: "This is some data from a specific context.",
    timestamp: new Date()
  };

  // This interval will run forever if not cleared.
  // The `data` object will NEVER be garbage collected because the callback
  // function holds a closure over it.
  setInterval(() => {
    console.log("Leaky interval running, keeping data alive:", data.timestamp);
  }, 2000);

  console.log("Interval started. It will leak memory if you don't stop the program or clear it.");
}

// startLeakyInterval(); // Uncomment to see it run, but be ready to stop the program!
console.log("Example of a leaky interval is commented out to prevent an infinite loop.");
console.log("\n");


// --- 2. Memory Leak Pattern: Closures ---
console.log("--- Memory Leak Pattern: Closures ---");

// This function creates a very large object and a closure that uses it.
function createLeakyClosure() {
  // Imagine this is a huge object, maybe 10MB of data.
  const largeObject = new Array(1e6).fill("some data");

  // This function "closes over" `largeObject`.
  return function() {
    // Even if this closure doesn't use `largeObject` directly, it might
    // still hold a reference to the whole scope.
    return `Closure created at ${new Date().getTime()}`;
  };
}

// We call the function and get the inner closure back.
const myLeakyClosure = createLeakyClosure();

// Now, `myLeakyClosure` exists and holds a reference to its birthplace scope,
// which includes `largeObject`. Even though we are done with `largeObject`,
// it cannot be garbage collected as long as `myLeakyClosure` is alive.
// In a real app, if `myLeakyClosure` was an event listener that was never removed,
// this would be a significant memory leak.

console.log("A closure has been created that is holding onto a large object in memory.");
console.log(myLeakyClosure());
console.log("\n");


// --- 3. Solution: `WeakMap` ---
console.log("--- Solution: WeakMap ---");

// Let's create an object. This represents something we want to attach metadata to,
// like a DOM element or a user object.
let user = { name: "Ramesh" };

// A regular Map holds a STRONG reference.
const strongMap = new Map();
strongMap.set(user, "Some metadata for Ramesh");

// A WeakMap holds a WEAK reference.
const weakMap = new WeakMap();
weakMap.set(user, "Some WEAK metadata for Ramesh");

console.log("Strong map size:", strongMap.size); // 1
console.log("Does weak map have user?", weakMap.has(user)); // true

// Now, let's remove the only strong reference to the `user` object.
console.log("\nSetting user reference to null...");
user = null;

// After this, the garbage collector (GC) runs at some point.
// We cannot force it, but we can explain what happens.

console.log("\n--- After Garbage Collection (Theoretically) ---");
console.log("Strong map size is still:", strongMap.size); // The Map itself KEEPS the object alive. This is a potential memory leak.
console.log("The entry in the strong map is:", strongMap.entries().next().value);

console.log("\nIn the WeakMap, however, since the only strong reference to the original 'user' object is gone, the GC is free to remove it.");
console.log("The WeakMap entry will be automatically removed, preventing a memory leak.");
console.log("We can't easily prove this with code because we can't control the GC, but this is the key benefit of WeakMap.");
console.log("\n");
