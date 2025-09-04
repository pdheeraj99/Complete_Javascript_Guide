# Section 2.1: JavaScript Array Methods (The Superpowers) 🦸

Mawa, welcome to the most powerful part of arrays! Ikkada manam array methods gurinchi nerchukundam. Veetitho manam data ni chala easy ga manipulate cheyochu, filter cheyochu, and transform cheyochu.

### **Important Concept: Mutator vs. Non-Mutator**

*   **Mutator Methods 💥**: Ee methods original array ni **change chestai**. ⚠️ Be careful with these!
    *   **Analogy**: Oka document ni direct ga edit cheyadam lantiది. Original document maaripothundhi.
*   **Non-Mutator Methods ✨**: Ee methods original array ni **change cheyavu**.
    *   Instead, avi oka **new array** or oka **new value** ni return chestai.
    *   **Analogy**: Original document ni "Save As..." chesi, kotha copy ni edit cheyadam lantiది. Original safe ga untundhi.

---

### Category 1: Mutator Methods (Original Array ni Marchutai ⚠️)

| Method | Description |
| :--- | :--- |
| ⭐ `push()` | ➡️ Array chivarana (end) oka item ni add chestundhi. |
| ⭐ `pop()` | ⬅️ Array chivarana unna item ni theesesi, daanini return chestundhi. |
| ⭐ `shift()` | ⬅️ Array mundhu (start) nunchi oka item ni theesesi, daanini return chestundhi. |
| ⭐ `unshift()`| ➡️ Array mundhu oka item ni add chestundhi. |
| ⭐ `splice()` | ↔️ Array lo ekkadi nunchi aina items ni add/remove cheyochu. (The Swiss Army Knife!) |
| `reverse()` | 🔄 Array ni reverse chestundhi. |
| ⭐ `sort()` | 🔢 Array ni sort chestundhi. **Jagratha!** Default ga string la sort chestundhi. |
| `fill()` | 🎨 Array lo unna items ni oka static value tho fill chestundhi. |

🧠 **Tricky Interview Question**: "How does `Array.prototype.sort()` work? How do you sort an array of numbers correctly?"
*   **Hint**: `sort((a, b) => a - b)` ani compare function ivvali!

---

### Category 2: Non-Mutator Methods (Safe to Use! 👍)

#### Sub-category: Accessor Methods (New Array/Value isthai)

| Method | Description |
| :--- | :--- |
| ⭐ `slice()` | 🍰 Array lo oka "piece" ni copy chesi, new array ga isthundhi. |
| ⭐ `concat()` | 🔗 Rendu or ekkuva arrays ni kalipi, kotha array isthundhi. |
| ⭐ `join()` | 🪢 Array lo unna anni items ni kalipi oka string ga isthundhi. |
| ⭐ `includes()` | ✅ Array lo `item` undha ledha ani check chesi `true`/`false` isthundhi. |
| ⭐ `indexOf()` | 🔎 `item` yokka first `index` ni isthundhi. Lekapothe `-1`. |
| ⭐ `at()` | 🎯 Negative index tho end nunchi element ni theeskovachu. `arr.at(-1)` is the last item. |
| ⭐ `flat()` | 🥞 Nested arrays ni "flatten" chesi, kotha array isthundhi. |

#### Sub-category: Iteration Methods (The "Big 5" - Most Important 🔥)

Ee methods oka function ni argument ga theeskuntai (callback function) and prathi element meedha aa function ni run chestai.

| Method | Analogy | Returns |
| :--- | :--- | :--- |
| ⭐ `forEach()` | 🚶‍♂️ An assembly line worker doing a task on each item. | `undefined` |
| ⭐ `map()` | 📦 A worker taking each item and putting a *transformed* version in a **new box**. | New array with same length |
| ⭐ `filter()` | 🕵️ A quality inspector putting only items that pass a test into a **new box**. | New array with same or less length |
| ⭐ `find()` | 👮 A security guard stopping at the *first person* who matches a description. | The element itself, or `undefined` |
| ⭐ `reduce()` | 🧾 A cashier scanning all items to give you a *single total bill*. | The final single value |

🧠 **Tricky Interview Question**: "What is the difference between `forEach` and `map`? When would you use one over the other?"
*   **Hint**: `map` returns a new array, `forEach` returns nothing. Use `map` when you need to transform data, `forEach` when you just need to do something for each item (like printing to console).

#### Sub-category: Other Iteration Methods

| Method | Description |
| :--- | :--- |
| `findIndex()` | 🕵️‍♀️ `find` laantide, kani element badulu, **index** ni isthundhi. |
| `every()` | 👍 **Anni** elements test pass aithe `true`, lekapothe `false`. |
| `some()` | 👌 **Oka element** pass aina `true`, lekapothe `false`. |
| `flatMap()` | 🥞 `map()` chesi, tarvata `flat(1)` chestundhi. Useful for nested structures. |

---

### Category 3: Modern Immutable Methods (ES2023+)

JavaScript new versions lo, old mutator methods ki non-mutator (immutable) alternatives isthunnaru. Idi chala good practice.

| Method | Old Mutator | Description |
| :--- | :--- | :--- |
| `toReversed()` | `reverse()` | ✨ Original array ni change cheyakunda, reversed copy isthundhi. |
| `toSorted()` | `sort()` | ✨ Original array ni change cheyakunda, sorted copy isthundhi. |
| `toSpliced(...)` | `splice(...)` | ✨ Original array ni change cheyakunda, spliced copy isthundhi. |
| `with(index, value)`| `arr[i] = val` | ✨ Original array ni change cheyakunda, oka specific index lo value update chesina kotha array isthundhi. |

Ee methods వాడటం valla, mana code lo unexpected changes (bugs) thaggipothai.

---

I know, chala methods unnai! Kani practice chesthe, anni easy aipothai. Next, `index.js` file lo veeti anni examples chuddam!

After this, we will dive deep into JavaScript's most fundamental building block: **Objects**! Ready aa? 🔥
