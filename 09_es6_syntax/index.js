// ============================================================================
// Section 5.1: Modern JS Syntax - Code Examples
// To run this file: node 09_es6_syntax/index.js
// ============================================================================

console.log("--- Modern JS Syntax Code Examples ---");

// --- 1. Arrow Functions (=>) ---
console.log("\n--- 1. Arrow Functions ---");

const add = (a, b) => a + b;
console.log("add(5, 10) =", add(5, 10));

// The 'this' keyword demonstration
const person = {
    name: 'Jules',
    points: 10,

    // Regular function's `this` depends on how it's called.
    // Here, `this` correctly refers to the `person` object.
    addPoint_regular: function() {
        this.points++;
        console.log("Regular function `this`:", this.points); // Works as expected
    },

    // Arrow function's `this` is inherited from the parent scope.
    // Here, the parent scope is the global scope, not the `person` object.
    addPoint_arrow: function() {
        const arrowFunc = () => {
            this.points++;
            console.log("Arrow function `this`:", this.points); // Works because it inherits `this` from addPoint_arrow
        };
        arrowFunc();
    },
};

person.addPoint_regular(); // points becomes 11
person.addPoint_arrow();   // points becomes 12


// --- 2. Destructuring ---
console.log("\n--- 2. Destructuring ---");

// Array Destructuring
const numbers = [10, 20, 30, 40, 50];
const [first, second, , fourth] = numbers; // Skipping the third element
console.log("Array Destructuring:", `first: ${first}, second: ${second}, fourth: ${fourth}`);

// Object Destructuring
const user = {
    firstName: 'Ravi',
    age: 28,
    city: 'Hyderabad'
};
const { firstName, age: userAge, country = 'India' } = user;
console.log("Object Destructuring:", `name: ${firstName}, age: ${userAge}, country: ${country}`);


// --- 3. Spread (...) and Rest (...) Operators ---
console.log("\n--- 3. Spread & Rest Operators ---");

// Spread Operator
const arr1 = ['a', 'b'];
const arr2 = ['c', 'd'];
const combinedArr = [...arr1, 'x', ...arr2];
console.log("Spread for arrays:", combinedArr);

const obj1 = { name: 'Jules' };
const obj2 = { role: 'Engineer' };
const mergedObj = { ...obj1, ...obj2, location: 'Remote' };
console.log("Spread for objects:", mergedObj);

// Rest Operator
function sum(...args) {
    // `args` is now an array containing all arguments passed to the function
    console.log("Rest in function args:", args);
    return args.reduce((total, num) => total + num, 0);
}
console.log("Sum result:", sum(5, 10, 15, 20));

const [a, b, ...restOfItems] = [1, 2, 3, 4, 5, 6];
console.log("Rest in destructuring:", restOfItems);
