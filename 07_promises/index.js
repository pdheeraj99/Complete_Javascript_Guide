// ============================================================================
// Section 4.2: Promises - Code Examples
// To run this file: node 07_promises/index.js
// ============================================================================

console.log("--- Promises Code Examples ---");

// --- 1. Creating and Consuming a Simple Promise ---
console.log("\n--- 1. Simple Promise ---");

const simplePromise = new Promise((resolve, reject) => {
    console.log("Promise started... (simulating a network request)");
    setTimeout(() => {
        const success = Math.random() > 0.3; // 70% chance of success
        if (success) {
            // If successful, call resolve with the data
            resolve({ data: "Here is your data from the server!" });
        } else {
            // If it fails, call reject with an error
            reject(new Error("Network request failed!"));
        }
    }, 2000);
});

simplePromise
    .then(result => {
        // This block runs if the promise is FULFILLED
        console.log("✅ SUCCESS:", result.data);
    })
    .catch(error => {
        // This block runs if the promise is REJECTED
        console.error("❌ ERROR:", error.message);
    })
    .finally(() => {
        // This block runs regardless of success or failure
        console.log("Request finished.");
    });


// --- 2. Promise Chaining ---
// This avoids "Callback Hell"
console.log("\n--- 2. Promise Chaining ---");

const step1 = () => new Promise(resolve => setTimeout(() => resolve("Step 1 Complete"), 500));
const step2 = () => new Promise(resolve => setTimeout(() => resolve("Step 2 Complete"), 500));
const step3 = () => new Promise(resolve => setTimeout(() => resolve("Step 3 Complete"), 500));

step1()
    .then(result1 => {
        console.log(result1);
        return step2(); // Return the next promise in the chain
    })
    .then(result2 => {
        console.log(result2);
        return step3(); // Return the next promise
    })
    .then(result3 => {
        console.log(result3);
        console.log("All steps finished in order!");
    })
    .catch(error => {
        console.error("An error occurred in the chain:", error);
    });


// --- 3. Promise.all ---
// Waits for ALL promises to resolve
console.log("\n--- 3. Promise.all ---");

const promise1 = new Promise(resolve => setTimeout(() => resolve("First"), 600));
const promise2 = new Promise(resolve => setTimeout(() => resolve("Second"), 800));
const promise3 = new Promise(resolve => setTimeout(() => resolve("Third"), 400));

Promise.all([promise1, promise2, promise3])
    .then(values => {
        // 'values' is an array of the results from all promises, in the original order
        console.log("Promise.all resolved:", values); // ["First", "Second", "Third"]
    })
    .catch(error => {
        console.error("Promise.all was rejected:", error);
    });


// --- 4. Promise.race ---
// Resolves as soon as the FIRST promise resolves
console.log("\n--- 4. Promise.race ---");

const racePromise1 = new Promise(resolve => setTimeout(() => resolve("I won!"), 1000));
const racePromise2 = new Promise(resolve => setTimeout(() => resolve("No, I won!"), 500));

Promise.race([racePromise1, racePromise2])
    .then(winner => {
        // 'winner' is the value of the very first promise to resolve
        console.log("Promise.race winner:", winner); // "No, I won!"
    });
