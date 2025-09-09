// ==================================================================
// 🤫 Phase 3: Closures - Code Examples 🤫
// ==================================================================

// --- 1. Basic Closure Example ---
console.log("--- Basic Closure Example ---");

function createGreeter(greeting) {
  // `greeting` is the variable in the "backpack" of the inner function.

  function greet(name) {
    // This inner function is a closure. It has access to `greeting`.
    console.log(`${greeting}, ${name}!`);
  }

  return greet;
}

// `createGreeter` has finished running. Its scope should be gone.
const sayHello = createGreeter("Hello");
const sayNamaste = createGreeter("Namaste");

// But the returned functions (`sayHello`, `sayNamaste`) still "remember"
// the `greeting` variable from their birthplace.
sayHello("Ram");    // Hello, Ram!
sayNamaste("Sita"); // Namaste, Sita!
console.log("\n");


// --- 2. Closure for Private State (Counter) ---
console.log("--- Closure for Private State ---");

function createCounter() {
  let count = 0; // `count` is a private variable, protected by the closure.

  return function() {
    count++;
    return count;
  };
}

const counter1 = createCounter();
console.log("Counter 1, 1st call:", counter1()); // 1
console.log("Counter 1, 2nd call:", counter1()); // 2
console.log("Counter 1, 3rd call:", counter1()); // 3

// Each call to `createCounter` creates a NEW, separate closure with its own private `count`.
const counter2 = createCounter();
console.log("\nCounter 2, 1st call:", counter2()); // 1
console.log("Counter 2, 2nd call:", counter2()); // 2
console.log("`counter1` is not affected:", counter1()); // 4
console.log("\n");


// --- 3. The Module Pattern ---
console.log("--- The Module Pattern ---");

const ShoppingCartModule = (function() {
  // --- Private members ---
  const items = []; // Private array, cannot be accessed from outside.

  function addItem(item) {
    items.push(item);
    console.log(`Added ${item.name} to the cart.`);
  }

  function getCartTotal() {
    return items.reduce((total, item) => total + item.price, 0);
  }

  // --- Public API ---
  // We only expose the methods we want the outside world to use.
  // This is our public interface.
  return {
    add: addItem,
    getTotal: getCartTotal,
    getCartItems: function() {
      // We return a copy to prevent the original `items` array from being modified.
      return [...items];
    }
  };
})();

ShoppingCartModule.add({ name: "Laptop", price: 50000 });
ShoppingCartModule.add({ name: "Headphones", price: 2000 });

// We cannot access the private `items` array directly.
// console.log(ShoppingCartModule.items); // undefined

console.log("Current cart items:", ShoppingCartModule.getCartItems());
console.log("Cart Total: ₹" + ShoppingCartModule.getTotal());
console.log("\n");

console.log("🎉 Phase 3 Advanced Functions & Scope Complete! You are now a JavaScript pro! 🎉");
