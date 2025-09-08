# 🚀 Phase 7: ES6+ Syntax Upgrades 🚀

Ee topic lo manam everyday coding ni easy and clean ga chese konni modern features gurinchi nerchukundam.

---

### 1. Destructuring Assignment

Destructuring anedi arrays or objects nunchi values ni unpack chesi, variables loki assign cheyadaniki oka easy syntax.

#### a) Object Destructuring
Object keys tho match ayye variable names loki values ni extract chestundi.

```javascript
const user = {
  id: 101,
  fullName: "Mahesh Babu",
  email: "mahesh@example.com"
};

// Old way:
// const fullName = user.fullName;
// const email = user.email;

// Destructuring way:
const { fullName, email } = user;
console.log(fullName, email); // "Mahesh Babu", "mahesh@example.com"

// Renaming variables:
const { fullName: name, email: userEmail } = user;
console.log(name); // "Mahesh Babu"

// Default values:
const { fullName, role = "Actor" } = user;
console.log(role); // "Actor" (user object lo lekapothe, default value teeskuntundi)
```

#### b) Array Destructuring
Array elements ni vaati position aadharanga extract chestundi.

```javascript
const coordinates = [12.97, 77.59, "Bangalore"];

const [latitude, longitude] = coordinates;
console.log(latitude, longitude); // 12.97, 77.59

// Skipping elements with a comma:
const [lat, , city] = coordinates;
console.log(city); // "Bangalore"
```

---

### 2. The Spread (`...`) and Rest (`...`) Operators

Ee moodu dots (`...`) context batti rendu rakalu ga pani chestayi. Idi chala confusing ga anipinchachu, kani chala simple.

#### a) Spread Operator: Expands an iterable
Spread operator oka iterable (like array or string) or object ni teeskuni, daani individual elements ga "spread" (or expand) chestundi.

**Use Cases:**
1.  **Combining Arrays:**
    ```javascript
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
    ```
2.  **Copying Arrays/Objects (Shallow Copy):**
    ```javascript
    const originalArr = ['a', 'b', 'c'];
    const copiedArr = [...originalArr];
    ```
3.  **Passing arguments to functions:**
    ```javascript
    const nums = [1, 2, 3];
    // Math.max(1, 2, 3) laaga call chestundi
    console.log(Math.max(...nums)); // 3
    ```
4.  **In Object Literals:**
    ```javascript
    const obj1 = { a: 1, b: 2 };
    const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
    ```

#### b) Rest Parameters: Collects into an array
Rest parameters anevi **function parameter list lo matrame** vaadatharu. Idi function ki pass chesina migita anni arguments ni collect chesi, **oka array** ga chestundi. Idi eppudu last parameter ga undali.

```javascript
// `...numbers` is the rest parameter. It collects all arguments into an array called `numbers`.
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2));       // 3
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(5));          // 5
```
**Key Difference:**
*   **Spread (`...`)** "expands" an array. It's used where individual values are needed (e.g., function calls, array literals).
*   **Rest (`...`)** "collects" into an array. It's used only in function definitions.

---

### 3. Default Parameters

Function ki oka parameter pass cheyakapothe or `undefined` pass cheste, daaniki oka default value ivvadaniki idi easy way.

```javascript
// Old way:
// function greet(name) {
//   name = name || "Guest";
//   console.log(`Hello, ${name}!`);
// }

// Default parameter way:
function greet(name = "Guest", greeting = "Hello") {
  console.log(`${greeting}, ${name}!`);
}

greet("Ravi");   // "Hello, Ravi!"
greet();         // "Hello, Guest!"
greet("Sita", "Namaste"); // "Namaste, Sita!"
```
Idi code ni chala cleaner ga unchutundi and unnecessary checks ni thaggistundi.
