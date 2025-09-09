// ==================================================================
// 🔄 Phase 1: Loops in JavaScript - Code Examples 🔄
// ==================================================================

// --- 1. `for` Loop ---
console.log("--- `for` Loop Example ---");
// Let's print a multiplication table for the number 3.
const numberForTable = 3;
for (let i = 1; i <= 10; i++) {
  console.log(`${numberForTable} x ${i} = ${numberForTable * i}`);
}
console.log("\n");


// --- 2. `while` Loop ---
console.log("--- `while` Loop Example ---");
// Let's simulate a rocket launch countdown.
let countdown = 5;
while (countdown > 0) {
  console.log(`T-minus ${countdown}...`);
  countdown--; // Don't forget to change the condition variable!
}
console.log("🚀 Liftoff!");
console.log("\n");


// --- 3. `do...while` Loop ---
console.log("--- `do...while` Loop Example ---");
// This loop will run at least once, even if the condition is false from the start.
let attempts = 5;
do {
  console.log(`Attempt #${6 - attempts}. Connecting to server...`);
  attempts--;
} while (attempts > 3 && attempts > 0); // Condition is initially true, will loop
console.log("Connection established or max attempts reached.");

// Another example where it runs only once
let willRunOnce = false;
do {
    console.log("This message appears once, even though the condition is false.");
} while (willRunOnce === true);
console.log("\n");


// --- 4. `for...of` Loop (for arrays and strings) ---
console.log("--- `for...of` Loop Example ---");
const fruits = ["Apple 🍎", "Banana 🍌", "Cherry 🍒"];
console.log("My favorite fruits:");
for (const fruit of fruits) {
  console.log(`- ${fruit}`);
}

const greeting = "Hello";
console.log("\nIterating over a string:");
for (const char of greeting) {
  console.log(char);
}
console.log("\n");


// --- 5. `for...in` Loop (for objects) ---
console.log("--- `for...in` Loop Example ---");
const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2023,
  isElectric: true
};

console.log("Car details:");
for (const key in car) {
  // `key` will be "brand", "model", "year", "isElectric"
  // `car[key]` will be the value associated with that key
  console.log(`- ${key}: ${car[key]}`);
}
console.log("\n");


// --- `break` and `continue` Keywords ---
console.log("--- `break` and `continue` Example ---");
console.log("Finding the first number divisible by 7, but skipping even numbers.");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    continue; // Skip the rest of this iteration if the number is even
  }

  console.log(`Checking odd number: ${i}`);

  if (i % 7 === 0) {
    console.log(`Found it! The number is ${i}. Stopping the loop.`);
    break; // Exit the loop completely
  }
}
