# Section 10: Advanced Objects 🔮

Mawa, manam objects ni key-value pairs ga chala use chesam. Ippudu, vaati venakala unna mechanics ni, and vaatini inka powerful ga control cheyadaniki unna features ni chuddam.

---

### 1. `Object.create()` (Revisited)

Manam prototypes gurinchi matladinappudu deeni gurinchi touch chesam. Let's formalize it.
*   `const myObj = {}` (object literal) tho object create cheste, daani default prototype `Object.prototype` avuthundhi.
*   `Object.create(proto)` anedhi, manam cheppina `proto` object ni prototype ga set chesi, oka kotha empty object ni create chestundhi. Idi inheritance chain ni manual ga control cheyadaniki primary way.

---

### 2. Property Descriptors

Prathi object property ki venakala konni hidden attributes untai. Vaatine "property descriptors" antaru. Evi aa property yokka behavior ni control chestai.

The attributes are:
*   `value`: The actual value of the property.
*   `writable`: `true` aithe, property value ni change cheyochu.
*   `enumerable`: `true` aithe, property `for...in` loop lo or `Object.keys()` lo kanipisthundhi.
*   `configurable`: `true` aithe, property ni delete cheyochu, and ee descriptors ni malli change cheyochu.

**The "How"**:
*   `Object.defineProperty(obj, prop, descriptor)`: Oka property ni daani descriptors tho define cheyadaniki.
*   `Object.getOwnPropertyDescriptor(obj, prop)`: Oka property yokka descriptors ni choodataniki.

By default, manam `obj.prop = value` ani create cheste, `writable`, `enumerable`, and `configurable` anni `true` ga set avuthai. Kani `defineProperty` tho create cheste, avi default ga `false` untai!

---

### 3. Proxies: Trapping Operations

**The "What"**:
A Proxy is an object that wraps another object (the "target") and allows you to intercept and customize fundamental operations on that target object. This is a form of **metaprogramming**—code that acts on other code.

**The "How"**:
`const myProxy = new Proxy(target, handler);`
*   `target`: The original object you want to wrap.
*   `handler`: An object that contains "traps". Traps are functions that will be called when an operation is performed on the proxy.

**Common Traps**:
*   `get(target, prop)`: Proxy meedha oka property ni read chesinapudu ee trap fire avuthundhi.
*   `set(target, prop, value)`: Proxy meedha oka property ki write chesinapudu ee trap fire avuthundhi.

**The "Why"**:
Proxies are incredibly powerful. You can use them for:
*   **Validation**: `set` trap lo, value correct format lo undha ledha ani check cheyochu.
*   **Logging**: `get` and `set` trap lo, property access ni log cheyochu.
*   **Virtualization**: Target object lo leni properties ki kuda default values ivvochu.
*   And many more advanced use cases.

---

### 4. Reflection (`Reflect` API)

**The "What"**:
`Reflect` is a built-in object that provides methods for the same fundamental operations that proxies can intercept. For every proxy trap, there is a corresponding `Reflect` method.
*   Proxy `get` trap -> `Reflect.get()`
*   Proxy `set` trap -> `Reflect.set()`
*   ...and so on.

**The "Why"**:
`Reflect` enduku? Direct ga `target[prop] = value` ani cheyochu kada?
1.  **Standardized Functions**: `Reflect` methods provide a standard, function-based way to perform these operations, which can be cleaner.
2.  **Boolean Return Value**: This is the most important reason. `Reflect.set()` or `Reflect.deleteProperty()` lanti methods oka **boolean** (`true` or `false`) ni return chestai, operation success ayinda ledha ani cheppadaniki. `target[prop] = value` anedi emi return cheyadu.
3.  **Proxy Best Practice**: Proxy handler traps lopala, corresponding `Reflect` method ni call cheyadam best practice. Idi `this` binding tho vache konni edge cases ni avoid chestundhi and success/failure ni easy ga handle cheyadaniki help chestundhi.

**Example of Best Practice:**
```javascript
const handler = {
    set(target, prop, value) {
        console.log(`Setting ${prop} to ${value}`);
        // Use Reflect.set to perform the operation on the target.
        // It returns true/false, which we can then return from the trap.
        return Reflect.set(target, prop, value);
    }
};
```
These features give you an unprecedented level of control over how your objects behave. Let's check out the code examples.
