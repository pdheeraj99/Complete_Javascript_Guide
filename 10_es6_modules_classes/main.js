// This file imports functionality from utils.js

// Import the default export and give it any name (e.g., sayHello)
import sayHello from './utils.js';

// Import the named exports. The names must be inside {} and match exactly.
import { PI, add } from './utils.js';

console.log("main.js module has been loaded.");

// Now we can use the imported functionality
console.log("\n--- ES6 Modules Demo ---");

// Using the default import
const message = sayHello('Jules');
console.log(message);

// Using the named imports
console.log("Value of PI:", PI);
console.log("Result of add(10, 5):", add(10, 5));

console.log("\nTo run this in a browser, you need an HTML file with <script type='module' src='main.js'></script>");
console.log("To run this with Node.js, ensure your package.json has '\"type\": \"module\"' or use the .mjs extension.");
