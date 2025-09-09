// ==================================================================
// ⛓️ Phase 2: Mastering Arrays - Code Examples ⛓️
// ==================================================================

// --- 1. Array Creation & Accessing ---
console.log("--- Array Creation & Accessing ---");
const numbers = [10, 20, 30, 40, 50];
console.log("Original Array:", numbers);
console.log("First element (index 0):", numbers[0]); // 10
console.log("Third element (index 2):", numbers[2]); // 30
console.log("Array length:", numbers.length); // 5
console.log("\n");

// --- 2. Basic MUTATING Methods (Original array will change) ---
console.log("--- Basic Mutating Methods ---");
// push: adds to the end
numbers.push(60);
console.log("After push(60):", numbers);
// pop: removes from the end
const lastElement = numbers.pop();
console.log("Popped element:", lastElement); // 60
console.log("After pop():", numbers);
// unshift: adds to the beginning
numbers.unshift(5);
console.log("After unshift(5):", numbers);
// shift: removes from the beginning
const firstElement = numbers.shift();
console.log("Shifted element:", firstElement); // 5
console.log("After shift():", numbers);
console.log("\n");

// --- 3. Transformation Methods (slice, splice, sort) ---
console.log("--- Transformation Methods ---");
const letters = ['a', 'b', 'c', 'd', 'e'];
// slice (Non-mutating): returns a new array with a portion of the original
const slicedLetters = letters.slice(1, 4); // from index 1 up to (but not including) index 4
console.log("Original letters:", letters);
console.log("letters.slice(1, 4):", slicedLetters); // ['b', 'c', 'd']
// splice (Mutating): removes/adds elements from/to an array
const removedElements = letters.splice(1, 2, 'x', 'y'); // at index 1, remove 2 elements and add 'x', 'y'
console.log("Removed with splice:", removedElements); // ['b', 'c']
console.log("After splice(1, 2, 'x', 'y'):", letters); // ['a', 'x', 'y', 'd', 'e']
// sort (Mutating): sorts the array
const unsortedNums = [5, 1, 10, 2, 8];
console.log("\nUnsorted numbers:", unsortedNums);
unsortedNums.sort();
console.log("Default sort (incorrect for numbers):", unsortedNums); // [1, 10, 2, 5, 8] - treats them as strings
unsortedNums.sort((a, b) => a - b); // Correct way to sort numbers
console.log("Correct number sort:", unsortedNums);
console.log("\n");

// --- 4. Iteration Methods ---
console.log("--- Iteration Methods ---");
const data = [1, 2, 3, 4, 5];
// forEach: just loops over the array
console.log("forEach:");
data.forEach(item => {
  console.log(`Item: ${item}`);
});
// map: creates a new array by transforming each element
const doubled = data.map(item => item * 2);
console.log("map (doubled):", doubled); // [2, 4, 6, 8, 10]
// filter: creates a new array with elements that pass the test
const evens = data.filter(item => item % 2 === 0);
console.log("filter (evens):", evens); // [2, 4]
// reduce: reduces the array to a single value
const sum = data.reduce((accumulator, current) => accumulator + current, 0);
console.log("reduce (sum):", sum); // 15
console.log("Original data array is unchanged:", data);
console.log("\n");

// --- 5. Search Methods ---
console.log("--- Search Methods ---");
const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Mouse', price: 25 },
  { id: 3, name: 'Keyboard', price: 75 },
  { id: 4, name: 'Mouse', price: 35 }
];
// find: returns the first element that matches the condition
const expensiveProduct = products.find(p => p.price > 1000);
console.log("find (price > 1000):", expensiveProduct);
// findIndex: returns the index of the first element that matches
const keyboardIndex = products.findIndex(p => p.name === 'Keyboard');
console.log("findIndex (name === 'Keyboard'):", keyboardIndex); // 2
// includes: checks if an array contains a certain value (for primitives)
const numList = [10, 20, 30];
console.log("numList.includes(20):", numList.includes(20)); // true
console.log("numList.includes(99):", numList.includes(99)); // false
// some: checks if at least one element passes the test
const hasCheapProducts = products.some(p => p.price < 30);
console.log("some (price < 30):", hasCheapProducts); // true
// every: checks if all elements pass the test
const allProductsAreCheap = products.every(p => p.price < 30);
console.log("every (price < 30):", allProductsAreCheap); // false
console.log("\n");

// --- 6. Array Destructuring ---
console.log("--- Array Destructuring ---");
const coordinates = [12.97, 77.59];
const [latitude, longitude] = coordinates;
console.log("Latitude:", latitude);
console.log("Longitude:", longitude);

const [firstFruit, , thirdFruit] = ["Apple", "Banana", "Cherry"]; // Skipping an element
console.log("First fruit:", firstFruit);
console.log("Third fruit:", thirdFruit);
console.log("\n");

// --- 7. Multidimensional Arrays ---
console.log("--- Multidimensional Arrays ---");
const ticTacToeBoard = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['O', 'O', 'X']
];
console.log("Tic-Tac-Toe board:", ticTacToeBoard);
console.log("Center element:", ticTacToeBoard[1][1]); // 'X'
console.log("\n");
