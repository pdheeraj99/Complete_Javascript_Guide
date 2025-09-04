// ============================================================================
// Section 2.1: JavaScript Array Methods - Code Examples
// To run this file: node 02-array-methods.js
// Note: Some newer methods (ES2023+) might require a recent version of Node.js (v20+).
// ============================================================================

console.log("--- Array Methods Code Examples ---");

// --- Category 1: Mutator Methods (Original Array ni Marchutai ⚠️) ---
console.log("\n--- 1. Mutator Methods ---");

// push & pop (End of array)
const pushPopArr = ['a', 'b'];
console.log("Original:", pushPopArr);
pushPopArr.push('c');
console.log("After push('c'):", pushPopArr);
const poppedItem = pushPopArr.pop();
console.log("After pop():", pushPopArr, "| Popped item:", poppedItem);

// shift & unshift (Start of array)
const shiftUnshiftArr = ['b', 'c'];
console.log("\nOriginal:", shiftUnshiftArr);
shiftUnshiftArr.unshift('a');
console.log("After unshift('a'):", shiftUnshiftArr);
const shiftedItem = shiftUnshiftArr.shift();
console.log("After shift():", shiftUnshiftArr, "| Shifted item:", shiftedItem);

// splice (The powerful one)
const spliceArr = ['Jan', 'March', 'April', 'June'];
console.log("\nOriginal:", spliceArr);
spliceArr.splice(1, 0, 'Feb'); // Insert 'Feb' at index 1
console.log("After splice(1, 0, 'Feb'):", spliceArr);
spliceArr.splice(4, 1, 'May'); // Replace 1 element at index 4 with 'May'
console.log("After splice(4, 1, 'May'):", spliceArr);

// reverse
const reverseArr = [1, 2, 3, 4, 5];
console.log("\nOriginal:", reverseArr);
reverseArr.reverse();
console.log("After reverse():", reverseArr);

// sort
const names = ['Ravi', 'Anil', 'Bhanu'];
console.log("\nOriginal names:", names);
names.sort();
console.log("Sorted names:", names);

const numbers = [10, 5, 100, 2];
console.log("\nOriginal numbers:", numbers);
numbers.sort(); // Incorrectly sorts as strings
console.log("Incorrect sort:", numbers);
numbers.sort((a, b) => a - b); // Correctly sorts numbers
console.log("Correct sort:", numbers);

// fill
const fillArr = [1, 2, 3, 4, 5];
console.log("\nOriginal:", fillArr);
fillArr.fill(0, 2, 4); // Fill with 0 from index 2 to 4 (exclusive)
console.log("After fill(0, 2, 4):", fillArr);

// --- Category 2: Non-Mutator Methods (Safe to Use! 👍) ---
console.log("\n--- 2. Non-Mutator Methods ---");

const originalArr = ['a', 'b', 'c', 'd', 'e'];

// slice
const slicedArr = originalArr.slice(1, 4);
console.log("\nOriginal:", originalArr);
console.log("slice(1, 4):", slicedArr);

// concat
const arr1 = [1, 2];
const arr2 = [3, 4];
const combinedArr = arr1.concat(arr2, [5, 6]);
console.log("concat([1,2], [3,4], [5,6]):", combinedArr);

// join
const joinArr = ['H', 'e', 'l', 'l', 'o'];
console.log("join(''):", joinArr.join(''));
console.log("join('-'):", joinArr.join('-'));

// includes
console.log("['a','b','c'].includes('b'):", ['a','b','c'].includes('b')); // true

// at
const atArr = [10, 20, 30, 40, 50];
console.log("at(1):", atArr.at(1)); // 20
console.log("at(-1):", atArr.at(-1)); // 50 (last item)

// flat
const nestedArr = [1, 2, [3, 4, [5, 6]]];
console.log("\nOriginal nested:", nestedArr);
console.log("flat(1):", nestedArr.flat()); // Flattens one level
console.log("flat(2):", nestedArr.flat(2)); // Flattens two levels

// --- Iteration Methods ---
console.log("\n--- Iteration Methods ---");
const users = [
    { name: 'Ravi', age: 25, active: true },
    { name: 'Sita', age: 17, active: false },
    { name: 'Anil', age: 30, active: true }
];

// forEach
console.log("\nforEach:");
users.forEach(user => console.log(`  Hello, ${user.name}`));

// map
const userNames = users.map(user => user.name);
console.log("\nmap (get names):", userNames);

// filter
const activeUsers = users.filter(user => user.active);
console.log("filter (active users):", activeUsers);

// find
const anil = users.find(user => user.name === 'Anil');
console.log("find ('Anil'):", anil);

// reduce
const cart = [{ price: 100 }, { price: 250 }, { price: 50 }];
const total = cart.reduce((sum, item) => sum + item.price, 0);
console.log("reduce (total price):", total);

// some
const hasMinors = users.some(user => user.age < 18);
console.log("\nsome (any user is a minor?):", hasMinors); // true

// every
const allActive = users.every(user => user.active);
console.log("every (all users are active?):", allActive); // false

// --- Category 3: Modern Immutable Methods (ES2023+) ---
console.log("\n--- 3. Modern Immutable Methods (ES2023+) ---");
const immutableArr = [3, 1, 4, 2];
console.log("Original:", immutableArr);

// Note: These methods might throw an error if your Node.js version is not recent enough.

try {
    // toSorted
    const sortedCopy = immutableArr.toSorted((a, b) => a - b);
    console.log("toSorted():", sortedCopy);

    // toReversed
    const reversedCopy = immutableArr.toReversed();
    console.log("toReversed():", reversedCopy);

    // toSpliced
    const splicedCopy = immutableArr.toSpliced(1, 2, 5);
    console.log("toSpliced(1, 2, 5):", splicedCopy);

    // with
    const withCopy = immutableArr.with(0, 99);
    console.log("with(0, 99):", withCopy);

} catch (e) {
    console.log("Could not run ES2023 methods. Please use a newer Node.js version (e.g., v20+).");
}

console.log("Original array is still unchanged:", immutableArr);
console.log("\n--- End of Examples ---");
