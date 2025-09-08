# 🔄 Phase 1: Loops in JavaScript 🔄

Welcome to the world of loops! Repetitive tasks ni easy ga cheyadaniki loops vaadathamu. Let's explore the different types of loops in JavaScript.

---

### 1. The `for` Loop

Idi most common loop. Manaki mundare enni sarlu loop tiragalo telisinappudu `for` loop vaadatam best.

**Syntax:** `for (initialization; condition; increment) { ... }`
*   **initialization:** Loop start ayye mundu okkasari run avtundi (e.g., `let i = 0`).
*   **condition:** Prathi iteration ki mundu check chestaru. Idi `true` aite, loop continue avtundi.
*   **increment:** Prathi iteration tarvata run avtundi (e.g., `i++`).

```javascript
// Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(`Iteration number ${i}`);
}
```

---

### 2. The `while` Loop

Condition `true` ga unnanta varaku loop run avvali anukunnappudu `while` loop vaadatharu. Enni sarlu run avtundo manaki mundara teliyakapovachu.

**Syntax:** `while (condition) { ... }`

```javascript
let count = 1;
while (count <= 5) {
  console.log(`Count is ${count}`);
  count++; // Important! Increment cheyakapothe infinite loop aipotundi!
}
```
**Warning:** `while` loop lo condition variable ni update cheyadam marchipothe, adi **infinite loop** lo ki vellipotundi, and mee program crash avvachu! 😱

---

### 3. The `do...while` Loop

Idi `while` loop laantide, kani okate teda: `do...while` loop lo condition last lo check chestaru. Ante, condition `false` aina kuda, loop body **at least one time** execute avtundi.

**Syntax:** `do { ... } while (condition);`

```javascript
let num = 6;
do {
  console.log(`Number is ${num}`); // Ee line print avtundi
  num++;
} while (num <= 5); // Condition false, kani loop okasari run aindi
```

---

### 4. The `for...of` Loop (for modern JS ✨)

Idi ES6 lo vachina super useful loop. Arrays, Strings, Maps, Sets lanti "iterable" values meeda loop cheyadaniki idi perfect. Prathi iteration lo, adi array lo unna next element ni manaki istundi.

```javascript
const colors = ["Red", "Green", "Blue"];
for (const color of colors) {
  console.log(color);
}
// Output:
// Red
// Green
// Blue
```
Idi chala clean and readable ga untundi. Index (`i`) gurinchi manam worry avvalsina avasaram ledu.

---

### 5. The `for...in` Loop

Idi object yokka properties (keys) meeda loop cheyadaniki vaadatharu.

```javascript
const user = {
  name: "Priya",
  age: 28,
  city: "Hyderabad"
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
// Output:
// name: Priya
// age: 28
// city: Hyderabad
```
**Note:** Arrays meeda `for...in` vaadakandi. Adi unexpected results ivvachu. Arrays ki eppudu `for...of` or a regular `for` loop vaadandi.

---

### Controlling Loops: `break` and `continue`

Manam loops ni madhyalo control cheyochu.

*   **`break`:** Loop ni anthaటితో aapestundi. Loop nunchi complete ga bayataki vachesindi.
*   **`continue`:** Current iteration ni matrame skip chesi, next iteration ki vellipotundi.

```javascript
// break example
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Found 5! Stopping the loop.");
    break; // Loop aagipotundi
  }
  console.log(i);
}

// continue example (print only odd numbers)
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) { // If number is even
    continue; // Skip this iteration
  }
  console.log(i);
}
```
Ee keywords loops ni inka flexible ga vaadataniki help chestayi.
