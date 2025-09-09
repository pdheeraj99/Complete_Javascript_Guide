// ==================================================================
// 🗺️ Phase 7: ES6 Data Structures - Code Examples 🗺️
// ==================================================================

// --- 1. `Set`: A collection of unique values ---
console.log("--- Set ---");
const mySet = new Set();

// add()
mySet.add("Apple");
mySet.add("Banana");
mySet.add("Apple"); // This will be ignored because it's a duplicate.
mySet.add("Orange");

console.log("My Set:", mySet);

// has()
console.log("Does the set have 'Banana'?", mySet.has("Banana")); // true
console.log("Does the set have 'Grapes'?", mySet.has("Grapes")); // false

// size
console.log("Size of the set:", mySet.size); // 3

// delete()
mySet.delete("Orange");
console.log("Set after deleting 'Orange':", mySet);

// Iterating over a Set
console.log("Iterating over the set:");
for (const item of mySet) {
  console.log("-", item);
}

// Practical Use Case: Removing duplicates from an array
const numberList = [10, 20, 30, 20, 10, 40, 50, 30];
const uniqueNumbers = [...new Set(numberList)];
console.log("Array with duplicates removed:", uniqueNumbers);
console.log("\n");


// --- 2. `Map`: Advanced key-value pairs ---
console.log("--- Map ---");
const myMap = new Map();

// Keys can be any type
const keyString = "a string key";
const keyObject = { id: 1 };
const keyFunction = () => "a function key";

// set()
myMap.set(keyString, "Value for a string");
myMap.set(keyObject, "Value for an object");
myMap.set(keyFunction, "Value for a function");

console.log("Size of the map:", myMap.size); // 3

// get()
console.log("Getting value for keyObject:", myMap.get(keyObject));

// Iterating over a Map
console.log("Iterating over the map:");
for (const [key, value] of myMap) {
  console.log("Key:", key, "-> Value:", value);
}

// Another way to iterate
myMap.forEach((value, key) => {
    console.log(`(forEach) Key: ${key} -> Value: ${value}`);
});
console.log("\n");

console.log("🎉 Phase 7 Modern JavaScript Features Complete! Your code is now more elegant and powerful! 🎉");
