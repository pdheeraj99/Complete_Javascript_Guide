// ==================================================================
// 🍬 Phase 4: ES6+ Classes - Code Examples 🍬
// ==================================================================

// --- 1. Basic Class and Instance Methods ---
console.log("--- Basic Class ---");

class Pet {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  // This is an instance method. Each pet object will have it.
  makeSound() {
    console.log(`${this.name} says: ${this.sound}`);
  }
}

const cat = new Pet("Whiskers", "Meow");
const dog = new Pet("Buddy", "Woof");

cat.makeSound();
dog.makeSound();
console.log("\n");


// --- 2. Inheritance with `extends` and `super` ---
console.log("--- Inheritance ---");

// The `Pet` class is our Parent class.
class Dog extends Pet {
  constructor(name, breed) {
    // `super` calls the parent constructor (Pet's constructor)
    // It sets `this.name` and `this.sound` for us.
    super(name, "Woof");
    this.breed = breed;
  }

  // A new method specific to Dog
  fetch() {
    console.log(`${this.name} the ${this.breed} is fetching the ball!`);
  }

  // Overriding a parent method
  makeSound() {
    // We can call the parent's original method using `super` if we want.
    super.makeSound();
    console.log("(He's a very good boy)");
  }
}

const myDog = new Dog("Max", "Golden Retriever");
myDog.makeSound(); // Calls the overridden method
myDog.fetch();
console.log("\n");


// --- 3. Static Methods ---
console.log("--- Static Methods ---");

class User {
  constructor(username) {
    this.username = username;
  }

  // This is a static method. It's called on the Class itself, not an instance.
  static getMinPasswordLength() {
    return 8;
  }
}

console.log("Minimum password length required:", User.getMinPasswordLength());
const user1 = new User("JohnDoe");
// console.log(user1.getMinPasswordLength()); // This would be an error.
console.log("\n");


// --- 4. Getters and Setters ---
console.log("--- Getters and Setters ---");

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Getter for diameter
  get diameter() {
    return this.radius * 2;
  }

  // Setter for diameter
  set diameter(newDiameter) {
    if (newDiameter > 0) {
      this.radius = newDiameter / 2;
    } else {
      console.log("Diameter must be positive.");
    }
  }
}

const circle = new Circle(5);
console.log("Initial radius:", circle.radius); // 5
console.log("Initial diameter (using getter):", circle.diameter); // 10

// Use the setter to change the diameter (and indirectly, the radius)
circle.diameter = 20;
console.log("New radius (after setting diameter):", circle.radius); // 10
console.log("\n");


// --- 5. Private Fields and Methods ---
console.log("--- Private Fields and Methods ---");

class Wallet {
  // `#` makes this field private. It cannot be accessed from outside the class.
  #balance;

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  // This is a private method
  #log(action, amount) {
    console.log(`[Wallet Log] Action: ${action}, Amount: ${amount}, New Balance: ${this.#balance}`);
  }

  deposit(amount) {
    this.#balance += amount;
    this.#log("DEPOSIT", amount);
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      this.#log("WITHDRAW", amount);
    } else {
      console.log("Insufficient funds!");
    }
  }

  // Public method to view balance
  checkBalance() {
    return `Your current balance is: $${this.#balance}`;
  }
}

const myWallet = new Wallet(100);
myWallet.deposit(50);
myWallet.withdraw(30);
console.log(myWallet.checkBalance());

// console.log(myWallet.#balance); // This would be a SyntaxError.
// myWallet.#log("test", 10);      // This would also be a SyntaxError.
console.log("\n");

console.log("🎉 Phase 4 Object-Oriented Programming Complete! You've mastered blueprints and classes! 🎉");
