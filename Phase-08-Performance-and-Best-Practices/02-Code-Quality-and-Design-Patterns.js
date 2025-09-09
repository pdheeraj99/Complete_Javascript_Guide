// ==================================================================
// 🎨 Phase 8: Code Quality & Design Patterns - Code Examples 🎨
// ==================================================================

// --- 1. Singleton Pattern ---
// Ensures that a class has only one instance and provides a global point of access to it.
console.log("--- Singleton Pattern ---");

const AppConfig = (function() {
  let instance;

  // The actual object we want to create
  function createInstance() {
    return {
      apiKey: "XYZ12345",
      apiUrl: "https://api.example.com",
      mode: "production"
    };
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const config1 = AppConfig.getInstance();
const config2 = AppConfig.getInstance();

console.log("Are config1 and config2 the same instance?", config1 === config2); // true
console.log("API Key:", config1.apiKey);
console.log("\n");


// --- 2. Factory Pattern ---
// Creates objects without specifying the exact class of object that will be created.
console.log("--- Factory Pattern ---");

// The classes for different types of employees
class Developer {
  constructor(name) {
    this.name = name;
    this.role = "Developer";
  }
  work() {
    console.log(`${this.name} is writing code.`);
  }
}

class Tester {
  constructor(name) {
    this.name = name;
    this.role = "Tester";
  }
  work() {
    console.log(`${this.name} is testing the application.`);
  }
}

// The factory that creates the objects
function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 'developer':
        return new Developer(name);
      case 'tester':
        return new Tester(name);
      default:
        throw new Error("Invalid employee type");
    }
  };
}

const factory = new EmployeeFactory();
const employees = [];

employees.push(factory.create("Ram", "developer"));
employees.push(factory.create("Sita", "tester"));

employees.forEach(emp => emp.work());
console.log("\n");


// --- 3. Observer Pattern ---
// Allows a "subject" object to maintain a list of its dependents, called "observers",
// and notify them automatically of any state changes.
console.log("--- Observer Pattern ---");

// The Subject (the one being watched)
class NewsPublisher {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
    console.log(`${subscriber.name} has subscribed.`);
  }

  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
    console.log(`${subscriber.name} has unsubscribed.`);
  }

  notify(news) {
    console.log("\n--- Publisher: Broadcasting news! ---");
    this.subscribers.forEach(subscriber => subscriber.update(news));
  }
}

// The Observer (the one watching)
class NewsReader {
  constructor(name) {
    this.name = name;
  }

  update(news) {
    console.log(`[${this.name}] received breaking news: "${news}"`);
  }
}

const publisher = new NewsPublisher();

const reader1 = new NewsReader("Reader Ravi");
const reader2 = new NewsReader("Reader Priya");
const reader3 = new NewsReader("Reader Anand");

publisher.subscribe(reader1);
publisher.subscribe(reader2);
publisher.subscribe(reader3);

publisher.notify("JavaScript is the most popular language!");

publisher.unsubscribe(reader2);

publisher.notify("A new JavaScript framework has been released!");
console.log("\n");
