// ============================================================================
// Section 19: Architectural Patterns - Code Examples
// To run this file: node 28_architectural_patterns/index.js
// ============================================================================

console.log("--- Architectural Patterns Code Examples ---");

// --- 1. State Management (Flux/Redux) Conceptual Example ---
console.log("\n--- 🏦 State Management (Flux/Redux) ---");

// The Reducer: A pure function that takes state and an action, and returns new state.
function counterReducer(state = { count: 0 }, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}

// A very simplified `createStore` function
function createStore(reducer) {
    let state;
    const listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return function unsubscribe() {
            const index = listeners.indexOf(listener);
            listeners.splice(index, 1);
        };
    };

    dispatch({ type: '@@INIT' }); // Initialize the state
    return { getState, dispatch, subscribe };
}

const store = createStore(counterReducer);

// Subscribe to state changes to update the "UI"
store.subscribe(() => {
    console.log("  UI Update -> New State:", store.getState());
});

console.log("Initial State:", store.getState());

// Dispatch actions to change the state
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });


// --- 2. Micro-frontends ---
console.log("\n--- 🧩 Micro-frontends ---");
console.log("Micro-frontends is a structural pattern. It's about how you organize and deploy your teams and codebases, rather than a specific code snippet. See the markdown file for a detailed explanation.");


// --- 3. Dependency Injection (DI) ---
console.log("\n--- 💉 Dependency Injection ---");

class Logger {
    log(message) {
        console.log(`[LOG]: ${message}`);
    }
}

// --- BAD: Without DI ---
// The UserService is tightly coupled to the Logger class.
// It's hard to test UserService without also using the real Logger.
class UserService_Bad {
    constructor() {
        this.logger = new Logger(); // Creates its own dependency
    }
    register(user) {
        this.logger.log(`Registering user ${user}`);
    }
}
console.log("\nWithout DI:");
const badService = new UserService_Bad();
badService.register('Ravi');


// --- GOOD: With DI ---
// The UserService receives its dependency from the outside.
// It's loosely coupled. We can easily provide a "mock" logger during testing.
class UserService_Good {
    constructor(logger) {
        this.logger = logger; // Dependency is "injected"
    }
    register(user) {
        this.logger.log(`Registering user ${user}`);
    }
}
console.log("\nWith DI:");
const logger = new Logger();
const goodService = new UserService_Good(logger); // The dependency is created outside and passed in.
goodService.register('Sita');
