// ==================================================================
// 🔍 Phase 3: Scope Deep Dive - Code Examples 🔍
// ==================================================================

// --- 1. Global, Function, and Block Scope ---
console.log("--- Scope Types ---");
const globalScopeVar = "I'm in the Global Scope 🌍";

function functionScopeTest() {
  const functionScopeVar = "I'm in a Function Scope 🏠";

  if (true) {
    const blockScopeVar = "I'm in a Block Scope 🧱";
    console.log(globalScopeVar);   // Accessible
    console.log(functionScopeVar); // Accessible
    console.log(blockScopeVar);    // Accessible
  }

  // console.log(blockScopeVar); // Error! blockScopeVar is not accessible outside its block.
}

functionScopeTest();
// console.log(functionScopeVar); // Error! functionScopeVar is not accessible outside its function.
console.log("\n");


// --- 2. Lexical Scoping ---
console.log("--- Lexical Scoping ---");
// The scope of `innerFunction` is determined by where it's written, not where it's called.
const myName = "Jules";

function showName() {
  // This function is defined in the global scope, so its outer environment is global.
  console.log("From showName:", myName);
}

function showNameWrapper() {
  const myName = "Not Jules"; // This variable is local to the wrapper.
  showName(); // We are CALLING `showName` here, but it was DEFINED globally.
}

showNameWrapper(); // Output: "From showName: Jules"
// It prints "Jules" because `showName`'s lexical environment is global, where `myName` is "Jules".
// It doesn't care that it was called from inside a function where `myName` was "Not Jules".
console.log("\n");


// --- 3. The Scope Chain ---
console.log("--- The Scope Chain ---");
const var1 = "Level 1 (Global)";

function level2() {
  const var2 = "Level 2";
  function level3() {
    const var3 = "Level 3";
    function level4() {
      // Searching for var1:
      // 1. Is it in level4? No.
      // 2. Go to outer scope (level3). Is it there? No.
      // 3. Go to outer scope (level2). Is it there? No.
      // 4. Go to outer scope (Global). Is it there? Yes! -> "Level 1 (Global)"
      console.log("Accessing var1 from Level 4:", var1);

      // Searching for var2:
      // 1. Is it in level4? No.
      // 2. Go to outer scope (level3). Is it there? No.
      // 3. Go to outer scope (level2). Is it there? Yes! -> "Level 2"
      console.log("Accessing var2 from Level 4:", var2);
    }
    level4();
  }
  level3();
}

level2();
console.log("\n");


// --- 4. Variable Shadowing ---
console.log("--- Variable Shadowing ---");
let food = "Pizza 🍕";
console.log("Outer scope food:", food);

function favoriteFood() {
  let food = "Biryani 🍛"; // This 'food' variable shadows the outer one.
  console.log("Inner scope food:", food); // JavaScript finds this one first and stops searching.

  // You can still access the global scope, but it's more complex (and generally not recommended).
}

favoriteFood();
console.log("Outer scope food is unchanged:", food);
console.log("\n");


// --- 5. Temporal Dead Zone (TDZ) ---
console.log("--- Temporal Dead Zone (TDZ) ---");
function tdzDemo() {
  // The TDZ for `superhero` starts here.
  // console.log(superhero); // This line would throw a ReferenceError.
  // The TDZ for `superhero` ends at the declaration below.

  let superhero = "Iron Man";
  console.log("Superhero is:", superhero);
}

tdzDemo();
console.log("\n");
