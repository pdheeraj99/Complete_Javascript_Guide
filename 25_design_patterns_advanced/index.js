// ============================================================================
// Section 16: Advanced Design Patterns - Code Examples
// To run this file: node 24_design_patterns_advanced/index.js
// ============================================================================

console.log("--- Advanced Design Patterns Examples ---");

// --- 1. The Factory Pattern ---
console.log("\n--- 🏭 Factory Pattern ---");

// The classes for the objects we want to create
class StandardUser {
    constructor(name) {
        this.name = name;
        this.type = 'Standard User';
    }
    greet() {
        console.log(`Hello, ${this.name}! You are a ${this.type}.`);
    }
}

class AdminUser {
    constructor(name) {
        this.name = name;
        this.type = 'Admin User';
    }
    greet() {
        console.log(`Welcome back, ${this.name}! You are an ${this.type}.`);
    }
}

// The Factory function
function userFactory(name, type) {
    switch (type) {
        case 'admin':
            return new AdminUser(name);
        case 'standard':
            return new StandardUser(name);
        default:
            throw new Error('Invalid user type specified.');
    }
}

// Client code uses the factory, not the `new` keyword directly.
const user1 = userFactory('Ravi', 'standard');
const user2 = userFactory('Sita', 'admin');

user1.greet();
user2.greet();


// --- 2. The Strategy Pattern ---
console.log("\n--- 🎯 Strategy Pattern ---");

// The "Context" that uses a strategy
class Shipping {
    constructor() {
        this.strategy = null;
    }

    setStrategy(strategy) {
        console.log(`\nSetting shipping strategy to: ${strategy.name}`);
        this.strategy = strategy;
    }

    calculate(pkg) {
        if (!this.strategy) {
            throw new Error("No shipping strategy has been set.");
        }
        return this.strategy.calculate(pkg);
    }
}

// The "Strategy" interface (conceptual) and concrete implementations
class StandardShipping {
    constructor() { this.name = "Standard Shipping"; }
    calculate(pkg) {
        // Example calculation: $1.50 per kg
        const cost = pkg.weight * 1.50;
        console.log(`Cost for ${this.name}: $${cost}`);
        return cost;
    }
}

class ExpressShipping {
    constructor() { this.name = "Express Shipping"; }
    calculate(pkg) {
        // Example calculation: $3.50 per kg
        const cost = pkg.weight * 3.50;
        console.log(`Cost for ${this.name}: $${cost}`);
        return cost;
    }
}

const packageDetails = { from: 'Hyderabad', to: 'Mumbai', weight: 2 };

// Client code
const shippingCalculator = new Shipping();

// Use the Standard strategy
shippingCalculator.setStrategy(new StandardShipping());
shippingCalculator.calculate(packageDetails);

// Change the strategy at runtime
shippingCalculator.setStrategy(new ExpressShipping());
shippingCalculator.calculate(packageDetails);
