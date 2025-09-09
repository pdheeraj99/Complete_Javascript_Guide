# ⛓️ Phase 2: Mastering Arrays ⛓️

Arrays anevi ordered lists of values. Okate variable lo multiple items store cheyadaniki idi perfect. Let's master them!

---

### 1. Array Creation & Accessing Elements

Array ni square brackets `[]` tho create chestam.

```javascript
// Empty array
let emptyArray = [];

// Array of strings
let fruits = ["Apple", "Banana", "Cherry"];

// Array with mixed types
let mixedData = ["Ravi", 25, true, null];
```

Array lo unna elements ni vaati **index** (position) tho access chestam. Index anedi **zero (0)** nunchi start avtundi.

```javascript
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana

// Last element ni access cheyadaniki:
console.log(fruits[fruits.length - 1]); // Output: Cherry
```

---

### 2. Basic & Essential Methods (Mostly Mutating)

Ee methods original array ni direct ga change chestayi.

| Method | Description | Example |
| :--- | :--- | :--- |
| `push()` | Array **chivara** oka element ni add chestundi. | `fruits.push("Mango")` |
| `pop()` | Array **chivara** unna element ni a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a-remove-sestundi. |
| `shift()` | Array **modati** element ni a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a-sestundi. |
| `unshift()` | Array **modata** oka element ni add chestundi. | `fruits.unshift("Pineapple")` |

---

### 3. Transformation Methods (`slice`, `splice`, `sort`)

| Method | Description | Mutating? |
| :--- | :--- | :---: |
| `slice(start, end)` | Array lo oka **portion** ni copy chesi, kottha array ga istundi. Original array maaradu. | **No** ❌ |
| `splice(start, count, items...)` | Array lo nunchi elements ni **remove/replace/add** chestundi. Original array ni change chestundi. | **Yes** ✅ |
| `sort()` | Array elements ni sort chestundi. By default, string laaga sort chestundi. Numbers ki manam oka function ivvali. | **Yes** ✅ |

---

### 4. Problem → Solution: Mutating vs. Non-Mutating Methods 🤔

Idi chala important concept!
*   **Mutating Methods:** `push`, `pop`, `splice`, `sort` lanti methods **original array ni change chestayi**.
*   **Non-Mutating Methods:** `slice`, `map`, `filter`, `reduce` lanti methods original array ni change cheyavu. Avi **kottha array ni create chesi return chestayi**.

**Why does it matter?** Modern JavaScript (especially in frameworks like React) lo, data ni direct ga change cheyakunda (immutability), state ni update cheyadaniki kottha array create cheyadam better practice. Idi bugs ni thaggistundi and performance ni improve chestundi.

---

### 5. Iteration Methods (Looping over Arrays) 🔄

Ee methods anni non-mutating and chala powerful.

| Method | Description | Returns |
| :--- | :--- | :--- |
| `forEach(fn)` | Array lo prathi element meeda oka function ni run chestundi. | `undefined` |
| `map(fn)` | Array lo prathi element ni transform chesi, vachina results tho **kottha array** ni istundi. | New Array |
| `filter(fn)` | Condition `true` ayina elements tho **kottha array** ni istundi. | New Array |
| `reduce(fn, initial)` | Array anthaటినీ single value ga "reduce" chestundi (e.g., sum of all numbers). | Single Value |

---

### 6. Search Methods 🔍

| Method | Description | Returns |
| :--- | :--- | :--- |
| `find(fn)` | Condition satisfy chesina **first element** ni istundi. | Element or `undefined` |
| `findIndex(fn)` | Condition satisfy chesina **first element yokka index** ni istundi. | Index or `-1` |
| `includes(value)` | Array lo aa value unda leda ani check chesi `true`/`false` istundi. | Boolean |
| `some(fn)` | Array lo **kanisam okka** element condition ni satisfy chesthe `true` istundi. | Boolean |
| `every(fn)` | Array lo **anni** elements condition ni satisfy chesthe `true` istundi. | Boolean |

---

### 7. Array Destructuring (ES6 Feature) ✨

Array lo unna values ni easy ga variables loki teeskodaniki idi oka shortcut.

```javascript
const user = ["Gopi", 30, "Admin"];

// Old way
// const name = user[0];
// const age = user[1];

// Destructuring way
const [name, age, role] = user;

console.log(name); // "Gopi"
console.log(age);  // 30
```

---

### 8. Multidimensional Arrays

Array lopala inko array. Matrix or grid lanti data ni store cheyadaniki use avtundi.

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Accessing element 5
console.log(matrix[1][1]); // First index for outer array, second for inner array
```
