// ============================================================================
// Section 8: Closures & Scope Deep Dive - Code Examples
// To run this file: node 16_closures_scope_deep_dive/index.js
// ============================================================================

console.log("--- Closures & Scope Deep Dive Examples ---");

// --- 1. Lexical Environment & Closure Demo ---
console.log("\n--- 1. Lexical Environment & Closure ---");

function outerFunction() {
    const outerVariable = "I am from the outer scope!";

    function innerFunction() {
        // innerFunction "closes over" outerVariable.
        // It has access to it because of the link to its parent's lexical environment.
        console.log(outerVariable);
    }

    return innerFunction;
}

const myClosure = outerFunction();
// Even though outerFunction() has finished executing, myClosure still has access to outerVariable.
myClosure();


// --- 2. IIFE (Immediately Invoked Function Expression) ---
console.log("\n--- 2. IIFE ---");

(function() {
    const iifeVariable = "I am private to the IIFE.";
    console.log(iifeVariable);
})();

// The line below would cause a ReferenceError because iifeVariable is not in the global scope.
// console.log(iifeVariable);


// --- 3. The Module Pattern (Revisited) ---
console.log("\n--- 3. Module Pattern ---");

const shoppingCart = (function() {
    // Private state
    const items = [];

    // Public API
    return {
        addItem(item) {
            items.push(item);
            console.log(`${item} added to cart.`);
        },
        getItems() {
            // Return a copy to prevent external modification of the private array
            return [...items];
        },
        getItemCount() {
            return items.length;
        }
    };
})();

shoppingCart.addItem("Apple");
shoppingCart.addItem("Banana");
console.log("Items in cart:", shoppingCart.getItems());
console.log("Total items:", shoppingCart.getItemCount());

// We cannot access the private `items` array directly.
console.log("Attempting to access private items:", shoppingCart.items); // undefined


// --- 4. Memory Leak Conceptual Example ---
console.log("\n--- 4. Memory Leak (Conceptual) ---");

// This array will hold our "leaked" closures
const leakyClosures = [];

function createLeakyClosure() {
    // Imagine this is a very large object, like a big dataset or a media file.
    const largeObject = new Array(1000000).fill('*');

    // This function is a closure. It has a reference to its parent scope,
    // which includes `largeObject`.
    const myClosure = () => {
        // It doesn't even have to USE the variable to hold the reference.
        // console.log("Closure called");
    };

    // In a real browser scenario, this would be like adding an event listener:
    // someDOMElement.addEventListener('click', myClosure);

    // We store the closure in a global array.
    leakyClosures.push(myClosure);
}

// Every time we call this, we create a new large object and a new closure
// that prevents the object from being garbage collected.
createLeakyClosure();
createLeakyClosure();
createLeakyClosure();

console.log(`Created ${leakyClosures.length} leaky closures.`);
console.log("Each one is holding a large object in memory, even though it's no longer needed.");
console.log("In a long-running application, this would cause memory usage to grow over time.");
