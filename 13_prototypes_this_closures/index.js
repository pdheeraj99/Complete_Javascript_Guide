// ============================================================================
// Section 6.1: The Three Pillars - Code Examples
// To run this file: node 12_prototypes_this_closures/index.js
// ============================================================================

console.log("--- The Three Pillars: Prototypes, `this`, and Closures ---");

// --- 1. Prototypes and Prototypal Inheritance ---
console.log("\n--- 1. Prototypes ---");

// A prototype object
const human = {
    talk() {
        return `I am ${this.name}`;
    }
};

// Create a new object with `human` as its prototype
const developer = Object.create(human);
developer.name = 'Jules'; // Add a property to the new object

// `developer` itself doesn't have a `talk` method,
// so JavaScript looks up the prototype chain and finds it on `human`.
console.log(developer.talk()); // "I am Jules"

// We can verify the prototype link
console.log("Is `human` the prototype of `developer`?", Object.getPrototypeOf(developer) === human);


// --- 2. `this` Keyword Demonstration ---
console.log("\n--- 2. `this` Keyword ---");

const user = {
    name: 'Ravi',
    // Rule 2: Implicit Binding
    greet() {
        console.log(`Implicit binding: Hello from ${this.name}`);
    }
};
user.greet(); // `this` is the `user` object

function globalGreet() {
    // Rule 1: Global Binding (in Node, `this` is the global object, not `undefined` like in browser strict mode)
    // In a browser in strict mode, `this` would be undefined and this would throw an error.
    console.log(`Global binding: Hello from ${this.name}`); // `this.name` will be undefined
}
globalGreet();

const anotherUser = { name: 'Sita' };
// Rule 3: Explicit Binding with .call()
user.greet.call(anotherUser); // `this` is explicitly set to `anotherUser`

// Rule 4: `new` Keyword Binding
function Person(name) {
    // When called with `new`, `this` is a brand new empty object
    this.name = name;
}
const person1 = new Person('Anil');
console.log(`'new' keyword binding: New person's name is ${person1.name}`);


// --- 3. Closures ---
console.log("\n--- 3. Closures ---");

// Example 1: Function Factory
function createGreeter(greeting) {
    // The inner function "closes over" the `greeting` variable
    return function(name) {
        console.log(`${greeting}, ${name}!`);
    };
}

const sayHello = createGreeter('Hello');
sayHello('Mawa');

// Example 2: Data Privacy with the Module Pattern
function createCounter() {
    let count = 0; // This variable is PRIVATE

    // The returned object is the public interface
    return {
        increment() {
            count++;
            console.log("Count is now", count);
        },
        getValue() {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
// We cannot access `count` directly from the outside.
// The line below would result in `undefined`.
console.log("Direct access to count:", counter.count);
console.log("Access via public method:", counter.getValue());
