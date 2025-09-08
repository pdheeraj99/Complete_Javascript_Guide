# 🤖 Phase 6: Advanced Objects & Meta-Programming 🤖

Ee topic lo manam objects ni inka deep ga control cheyadam and vaati default behavior ni maarchadam elaago nerchukundam. Welcome to Meta-Programming!

---

### 1. Object Protection Methods

JavaScript object properties ni by default maarchevachu. Kani konni sarlu, manam object ni lock cheyali anukuntam.

*   **`Object.preventExtensions(obj)`:** Object ki kottha properties add cheyakunda aapestundi. Existing properties ni change cheyochu or delete cheyochu.
*   **`Object.seal(obj)`:** `preventExtensions` chesina pani tho paatu, existing properties ni **delete** cheyakunda kuda aapestundi. Existing properties yokka value ni matrame change cheyagalam.
*   **`Object.freeze(obj)`:** `seal` chesina pani tho paatu, existing properties yokka **value** ni kuda change cheyakunda aapestundi. Idi object ni completely read-only (immutable) ga chestundi.

```javascript
const myObj = { name: "Test" };
// Object.freeze(myObj);
// myObj.name = "New Test"; // Won't work in strict mode
// myObj.newProp = 123;   // Won't work
// delete myObj.name;     // Won't work
```

---

### 2. Property Descriptors

Object lo prathi property ki konni "hidden" attributes untayi. Veetine property descriptors antaru. `Object.getOwnPropertyDescriptor()` tho manam veetini chudochu.

*   `value`: Property yokka value.
*   `writable`: `true` aite, property value ni change cheyochu.
*   `enumerable`: `true` aite, `for...in` loop lo ee property kanipistundi.
*   `configurable`: `true` aite, ee property ni delete cheyochu and daani attributes (`writable`, `enumerable`) ni change cheyochu.

Manam `Object.defineProperty()` tho ee attributes ni fine-tune cheyochu.

```javascript
const user = {};
Object.defineProperty(user, 'name', {
  value: "Ravi",
  writable: false, // `user.name` ni ippudu change cheyalem
  enumerable: true,
  configurable: false // `name` property ni delete cheyalem
});
```

---

### 3. Meta-Programming: `Proxy` and `Reflect`

Idi JavaScript lo oka super powerful feature. **Proxy** ante "substitute" or "placeholder". Oka object mundu manam oka Proxy ni petti, aa object meeda jarige fundamental operations (like getting, setting, deleting properties) ni "intercept" (madhyalo ఆపి) cheyochu.

**How it works:**
1.  Manam oka `target` object ni teeskuntam (the original object).
2.  Manam oka `handler` object ni create chestam. Ee handler lo "traps" (special methods like `get`, `set`) untayi.
3.  `new Proxy(target, handler)` tho oka proxy object ni create chestam.

Ippudu manam original `target` object ki badulu, ee `proxy` object tho interact avtam.

```javascript
const target = {
  message: "hello"
};

const handler = {
  // `get` trap: property ni access chesetappudu trigger avtundi.
  get(targetObj, key) {
    console.log(`Intercepted! Getting property "${key}"`);
    // Default behavior ni `Reflect` tho cheyali.
    return Reflect.get(targetObj, key);
  },
  // `set` trap: property ki value assign chesetappudu trigger avtundi.
  set(targetObj, key, value) {
    console.log(`Intercepted! Setting property "${key}" to "${value}"`);
    if (key === 'message' && typeof value !== 'string') {
      throw new TypeError("Message must be a string.");
    }
    // Default behavior ni `Reflect` tho cheyali.
    return Reflect.set(targetObj, key, value);
  }
};

const proxy = new Proxy(target, handler);

// Using the proxy
console.log(proxy.message); // "Intercepted! Getting property "message""
                            // "hello"

proxy.message = "world";    // "Intercepted! Setting property "message" to "world""
// proxy.message = 123;     // Throws TypeError!
```

#### Why `Reflect`?
Prathi trap ki corresponding method `Reflect` object lo undi (`Reflect.get`, `Reflect.set`, etc.). Handler lopala default behavior ni continue cheyadaniki `Reflect` vaadatam best practice. Idi `this` binding lanti issues ni avoid chestundi.

Proxies anevi validation, logging, formatting, and state management libraries (like Vue.js) lo chala ekkuva ga vaadatharu.
