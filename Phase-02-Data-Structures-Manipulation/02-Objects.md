# 🗂️ Phase 2: Understanding Objects 🗂️

Arrays tarvata, Objects anevi JavaScript lo atyanta mukhyamaina data structure. Arrays anevi ordered lists aite, Objects anevi **unordered collections of key-value pairs**.

---

### 1. Object Creation (Literal Notation)

Most common way object ni create cheyadaniki curly braces `{}` vaadatham.

```javascript
// An empty object
const emptyObject = {};

// A 'car' object with properties
const car = {
  brand: "Hyundai",
  model: "i20",
  year: 2022,
  isElectric: false,
  features: ["Airbags", "Power Steering", "Music System"] // Value can be an array
};
```
*   `brand`, `model`, `year` anevi **keys** (or properties).
*   `"Hyundai"`, `"i20"`, `2022` anevi **values**.

---

### 2. Property Access (Dot vs. Bracket Notation)

Object lo unna values ni access cheyadaniki rendu ways unnayi.

**a) Dot Notation (`.`):**
Idi simple, clean, and most common way.

```javascript
console.log(car.brand); // Output: Hyundai
console.log(car.year);  // Output: 2022
```
**b) Bracket Notation (`[]`):**
Idi inkonchem flexible and powerful. Key ni string ga pass cheyali.

```javascript
console.log(car['model']); // Output: i20
```

#### When to use Bracket Notation? 🤔
Dot notation anni sarlu panicheyadu. Bracket notation ee situations lo avasaram:

1.  **If the key has spaces or special characters:**
    ```javascript
    const user = {
      "full name": "Arjun Reddy",
      "user-role": "Doctor"
    };
    // console.log(user.full name); // Syntax Error!
    console.log(user["full name"]); // "Arjun Reddy" ✅
    ```
2.  **If the key is a variable:**
    ```javascript
    let propertyToGet = "brand";
    console.log(car[propertyToGet]); // "Hyundai" ✅
    // console.log(car.propertyToGet); // undefined (idi "propertyToGet" ane key ni vetukutundi)
    ```

---

### 3. Object Methods and `this` Keyword Basics

Manam object ki properties laaga functions ni kuda add cheyochu. Veetine **methods** antaru.

```javascript
const person = {
  firstName: "Riya",
  lastName: "Sharma",
  birthYear: 1998,

  // This is a method
  calculateAge: function() {
    const currentYear = 2024;
    // `this` refers to the object the method is called on (i.e., 'person')
    return currentYear - this.birthYear;
  },

  // A method to get the full name
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(person.getFullName()); // Output: Riya Sharma
console.log(`Riya's age is: ${person.calculateAge()}`); // Output: Riya's age is: 26
```
**`this` keyword:** Oka method lopala, `this` keyword anedi aa method ye object ki sambandinchindo aa **object ni refer chestundi**. So, `this.birthYear` ante `person.birthYear` anamata. `this` gurinchi manam tarvata inka deep ga nerchukundam.

---

### 4. Object Destructuring (ES6 Feature) ✨

Array destructuring laage, object nunchi values ni easy ga variables loki extract cheyadaniki idi vaadatharu.

```javascript
const product = {
  id: "P123",
  name: "Laptop",
  price: 80000,
  inStock: true
};

// Old way
// const name = product.name;
// const price = product.price;

// Destructuring way
const { name, price, stockStatus } = product;
// Note: Variable names must match the key names.

console.log(name);  // "Laptop"
console.log(price); // 80000

// We can also rename variables
const { name: productName, price: productPrice } = product;
console.log(productName); // "Laptop"
```

---

### 5. Property Enumeration (`for...in` loop)

Object lo unna anni properties (keys) meeda loop cheyadaniki `for...in` vaadathamu.

```javascript
const student = {
  name: "Kiran",
  id: "S101",
  major: "Computer Science"
};

for (const key in student) {
  console.log(`Key: ${key}, Value: ${student[key]}`);
}
// Output:
// Key: name, Value: Kiran
// Key: id, Value: S101
// Key: major, Value: Computer Science
```
`Property Descriptors` anedi advanced topic. Adi object properties ni ela configure cheyalo (e.g., writable, enumerable) cheptundi. Manam Advanced Concepts phase lo daani gurinchi chuddam.
