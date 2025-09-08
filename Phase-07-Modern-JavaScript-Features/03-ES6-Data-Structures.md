# 🗺️ Phase 7: ES6 Data Structures (`Set` & `Map`) 🗺️

Arrays and Objects chala varaku సరిపోతాయి, kani konni specific situations lo, manaki inka better tools kavali. ES6 manaki `Set` and `Map` ane rendu kottha data structures ichindi.

---

### 1. `Set`: A Collection of Unique Values

A `Set` is a collection of values, just like an array. Kani, `Set` lo prathi value **unique** ga undali. Duplicates anevi automatically ignore cheyabadatayi.

**Use Cases:**
*   An array nunchi duplicates ni remove cheyadaniki.
*   Oka item collection lo unda leda ani fast ga check cheyadaniki (`has` method chala fast).

**Common Methods:**
*   `new Set(iterable)`: Creates a new Set. You can pass an array to initialize it.
*   `add(value)`: Adds a new value. Value already unte, em change avvadu.
*   `has(value)`: Value unda leda ani check chesi `true`/`false` istundi.
*   `delete(value)`: Value ni delete chestundi.
*   `clear()`: Set lo unna anni values ni teesesindi.
*   `size`: (Property) Set lo enni values unnayo istundi.

```javascript
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = new Set(numbers);

console.log(uniqueNumbers); // Set(5) { 1, 2, 3, 4, 5 }

uniqueNumbers.add(5); // Already exists, so nothing happens
uniqueNumbers.add(6); // Adds 6

console.log(uniqueNumbers.has(3)); // true
```

**Removing duplicates from an array (common use case):**
```javascript
const duplicateArray = ['a', 'b', 'a', 'c', 'b'];
const uniqueArray = [...new Set(duplicateArray)]; // Use Spread operator to convert Set back to Array
console.log(uniqueArray); // ['a', 'b', 'c']
```

---

### 2. `Map`: Advanced Key-Value Pairs

A `Map` is also a collection of key-value pairs, like an object. Kani, daaniki konni important advantages unnayi:

| Feature | `Object` | `Map` |
| :--- | :--- | :--- |
| **Key Types** | Strings or Symbols | **Any type** (objects, functions, numbers) |
| **Order** | Not guaranteed | **Maintains insertion order** |
| **Size** | Manual counting | `.size` property |
| **Iteration** | `for...in` or `Object.keys()` | `for...of`, `.forEach()` (direct and easy) |

**Common Methods:**
*   `new Map()`: Creates a new Map.
*   `set(key, value)`: Adds or updates a key-value pair.
*   `get(key)`: Key yokka value ni istundi.
*   `has(key)`: Key unda leda ani check chestundi.
*   `delete(key)`: Key-value pair ni delete chestundi.
*   `clear()`: Map lo unna anni pairs ni teesesindi.
*   `size`: (Property) Map lo enni pairs unnayo istundi.

```javascript
const myMap = new Map();

const user1 = { name: "Ram" }; // Using an object as a key
const user2 = { name: "Sita" };

myMap.set(user1, "Admin");
myMap.set(user2, "Editor");
myMap.set("key3", "Some string value");

console.log(myMap.get(user1)); // "Admin"

// Iterating over a Map
for (const [key, value] of myMap) {
  console.log(key, value);
}
```

---

### 3. Recap: `WeakMap` & `WeakSet`

Manam Phase 6 lo chusina `WeakMap` and `WeakSet` ki, ee `Map` and `Set` ki teda enti?

*   **References:** `Map`/`Set` anevi **strong** references ni hold chestayi. Ante, oka object ni vaatilo pedithe, adi garbage collect avvadu. `WeakMap`/`WeakSet` anevi **weak** references ni hold chestayi, so object vere ekkada use avvakapothe, adi garbage collect avvagaladu.
*   **Iteration:** `WeakMap` and `WeakSet` ni manam iterate cheyalem (no `for...of`). Vaatiki `size` property kuda undadu.

**Use `Map`/`Set`** for most cases.
**Use `WeakMap`/`WeakSet`** only for specific memory management cases, like caching data related to an object that might be destroyed later.
