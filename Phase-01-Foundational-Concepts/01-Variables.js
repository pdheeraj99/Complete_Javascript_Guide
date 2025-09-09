// ==================================================================
// 🚀 Phase 1: Variables (var, let, const) - Code Examples 🚀
// ==================================================================

// Ee file lo manam 'var', 'let', and 'const' gurinchi code examples chuddam.
// Mee browser console lo or Node.js environment lo ee code run chesi chudandi.

// --- 1. `var` ---
console.log("--- `var` EXAMPLES ---");

// Hoisting with `var`
console.log("Before declaration, myVar is:", myVar); // Output: undefined
var myVar = "I am a var variable";
console.log("After declaration, myVar is:", myVar); // Output: I am a var variable

// Function Scope with `var`
function testVarScope() {
  var functionScopedVar = "I am inside a function";
  console.log(functionScopedVar);
}

testVarScope(); // Output: I am inside a function
// console.log(functionScopedVar); // Error! functionScopedVar is not defined outside the function.

// Block Scope Issue with `var`
if (true) {
  var blockVar = "I am defined inside an if block";
}
console.log("Outside the block, blockVar is:", blockVar); // No error! 'var' leaks outside the block. This can cause bugs.

console.log("\n"); // Just for spacing

// --- 2. `let` ---
console.log("--- `let` EXAMPLES ---");

// 'let' allows re-assignment
let season = "Winter";
console.log("The current season is:", season);
season = "Summer";
console.log("Now the season is:", season);

// Block Scope with `let`
if (true) {
  let blockLet = "I am a block-scoped let";
  console.log(blockLet); // Output: I am a block-scoped let
}
// console.log(blockLet); // Error! blockLet is not defined outside the block. This is good! ✨

// Temporal Dead Zone (TDZ) with `let`
try {
  // console.log(tdzLet); // Uncommenting this line will cause a ReferenceError
} catch (e) {
  console.log("Error caught:", e.message);
}
let tdzLet = "Initialized after the try-catch block";
console.log("tdzLet is now accessible:", tdzLet);

console.log("\n");

// --- 3. `const` ---
console.log("--- `const` EXAMPLES ---");

// 'const' does not allow re-assignment
const PI = 3.14159;
console.log("The value of PI is:", PI);
// PI = 3.14; // This will cause a TypeError. Uncomment to see the error.

// 'const' must be initialized at declaration
// const GRAVITY; // This will cause a SyntaxError. Uncomment to see the error.
// GRAVITY = 9.8;

// 'const' with Objects
// The object itself cannot be re-assigned, but its properties can be changed.
const user = {
  username: "alex",
  role: "developer"
};

console.log("Original user object:", user);

// Modifying a property is allowed
user.role = "senior developer";
console.log("Modified user object:", user);

// Re-assigning the entire object is NOT allowed
try {
  // user = { username: "bob" }; // This will cause a TypeError.
} catch (e) {
  console.log("Error caught:", e.message);
}

// 'const' with Arrays
// Same principle as objects applies to arrays.
const colors = ["red", "green", "blue"];
console.log("Original colors array:", colors);

// We can modify the array (e.g., push a new item)
colors.push("yellow");
console.log("Modified colors array:", colors);

// But we cannot re-assign the array variable
// colors = ["pink", "orange"]; // This will cause a TypeError.

console.log("\n--- BEST PRACTICES ---");
console.log("1. Use `const` by default. 💎");
console.log("2. Use `let` only when you know you need to re-assign the variable. ✅");
console.log("3. Avoid using `var` in modern JavaScript. ❌");
