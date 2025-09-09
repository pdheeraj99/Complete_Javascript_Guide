// --- This is the `main.js` module ---
// It imports code from `utils.js`.

// To run this in a browser, your HTML would need:
// <script type="module" src="./main.js"></script>

// Importing the default export and named exports from `utils.js`
// You can give any name to the default import (`greetingFunction` here).
// Named imports must be inside {} and match the exported name.
import greetingFunction, { VERSION, add, double } from './utils.js';

// You can also rename named imports with `as`
import { add as sum } from './utils.js';

// Or import everything as a single object
import * as Utils from './utils.js';


console.log("--- `main.js` starting ---");

// Using the default export
const message = greetingFunction("Developer");
console.log(message);

console.log("\n--- Using Named Exports ---");
console.log("Module Version:", VERSION);
console.log("double(10):", double(10));
console.log("add(5, 3):", add(5, 3));

console.log("\n--- Using Renamed Import ---");
console.log("sum(100, 200):", sum(100, 200));

console.log("\n--- Using Namespace Import ---");
console.log("Utils.VERSION:", Utils.VERSION);
console.log("Utils.double(25):", Utils.double(25));

// This would fail, because SECRET_KEY was not exported from utils.js
// console.log(Utils.SECRET_KEY);

console.log("\n--- Dynamic Import Example ---");
// This demonstrates loading a module only when needed.
const condition = true;
if (condition) {
  console.log("Condition is true, dynamically importing a module...");
  import('./utils.js')
    .then((dynamicModule) => {
      // The loaded module is an object containing all its exports.
      console.log("Dynamically loaded module:", dynamicModule);
      console.log("Calling the default export from the dynamic module:", dynamicModule.default("Dynamic User"));
    })
    .catch(err => {
      console.error("Dynamic import failed", err);
    });
}
