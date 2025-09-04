# Section 5.3: Modern Data Structures (`Map` and `Set`) 🗺️

Mawa, manam data ni store cheyadaniki Arrays and Objects vadatham ani nerchukunnam. Kani konni specific situations lo, vaati kanna better options ES6 lo vachai. Ave `Set` and `Map`.

---

### 1. `Set`: The Collection of Unique Values

**What is a `Set`?**
A `Set` is a special type of collection where **every value must be unique**. Okate value ni rendu sarlu add chesina, adi okkasare store avuthundhi.

**The "Why": When to use a `Set`?**
The most common use case is **to remove duplicate values from an array**. Idi chala fast and efficient way.

**Creating a `Set` and its Methods:**
*   `new Set(iterable)`: Creates a new `Set`. You can optionally pass an array to initialize it.
*   `set.add(value)`: Adds a new value. Value already unte, em change avvadu.
*   `set.has(value)`: Value undha ledha ani check chesi `true`/`false` isthundhi.
*   `set.delete(value)`: Removes a value.
*   `set.clear()`: Removes all values from the set.
*   `set.size`: (Property) Set lo enni items unnayo chepthundhi.

**Example: Removing Duplicates**
```javascript
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbersSet = new Set(numbers);
// uniqueNumbersSet is now a Set {1, 2, 3, 4, 5}

// To get it back as an array:
const uniqueNumbersArray = [...uniqueNumbersSet]; // Using the spread operator
// uniqueNumbersArray is now [1, 2, 3, 4, 5]
```

---

### 2. `Map`: The Advanced Key-Value Store

**What is a `Map`?**
A `Map` is a collection of key-value pairs, just like a plain `Object`. Kani deeniki konni super-powers unnai.

**The "Why": How is `Map` better than `Object`? 🧠**
This is a very important deep dive.

| Feature | `Map` | Plain `Object` |
| :--- | :--- | :--- |
| **Key Type** | **Any value** can be a key (object, array, number, etc.) | Keys are always converted to **strings** or Symbols. |
| **Order** | **Remembers insertion order**. Loop cheste, items add chesina order lo ne vasthai. | Order was **not guaranteed** in older JS. Ippudu unna, konni edge cases unnai. |
| **Size** | Has a simple `.size` property. | Size kanukkovalante `Object.keys(obj).length` ani rayali. |
| **Performance**| Optimized for frequent additions and removals of key-value pairs. | Not as optimized for that specific case. |
| **Iteration** | Directly iterable with `for...of` or `.forEach()`. | Directly iterable kaadu. `Object.keys()`, `Object.values()` or `Object.entries()` vadali. |

**Key Takeaway**: Data ki related metadata ni store cheyalanna (e.g., oka DOM element ki private data attach cheyalanna), or keys strings kakunda vere type lo unnapudu `Map` is the best choice.

**Creating a `Map` and its Methods:**
*   `new Map()`: Creates an empty `Map`.
*   `map.set(key, value)`: Adds or updates a key-value pair.
*   `map.get(key)`: Gets the value for a key. Returns `undefined` if the key doesn't exist.
*   `map.has(key)`: Checks if a key exists.
*   `map.delete(key)`: Removes a key-value pair.
*   `map.clear()`: Removes everything.
*   `map.size`: (Property) Returns the number of key-value pairs.

**Example:**
```javascript
const userRoles = new Map();

const user1 = { name: 'Ravi' };
const user2 = { name: 'Sita' };

// Here, the keys are objects, not strings!
userRoles.set(user1, 'Admin');
userRoles.set(user2, 'Editor');

console.log(userRoles.get(user1)); // 'Admin'

// Iterating over a Map
for (const [user, role] of userRoles) {
    console.log(`${user.name} is an ${role}`);
}
```

Let's see these in action in the `.js` file!
