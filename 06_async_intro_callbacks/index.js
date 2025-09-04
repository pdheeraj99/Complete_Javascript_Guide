// ============================================================================
// Section 4.1: Async JS: Event Loop & Callbacks - Code Examples
// To run this file: node 06_async_intro_callbacks/index.js
// ============================================================================

console.log("--- Async JS & Callbacks Code Examples ---");

// --- 1. Synchronous vs. Asynchronous Demonstration ---
console.log("\n--- Sync vs. Async Demo ---");

console.log("1. First Task (Sync)");

// setTimeout is an asynchronous function.
// Even with a 0ms delay, its callback is sent to the Web API, then the Callback Queue.
// It will only run after the entire current script (all sync code) is finished.
setTimeout(() => {
    console.log("2. Second Task (Async - from setTimeout)");
}, 0);

console.log("3. Third Task (Sync)");

// Expected Output:
// 1. First Task (Sync)
// 3. Third Task (Sync)
// 2. Second Task (Async - from setTimeout)
// This proves that async code runs after the sync code, regardless of the timer delay.


// --- 2. Simple Callback Example ---
console.log("\n--- Simple Callback Demo ---");

function orderPizza(callback) {
    console.log("Ordering pizza...");
    // Simulate a 2-second delay for making the pizza
    setTimeout(() => {
        const pizza = "🍕";
        // When the pizza is ready, call the callback function we were given
        callback(pizza);
    }, 2000);
}

function pizzaIsReady(pizza) {
    console.log(`Pizza is ready! Here it is: ${pizza}`);
}

// We call orderPizza and give it the pizzaIsReady function as the callback.
// orderPizza will execute pizzaIsReady for us when it's done.
orderPizza(pizzaIsReady);
console.log("Doing something else while waiting for pizza...");


// --- 3. Callback Hell (The "Pyramid of Doom") ---
console.log("\n--- Callback Hell Simulation ---");

function a(callback) {
    setTimeout(() => {
        console.log("1. Getting user data...");
        callback();
    }, 1000);
}

function b(callback) {
    setTimeout(() => {
        console.log("2. Getting user's posts...");
        callback();
    }, 1000);
}

function c(callback) {
    setTimeout(() => {
        console.log("3. Getting post's comments...");
        callback();
    }, 1000);
}

// This is the Pyramid of Doom!
// To ensure order, we have to nest the calls.
a(() => {
    b(() => {
        c(() => {
            console.log("All done!");
        });
    });
});

console.log("This example shows how hard it is to manage sequential async tasks with callbacks.");
console.log("Next, we'll see how Promises solve this problem.");
