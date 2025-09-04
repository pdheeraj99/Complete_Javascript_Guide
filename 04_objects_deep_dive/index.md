# Section 4: JavaScript Objects Deep Dive 🗃️

Mawa, welcome to one of the most important sections! JavaScript lo objects anevi oka core building block. In fact, manam nerchukunna arrays kuda background lo special type of objects ye! Let's dive deep.

---

### 🤔 1. What are Objects? (Recap)

*   An object is a collection of related data and/or functionality.
*   Ee data ni manam **key-value pairs** lo store chestam.
*   **Analogy 📖**: Think of an object like a dictionary. You look up a "key" (the word) to find its "value" (the definition).

---

### ✍️ 2. Creating & Working with Properties

*   **Creating Objects**: The easiest way is using the **object literal** syntax: `{}`.
    ```javascript
    const myCar = {
        make: 'Hyundai',
        model: 'Verna',
        year: 2023
    };
    ```
*   **Accessing Properties**:
    *   **Dot Notation (`.`):** `myCar.model` // Most common
    *   **Bracket Notation (`[]`):** `myCar['model']` // Useful if the key is a variable or has spaces/special characters.
*   **Adding/Updating Properties**:
    *   `myCar.color = 'black';` // Adds a new property
    *   `myCar.year = 2024;` // Updates an existing property
*   **Deleting Properties**:
    *   The `delete` keyword is used to completely remove a property.
    *   `delete myCar.year;`

---

### 📞 3. Methods (Functions on Objects)

*   When a function is a property of an object, it's called a **method**.
*   Methods are used to represent the *actions* an object can perform.

*   **Introducing `this`**:
    *   Inside a method, the special keyword `this` refers to **the object the method was called on**.
    *   Idi method ki, adi ഏ object ki chendhinado chepthundhi.
    ```javascript
    const person = {
        name: 'Ravi',
        greet: function() {
            // Here, `this` refers to the `person` object.
            console.log(`Hello, my name is ${this.name}.`);
        }
    };
    person.greet(); // Prints "Hello, my name is Ravi."
    ```

---

### 🔄 4. Iterating Over Objects

Arrays ni loop cheyadaniki `for...of` vadatham, kani objects ki adi direct ga pani cheyadu. Here are the ways to loop over objects:

*   **`for...in` loop**:
    *   This loop iterates over the **keys** (property names) of an object.
    ```javascript
    for (const key in myCar) {
        console.log(`${key}: ${myCar[key]}`);
    }
    ```
*   **`Object.keys(obj)`**:
    *   Returns an **array** of the object's keys. Ee array meedha manam `forEach` or `for...of` vadొచ్చు.
*   **`Object.values(obj)`**:
    *   Returns an **array** of the object's values.
*   **`Object.entries(obj)`**:
    *   Returns an **array of `[key, value]` pairs**. This is very useful with `for...of` and destructuring!
    ```javascript
    for (const [key, value] of Object.entries(myCar)) {
        console.log(`${key} -> ${value}`);
    }
    ```

---

### 🏠 5. Reference Types (Objects vs. Primitives)

This is a critical concept! 🧠
*   **Primitives** (`String`, `Number`, `Boolean`, etc.) are passed by **value**.
    *   Ante, manam oka variable ni inko daaniki assign cheste, adi oka *copy* create chestundhi.
    *   `let a = 10; let b = a; b = 20;` // Here, `a` is still `10`.
*   **Objects** (and Arrays) are passed by **reference**.
    *   Ante, manam oka object ni inko variable ki assign cheste, adi object ni copy cheyadu. Adi aa object yokka memory **address** ni matrame copy chestundhi.
    *   `let obj1 = { name: 'A' }; let obj2 = obj1; obj2.name = 'B';` // Here, `obj1.name` is now also `'B'`!
    *   **Analogy**: Primitives are like giving someone a *photocopy* 📄. Objects are like giving someone the *address to your house* 🏠. If they go to that address and paint the door, you will see the change because there's only one house.

---

### ✨ 6. Useful `Object` Methods

*   `Object.assign(target, ...sources)`:
    *   Copies all properties from one or more source objects to a target object. Useful for merging objects.
*   `Object.freeze(obj)`:
    *   "Freezes" an object. You cannot add, delete, or change any of its properties. It makes the object immutable.
*   `Object.seal(obj)`:
    *   You can change existing property values, but you cannot add or delete properties.

Now let's see these in action in the code!
