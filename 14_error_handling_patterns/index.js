// ============================================================================
// Section 6.3: Robust Code - Code Examples
// To run this file: node 14_error_handling_patterns/index.js
// ============================================================================

console.log("--- Robust Code: Error Handling & Design Patterns ---");

// --- 1. Advanced Error Handling ---
console.log("\n--- 1. Custom Errors ---");

// Create a custom error class
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function registerUser(username) {
    if (!username || username.length < 3) {
        throw new ValidationError("Username must be at least 3 characters long.");
    }
    console.log(`User '${username}' registered successfully.`);
}

try {
    registerUser("Jules"); // This will work
    registerUser("ab");    // This will throw an error
} catch (error) {
    if (error instanceof ValidationError) {
        console.error("Caught a validation error:", error.message);
    } else {
        console.error("An unknown error occurred:", error);
    }
}


// --- 2. Design Patterns ---
console.log("\n--- 2. Design Patterns ---");

// a) Module Pattern (using an IIFE)
console.log("\n--- Module Pattern ---");
const counterModule = (function() {
    let privateCount = 0; // Private variable

    function privateIncrement() {
        privateCount++;
    }

    return {
        // Public API
        increment: function() {
            privateIncrement();
        },
        getCount: function() {
            return privateCount;
        }
    };
})();

counterModule.increment();
console.log("Module count:", counterModule.getCount());
console.log("Trying to access private count:", counterModule.privateCount); // undefined


// b) Singleton Pattern
console.log("\n--- Singleton Pattern ---");
class ConfigManager {
    constructor() {
        this.settings = { theme: 'dark', version: '1.0' };
    }

    static getInstance() {
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }
}

const config1 = ConfigManager.getInstance();
const config2 = ConfigManager.getInstance();
console.log("Are config1 and config2 the same instance?", config1 === config2); // true


// c) Observer Pattern
console.log("\n--- Observer Pattern ---");
class NewsAgency { // This is the "Subject"
    constructor() {
        this.subscribers = []; // List of "Observers"
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    unsubscribe(subscriber) {
        this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
    }

    notify(news) {
        console.log(`\n--- Agency is publishing news: "${news}" ---`);
        this.subscribers.forEach(subscriber => subscriber(news));
    }
}

// These are the "Observers"
const cnn = (news) => console.log(`CNN Breaking News: ${news}`);
const bbc = (news) => console.log(`BBC World Service: ${news}`);

const agency = new NewsAgency();
agency.subscribe(cnn);
agency.subscribe(bbc);

agency.notify("A new JavaScript course has been completed!");

// Unsubscribe BBC
agency.unsubscribe(bbc);

agency.notify("The developer is now looking for a job.");


// --- 4. Error vs. Exception Demo ---
console.log("\n--- 4. Error vs. Exception Demo ---");

try {
    console.log("About to throw an error...");
    // 1. We create a new `Error` object.
    const myErrorObject = new Error("This is my custom error message!");

    // 2. We `throw` the error object. This action creates the "exception".
    // It stops the normal flow inside the `try` block.
    throw myErrorObject;

    console.log("This line will never be reached.");

} catch (caughtError) { // 3. The "exception" is caught here.
    // `caughtError` is the `Error` object that we threw.
    console.log("An exception was caught!");
    console.log("Is the caught thing an Error object?", caughtError instanceof Error); // true
    console.log("The message from the Error object is:", caughtError.message);
}
