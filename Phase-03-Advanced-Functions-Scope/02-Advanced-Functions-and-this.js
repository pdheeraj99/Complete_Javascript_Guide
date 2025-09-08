// ==================================================================
// ✨ Phase 3: Advanced Functions & `this` - Code Examples ✨
// ==================================================================

// --- 1. Arrow Functions ---
console.log("--- Arrow Functions ---");
const add = (a, b) => a + b;
const square = x => x * x;
console.log("add(5, 10):", add(5, 10));
console.log("square(8):", square(8));

// Key difference: `this` keyword behavior
const team = {
  name: "Warriors",
  members: ["Draymond", "Klay", "Steph"],

  // Regular function: `this` refers to the `team` object
  displayTeam_Regular: function() {
    console.log(`Team: ${this.name}`); // `this` is `team`
    this.members.forEach(function(member) {
      // PROBLEM: Inside this simple function call, `this` is NOT `team`.
      // It's `window` (or `undefined` in strict mode).
      console.log(`${member} is on team ${this.name}`); // Fails!
    });
  },

  // Arrow function: `this` is inherited from the parent scope (`displayTeam_Arrow`)
  displayTeam_Arrow: function() {
    console.log(`\nTeam: ${this.name}`); // `this` is `team`
    this.members.forEach(member => {
      // SOLUTION: Arrow function doesn't have its own `this`. It uses the parent's `this`.
      // The parent's `this` is the `team` object.
      console.log(`${member} is on team ${this.name}`); // Works!
    });
  }
};

// team.displayTeam_Regular(); // Uncomment to see the bug
team.displayTeam_Arrow();
console.log("\n");


// --- 2. IIFE (Immediately Invoked Function Expression) ---
console.log("--- IIFE ---");
(function() {
  const privateVar = "I am private to this IIFE.";
  console.log("Inside IIFE:", privateVar);
})();
// console.log(privateVar); // Error: privateVar is not defined in the global scope.
console.log("\n");


// --- 3. Controlling `this` with `call`, `apply`, `bind` ---
console.log("--- call, apply, bind ---");

const person1 = { name: "Prabhas" };
const person2 = { name: "Anushka" };

function greet(message, punctuation) {
  console.log(`${message}, my name is ${this.name}${punctuation}`);
}

// call(): pass arguments individually
console.log("Using .call():");
greet.call(person1, "Hello", "!"); // `this` is now `person1`
greet.call(person2, "Hi", ".");   // `this` is now `person2`

// apply(): pass arguments as an array
console.log("\nUsing .apply():");
greet.apply(person1, ["Namaste", "!!"]);
greet.apply(person2, ["Bonjour", "..."]);

// bind(): creates a NEW function with `this` permanently set
console.log("\nUsing .bind():");
const greetPrabhas = greet.bind(person1);
const greetAnushka = greet.bind(person2, "Hey there"); // We can even pre-set some arguments

greetPrabhas("Hello there", "."); // `this` is already bound to person1
greetAnushka("!"); // The first argument 'message' was already bound to "Hey there"

// A common use case for `bind`:
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
// console.log(unboundGetX()); // Fails! `this` is not `module`. It's `window` or `undefined`.

const boundGetX = unboundGetX.bind(module);
console.log("\nCalling bound function:", boundGetX()); // Works! `this` is now correctly bound to `module`.
console.log("\n");
