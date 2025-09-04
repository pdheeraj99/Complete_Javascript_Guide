// ============================================================================
// Section 5.2: Classes - Code Examples
// To run this file: node 10_es6_modules_classes/classes.js
// ============================================================================

console.log("--- ES6 Classes Demo ---");

// --- 1. Basic Class Definition ---
class Person {
    // The constructor is a special method for creating and initializing an object
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // This is a method
    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

console.log("\n--- Creating an instance of Person ---");
const person1 = new Person('Ravi', 30);
person1.introduce();


// --- 2. Inheritance with 'extends' and 'super' ---
class Engineer extends Person {
    constructor(name, age, field) {
        // 'super' calls the constructor of the parent class (Person)
        // This must be called before using 'this'
        super(name, age);
        this.field = field;
    }

    work() {
        // We can also call methods from the parent class using 'super'
        super.introduce();
        console.log(`I am an engineer in the ${this.field} field.`);
    }
}

console.log("\n--- Creating an instance of Engineer ---");
const engineer1 = new Engineer('Sita', 25, 'Software Development');
engineer1.work();


// --- 3. Getters and Setters ---
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // A 'getter' provides a way to "get" a computed property
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // A 'setter' provides a way to "set" a property, with logic
    set fullName(name) {
        if (typeof name === 'string' && name.includes(' ')) {
            const parts = name.split(' ');
            this.firstName = parts[0];
            this.lastName = parts[1];
        } else {
            console.log("Please provide a full name with a space.");
        }
    }
}

console.log("\n--- Getters and Setters Demo ---");
const user1 = new User('Anil', 'Kumar');
// Using the getter like a property
console.log("Full name (getter):", user1.fullName);

// Using the setter like a property
user1.fullName = 'Bhanu Prakash';
console.log("Updated first name:", user1.firstName);
console.log("Updated full name (getter):", user1.fullName);
