// ==================================================================
// 🛠️ Phase 4: Prototypes & Constructors - Code Examples 🛠️
// ==================================================================

// --- 1. Constructor Function ---
console.log("--- Constructor Function ---");

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

const car1 = new Car("Toyota", "Camry", 2021);
const car2 = new Car("Honda", "Civic", 2022);

console.log("Car 1:", car1);
console.log("Car 2:", car2);
console.log("\n");


// --- 2. The Problem: Inefficient Methods ---
console.log("--- Inefficient Method Definition ---");

function Dog_Inefficient(name) {
  this.name = name;
  // This `bark` function is RECREATED for every single Dog instance.
  this.bark = function() {
    return `Woof! My name is ${this.name}.`;
  };
}

const dog1_inefficient = new Dog_Inefficient("Buddy");
const dog2_inefficient = new Dog_Inefficient("Lucy");

// Let's check if the `bark` methods are the same function object.
console.log("Are the two bark methods the same?", dog1_inefficient.bark === dog2_inefficient.bark); // false -> Waste of memory!
console.log("\n");


// --- 3. The Solution: Using the Prototype ---
console.log("--- Efficient Method Definition with Prototype ---");

function Dog_Efficient(name) {
  this.name = name;
}

// The `bark` method is defined ONCE on the Dog_Efficient's prototype.
Dog_Efficient.prototype.bark = function() {
  return `Woof! My name is ${this.name}.`;
};

// All instances will SHARE this single `bark` method.
const dog1_efficient = new Dog_Efficient("Buddy");
const dog2_efficient = new Dog_Efficient("Lucy");

console.log(dog1_efficient.bark());
console.log(dog2_efficient.bark());

// Let's check again.
console.log("Are the two bark methods the same?", dog1_efficient.bark === dog2_efficient.bark); // true -> Memory saved!
console.log("\n");


// --- 4. The Prototype Chain in Action ---
console.log("--- The Prototype Chain ---");

// `dog1_efficient` doesn't have the `bark` property itself.
console.log("Does dog1 have its own 'bark' property?", dog1_efficient.hasOwnProperty('bark')); // false

// It finds it on its prototype.
// `__proto__` is a way to look at an object's prototype (don't use it in production code, just for learning).
// `Object.getPrototypeOf()` is the correct way.
console.log("Is `bark` on the prototype?", Object.getPrototypeOf(dog1_efficient).hasOwnProperty('bark')); // true

// The prototype of a Dog's prototype is the base Object.prototype.
console.log("The 'toString' method is even further up the chain, on Object.prototype:");
console.log(dog1_efficient.toString()); // Example: [object Object]
console.log("\n");


// --- 5. Inheritance with Prototypes ---
console.log("--- Prototypal Inheritance ---");

function Hero(name) {
  this.name = name;
}
Hero.prototype.greet = function() {
  return `I am ${this.name}.`;
};

function SuperHero(name, power) {
  // Call the Hero constructor to set the `name` property on the new object.
  Hero.call(this, name);
  this.power = power;
}

// Set up the prototype chain: SuperHero's prototype should be an object
// that itself has Hero.prototype as its prototype.
SuperHero.prototype = Object.create(Hero.prototype);
// After this, we need to reset the constructor property.
SuperHero.prototype.constructor = SuperHero;

SuperHero.prototype.usePower = function() {
  return `${this.name} uses ${this.power}!`;
};

const superman = new SuperHero("Superman", "Flight");
console.log(superman.greet());    // Inherited from Hero.prototype
console.log(superman.usePower()); // Own method from SuperHero.prototype
console.log("\n");
