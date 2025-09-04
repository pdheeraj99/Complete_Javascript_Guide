// ============================================================================
// Section 5.3: Modern Data Structures (Map & Set) - Code Examples
// To run this file: node 11_es6_data_structures/index.js
// ============================================================================

console.log("--- Modern Data Structures: Map & Set ---");

// --- 1. Set: The Collection of Unique Values ---
console.log("\n--- 1. Set ---");

// Create a new Set
const mySet = new Set();

// Add values using .add()
mySet.add(10);
mySet.add(20);
mySet.add("Hello");
console.log("Initial Set:", mySet);

// Adding a duplicate value does nothing
mySet.add(10);
console.log("After adding 10 again:", mySet);

// Check if a value exists with .has()
console.log("mySet.has(20):", mySet.has(20)); // true
console.log("mySet.has(99):", mySet.has(99)); // false

// Get the size with .size
console.log("mySet.size:", mySet.size); // 3

// Delete a value with .delete()
mySet.delete(20);
console.log("After deleting 20:", mySet);

// Main use case: Removing duplicates from an array
const numberArray = [1, 2, 3, 3, 4, 5, 5, 5, 6];
console.log("\nOriginal array with duplicates:", numberArray);
const uniqueNumbers = [...new Set(numberArray)]; // Spread the set back into an array
console.log("Array after removing duplicates:", uniqueNumbers);


// --- 2. Map: The Advanced Key-Value Store ---
console.log("\n--- 2. Map ---");

const myMap = new Map();

// Add key-value pairs using .set()
myMap.set('name', 'Jules');
myMap.set(1, 'is a number key');

// Using an object as a key (impossible with plain objects)
const userKey = { id: 1 };
myMap.set(userKey, 'This is a user object key');

console.log("Initial Map:", myMap);

// Get values using .get()
console.log("myMap.get('name'):", myMap.get('name'));
console.log("myMap.get(userKey):", myMap.get(userKey));

// Check for a key with .has()
console.log("myMap.has(1):", myMap.has(1)); // true

// Get the size with .size
console.log("myMap.size:", myMap.size);

// Iterating over a Map
console.log("\nIterating over the map:");
for (const [key, value] of myMap) {
    console.log(`Key:`, key, `| Value:`, value);
}
