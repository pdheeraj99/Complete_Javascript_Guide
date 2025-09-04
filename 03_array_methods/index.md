# Section 2.1: JavaScript Array Methods (The Superpowers) 🦸

Mawa, welcome to the most powerful part of arrays! Ikkada manam array methods gurinchi nerchukundam. Veetitho manam data ni chala easy ga manipulate cheyochu, filter cheyochu, and transform cheyochu.

### **Important Concept: Mutator vs. Non-Mutator**

Idi chala important, so jagrathaga vinandi.
*   **Mutator Methods**: Ee methods original array ni **change chestai**. ⚠️ Be careful with these!
*   **Non-Mutator Methods**: Ee methods original array ni **change cheyavu**. Instead, avi oka **new array** or oka **new value** ni return chestai. Most modern methods work this way.

---

### Category 1: Mutator Methods (Original Array ni Marchutai ⚠️)

| Method | Description |
| :--- | :--- |
| ⭐ `push(item)` | Array chivarana (end) oka item ni add chestundhi. |
| ⭐ `pop()` | Array chivarana unna item ni a aitem ni remove chestundhi. |
| ⭐ `shift()` | Array mundhu (start) nunchi oka item ni a aitem ni remove chestundhi. |
| ⭐ `unshift(item)`| Array mundhu oka item ni add chestundhi. |
| ⭐ `splice(start, count, ...items)` | Array lo ekkadi nunchi aina items ni remove or add cheyochu. Chala powerful! |
| `reverse()` | Array ni reverse chestundhi. |
| ⭐ `sort()` | Array ni sort chestundhi. **Jagratha!** By default, adi string la sort chestundhi. |
| `fill(value, start, end)` | Array lo unna items ni oka static value tho fill chestundhi. |

**Examples:**
*   **`push`/`pop`**: Last In, First Out (LIFO)
    `const items = ['a', 'b']; items.push('c'); // ['a', 'b', 'c']; items.pop(); // ['a', 'b']`
*   **`shift`/`unshift`**: First In, First Out (FIFO)
    `const items2 = ['b', 'c']; items2.unshift('a'); // ['a', 'b', 'c']; items2.shift(); // ['b', 'c']`
*   **`splice`**: The Swiss Army Knife
    `const months = ['Jan', 'March', 'April']; months.splice(1, 0, 'Feb'); // Inserts at index 1. Result: ['Jan', 'Feb', 'March', 'April']`
*   **`sort`**:
    `const names = ['Ravi', 'Anil', 'Bhanu']; names.sort(); // ['Anil', 'Bhanu', 'Ravi']`
    `const numbers = [10, 5, 100, 2]; numbers.sort(); // [10, 100, 2, 5] 😱 WRONG!`
    `numbers.sort((a, b) => a - b); // [2, 5, 10, 100] ✅ CORRECT for numbers.`

🧠 **Tricky Interview Question**: "How does `Array.prototype.sort()` work? How do you sort an array of numbers correctly?"

---

### Category 2: Non-Mutator Methods (Safe to Use! 👍)

#### Sub-category: Accessor Methods (New Array/Value isthai)

| Method | Description |
| :--- | :--- |
| ⭐ `slice(start, end)` | Array lo oka "piece" ni copy chesi, new array ga isthundhi. `end` index is not included. |
| ⭐ `concat(...arrays)` | Rendu or ekkuva arrays ni kalipi, kotha array isthundhi. |
| ⭐ `join(separator)` | Array lo unna anni items ni kalipi oka string ga isthundhi. |
| ⭐ `includes(item)` | Array lo `item` undha ledha ani check chesi `true`/`false` isthundhi. |
| ⭐ `indexOf(item)` | `item` yokka first `index` ni isthundhi. Lekapothe `-1`. |
| `lastIndexOf(item)`| `item` yokka last `index` ni isthundhi. |
| ⭐ `at(index)` | `charAt` laantide, kani negative index isthe end nunchi theeskuntundhi. `arr.at(-1)` is the last item. |
| ⭐ `flat(depth)` | Nested arrays ni "flatten" chesi, kotha array isthundhi. |

#### Sub-category: Iteration Methods (The "Big 5" - Most Important)

Ee methods oka function ni argument ga theeskuntai (callback function) and prathi element meedha aa function ni run chestai.

| Method | What it Does | Returns |
| :--- | :--- | :--- |
| ⭐ `forEach(fn)` | Just prathi element meedha loop chestundhi. | `undefined` |
| ⭐ `map(fn)` | Prathi element ni transform chesi, oka **new array** lo petti isthundhi. | New array with same length |
| ⭐ `filter(fn)` | Test pass aina elements ni matrame theeskuni, oka **new array** lo petti isthundhi. | New array with same or less length |
| ⭐ `find(fn)` | Test pass aina **first element** ni isthundhi. | The element itself, or `undefined` |
| ⭐ `reduce(fn, initialValue)` | Array antha "reduce" chesi, oka **single value** (number, string, object) isthundhi. | The final single value |

**Practical Examples:**
*   **`map`**: Get an array of names from an array of user objects.
    `const users = [{id: 1, name: 'A'}, {id: 2, name: 'B'}]; const names = users.map(user => user.name); // ['A', 'B']`
*   **`filter`**: Get all users above age 18.
    `const people = [{name: 'A', age: 15}, {name: 'B', age: 20}]; const adults = people.filter(p => p.age >= 18); // [{name: 'B', age: 20}]`
*   **`reduce`**: Calculate the total price of items in a cart.
    `const cart = [{price: 10}, {price: 20}, {price: 30}]; const total = cart.reduce((sum, item) => sum + item.price, 0); // 60`

🧠 **Tricky Interview Question**: "What is the difference between `forEach` and `map`? When would you use one over the other?"

#### Sub-category: Other Iteration Methods

| Method | Description |
| :--- | :--- |
| `findIndex(fn)` | `find` laantide, kani element badulu, **index** ni isthundhi. |
| `every(fn)` | **Anni** elements test pass aithe `true`, lekapothe `false`. |
| `some(fn)` | **Oka element** pass aina `true`, lekapothe `false`. |
| `flatMap(fn)` | `map()` chesi, tarvata `flat(1)` chestundhi. Useful for nested structures. |

---

### Category 3: Modern Immutable Methods (ES2023+)

JavaScript new versions lo, old mutator methods ki non-mutator (immutable) alternatives isthunnaru. Idi chala good practice.

| Method | Old Mutator | Description |
| :--- | :--- | :--- |
| `toReversed()` | `reverse()` | Original array ni change cheyakunda, reversed copy isthundhi. |
| `toSorted()` | `sort()` | Original array ni change cheyakunda, sorted copy isthundhi. |
| `toSpliced(...)` | `splice(...)` | Original array ni change cheyakunda, spliced copy isthundhi. |
| `with(index, value)`| `arr[i] = val` | Original array ni change cheyakunda, oka specific index lo value update chesina kotha array isthundhi. |

Ee methods వాడటం valla, mana code lo unexpected changes (bugs) thaggipothai.

---

I know, chala methods unnai! Kani practice chesthe, anni easy aipothai. Next, `02-array-methods.js` file lo veeti anni examples chuddam! Ready aa? 🔥
