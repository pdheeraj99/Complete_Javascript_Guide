// This is the module that will be loaded on demand.

console.log("--- 'module.js' has been loaded and executed! ---");

export function greet() {
    alert("Hello from the dynamically imported module! 🎉");
    console.log("The greet() function from module.js was called.");
}
