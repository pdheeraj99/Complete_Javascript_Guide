// ============================================================================
// Section 6.2: The Engine Room - Code Examples
// To run this file: node 13_event_loop_memory/index.js
// ============================================================================

console.log("--- Event Loop: Microtask vs. Macrotask Demo ---");

// 1. This is part of the main script execution.
console.log("1. Script Start");

// 2. This creates a MACROTASK. The browser's timer API handles it.
// Its callback will be placed in the Macrotask Queue after the timer (0ms) finishes.
setTimeout(() => {
    console.log("4. Macrotask: setTimeout callback executed");
}, 0);

// 3. This creates a MICROTASK. The promise resolves immediately,
// and its .then() callback is placed in the Microtask Queue.
Promise.resolve().then(() => {
    console.log("3. Microtask: Promise.then() callback executed");
});

// 4. This is also part of the main script execution.
console.log("2. Script End");

// --- Expected Output Order ---
// 1. "Script Start"
// 2. "Script End"
// 3. "Microtask: Promise.then() callback executed"
// 4. "Macrotask: setTimeout callback executed"

// This happens because:
// - The main script runs to completion first (1 and 2).
// - The Event Loop checks the Microtask Queue and finds the promise callback. It runs it (3).
// - The Microtask Queue is now empty.
// - The Event Loop checks the Macrotask Queue and finds the setTimeout callback. It runs it (4).
