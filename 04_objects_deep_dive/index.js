// ============================================================================
// Section 4: JavaScript Objects Deep Dive - Code Examples
// To run this file: node 04_objects_deep_dive/index.js
// ============================================================================

console.log("--- Objects Deep Dive Examples ---");

// --- 1. Creating & Working with Properties ---
console.log("\n--- 1. Creating & Working with Properties ---");
const myCar = {
    make: 'Hyundai',
    model: 'Verna',
    year: 2023
};
console.log("Original car object:", myCar);

// Accessing
console.log("Car model (dot notation):", myCar.model);
console.log("Car model (bracket notation):", myCar['model']);

// Adding a new property
myCar.color = 'black';
console.log("After adding color:", myCar);

// Deleting a property
delete myCar.year;
console.log("After deleting year:", myCar);


// --- 2. Methods (Functions on Objects) & `this` ---
console.log("\n--- 2. Methods and `this` ---");
const person = {
    name: 'Ravi',
    greet: function() {
        // `this` refers to the `person` object
        console.log(`Hello, my name is ${this.name}.`);
    }
};
person.greet();


// --- 3. Iterating Over Objects ---
console.log("\n--- 3. Iterating Over Objects ---");
const laptop = {
    brand: 'Dell',
    ram: '16GB',
    ssd: '512GB'
};

console.log("\nUsing for...in (iterates over keys):");
for (const key in laptop) {
    console.log(`  ${key}: ${laptop[key]}`);
}

console.log("\nUsing Object.keys():");
console.log(Object.keys(laptop)); // [ 'brand', 'ram', 'ssd' ]

console.log("\nUsing Object.values():");
console.log(Object.values(laptop)); // [ 'Dell', '16GB', '512GB' ]

console.log("\nUsing Object.entries() with for...of:");
for (const [key, value] of Object.entries(laptop)) {
    console.log(`  ${key} -> ${value}`);
}


// --- 4. Reference Types (Objects vs. Primitives) ---
console.log("\n--- 4. Reference vs. Value ---");
// Primitives are passed by VALUE (a copy is made)
let a = 10;
let b = a;
b = 20;
console.log("Primitive 'a':", a); // a is still 10
console.log("Primitive 'b':", b);

// Objects are passed by REFERENCE (a "pointer" or "address" is copied)
let obj1 = { name: 'A' };
let obj2 = obj1;
obj2.name = 'B';
console.log("Object 'obj1':", obj1); // obj1's name is also changed to 'B'
console.log("Object 'obj2':", obj2);


// --- 5. Useful Object Methods ---
console.log("\n--- 5. Useful Object Methods ---");

// Object.assign()
const target = { a: 1 };
const source = { b: 2, c: 3 };
const merged = Object.assign(target, source);
console.log("Object.assign() merged object:", merged);
console.log("Target object was mutated:", target); // Note: target is changed

// Object.freeze()
const frozenObj = { prop: 'cannot change' };
Object.freeze(frozenObj);
try {
    frozenObj.prop = 'new value'; // Fails silently, or throws error in strict mode
} catch (e) {
    console.error(e.message);
}
console.log("Frozen object prop:", frozenObj.prop); // 'cannot change'
