// ============================================================================
// Section 2: Logic, Control Flow & Data Structures - Code Examples
// To run this file: node 02-logic-control-flow.js
// ============================================================================

console.log("--- Section 2: Code Examples ---");

// --- 1. Conditional Statements ---
console.log("\n--- 1. Conditional Statements ---");

// if, else if, else
let weather = 'rainy';
console.log(`The weather is ${weather}.`);
if (weather === 'sunny') {
    console.log("Let's go to the beach! 🏖️");
} else if (weather === 'rainy') {
    console.log("Get an umbrella! ☔");
} else {
    console.log("Let's just stay home. 🏠");
}

// switch
let day = 'Monday';
console.log(`\nToday is ${day}.`);
switch (day) {
    case 'Monday':
        console.log("Start of the work week! 😫");
        break;
    case 'Friday':
        console.log("Weekend is almost here! 🎉");
        break;
    default:
        console.log("It's just a regular day.");
}

// Ternary Operator
let age = 20;
let canVote = (age >= 18) ? 'Yes, you can vote ✅' : 'No, you cannot vote ❌';
console.log(`\nAge is ${age}. Can vote?`, canVote);

// --- 2. Loops ---
console.log("\n--- 2. Loops ---");

// for loop
console.log("\nFor loop:");
for (let i = 1; i <= 5; i++) {
    console.log(`Iteration number ${i}`);
}

// while loop
console.log("\nWhile loop:");
let count = 0;
while (count < 3) {
    console.log("While loop running...");
    count++;
}

// for...of loop (for arrays)
console.log("\nFor...of loop:");
const colors = ['red', 'green', 'blue'];
for (const color of colors) {
    console.log(color);
}

// for...in loop (for objects)
console.log("\nFor...in loop:");
const userProfile = { name: 'Jules', city: 'Hyderabad' };
for (const key in userProfile) {
    // We use bracket notation here because `key` is a variable
    console.log(`${key}: ${userProfile[key]}`);
}

// --- 3. Functions ---
console.log("\n--- 3. Functions ---");

// 'name' is a parameter in the function definition
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// 'Jules' is an argument passed during the function call
greet('Jules');

// --- 4. Arrays (Introduction) ---
console.log("\n--- 4. Arrays ---");
const fruits = ['Apple 🍎', 'Banana 🍌', 'Cherry 🍒'];
console.log("Fruits array:", fruits);
console.log("First fruit:", fruits[0]); // Accessing the first element
console.log("Number of fruits:", fruits.length);

// --- 5. Objects (Introduction) ---
console.log("\n--- 5. Objects ---");
const user = {
    name: 'Siri',
    age: 28,
    isEngineer: true,
    'first-name': 'Siri' // Example of a key with special characters
};
console.log("User object:", user);

// Accessing Properties
console.log("Dot notation (user.name):", user.name);
console.log("Bracket notation (user['age']):", user['age']);
// Bracket notation is required for keys with special characters
console.log("Bracket notation for special key ('first-name'):", user['first-name']);

// Methods in Objects
const person = {
    name: 'Ravi',
    greet: function() {
        // `this` refers to the `person` object
        console.log(`Hello from ${this.name}!`);
    }
};

console.log("\nCalling a method from an object:");
person.greet(); // "Hello from Ravi!"

console.log("\n--- End of Examples ---");
