# 📜 Phase 6: Generators & Iterators 📜

Welcome to the final topic of our Advanced Concepts phase! Ee topic lo manam `for...of` loop behind the scenes ela pani chestundo and manam custom looping behaviors ni ela create cheyalo nerchukundam.

---

### 1. The Iteration Protocol

`for...of` loop antha magic kaadu. Adi oka specific set of rules ni follow avtundi, daanine **Iteration Protocol** antaru.

1.  **Iterable:** Oka object ni "iterable" anadam ante, daaniki `[Symbol.iterator]` ane key tho oka method undali. Arrays, Strings, Maps, and Sets anni built-in iterables.
2.  **Iterator:** Aa `[Symbol.iterator]` method ni call cheste, adi oka **Iterator** object ni return chestundi.
3.  **Iterator Object:** Ee object ki `next()` ane oka method undali.
4.  **`next()` Method:** Prathi saari `next()` call chesinappudu, adi `{ value: ..., done: ... }` ane format lo oka object ni return chestundi.
    *   `value`: The current value in the sequence.
    *   `done`: `true` aite, sequence aipoindi. `false` aite, inka values unnayi.

Ee protocol valla `for...of` loop anedi different data types meeda work avtundi.

---

### 2. Generator Functions (`function*`)

Ee iteration protocol ni manually implement cheyadam konchem complex. So, ES6 manaki oka easy way ichindi: **Generator Functions**.

A Generator is a special kind of function that can be paused and resumed. It simplifies the process of creating iterators.

*   **Syntax:** Generator function ni `function*` (function star) tho define chestam.
*   **`yield` keyword:** `return` ki badulu, generator functions `yield` keyword ni vaadathayi. `yield` anedi function execution ni **pause** chesi, oka value ni bayataki pampistundi. Malli `next()` call chesinappudu, adi aa `yield` tarvata nunchi resume avtundi.

```javascript
// This is a generator function
function* numberGenerator() {
  console.log("Generator started");
  yield 1; // Pause and yield the value 1
  console.log("Resumed after 1");
  yield 2; // Pause and yield the value 2
  console.log("Resumed after 2");
  yield 3; // Pause and yield the value 3
  console.log("Generator finished");
}
```

---

### 3. Consuming a Generator

Generator function ni call cheste, adi ventane run avvadu. Adi oka **generator object** (iterator) ni return chestundi.

**Method 1: Manual Iteration with `.next()`**
```javascript
const gen = numberGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

**Method 2: The `for...of` Loop (The easy way)**
`for...of` loop automatically `next()` ni call chesi, `done: true` ayye varaku `value` ni teeskuntundi.

```javascript
for (const number of numberGenerator()) {
  console.log(number);
}
// Output:
// 1
// 2
// 3
```

---

### 4. Making Custom Objects Iterable

Ippudu manam ee knowledge tho, mana custom object ni `for...of` loop tho pani chesela cheddam.

```javascript
const myTeam = {
  name: "Warriors",
  players: ["Draymond", "Klay", "Steph"],

  // To make this object iterable, we add the [Symbol.iterator] method.
  // We use a generator function to make it easy!
  *[Symbol.iterator]() {
    // `yield` each player in the players array
    for (const player of this.players) {
      yield player;
    }
  }
};

// Now, we can use a for...of loop directly on our object!
for (const player of myTeam) {
  console.log(player);
}
// Output:
// Draymond
// Klay
// Steph
```
Generators anevi lazy evaluation, infinite sequences (like Fibonacci numbers), and advanced async patterns (redux-saga lanti libraries lo) create cheyadaniki chala powerful tool.
