# 📦 Phase 7: ES6 Modules 📦

Real-world applications anevi chala files tho untayi. Modules anevi aa files madhya code ni share cheskovadaniki standard way. Prathi file oka module, and prathi module ki daani own scope untundi.

---

### 1. The `export` Statement

Oka module nunchi variables, functions, or classes ni bayataki expose cheyadaniki `export` vaadatharu. Rendu rakalu ga export cheyochu:

#### a) Named Exports
Oka file nunchi multiple things ni export cheyali anukunnappudu idi vaadatharu.

```javascript
// In a file named 'utils.js'

// Exporting as you define them
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

// Or, export them all at the end
const subtract = (a, b) => a - b;
export { subtract };
```

#### b) Default Export
Oka file nunchi okka "main" thing ni matrame export cheyali anukunnappudu idi vaadatharu. Oka file lo **okate okka default export** undagaladu.

```javascript
// In a file named 'user.js'

export default class User {
  constructor(name) {
    this.name = name;
  }
}

// You can also export a function or object as default
// export default function greet() { ... }
```

---

### 2. The `import` Statement

Vere module nunchi export chesina code ni teeskodaniki `import` vaadatharu.

#### a) Importing Named Exports
Named exports ni import chesetappudu, manam curly braces `{}` vaadali, and names exactly match avvali.

```javascript
// In a file named 'main.js'
import { add, PI } from './utils.js';

console.log(add(5, 10)); // 15
console.log(PI);         // 3.14159

// You can rename them with `as`
import { add as sum } from './utils.js';
console.log(sum(5, 10)); // 15

// Import everything as a single object
import * as Utils from './utils.js';
console.log(Utils.add(1, 2));
```

#### b) Importing a Default Export
Default export ni import chesetappudu, manam curly braces vaadanu, and manam daaniki ഏ a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a-peru aina pettukovachu.

```javascript
// In 'main.js'
import MyUserClass from './user.js';

const user = new MyUserClass("Pawan Kalyan");
```

---

### 3. Module Scope

Prathi module ki daani own top-level scope untundi. Ante, oka module lo declare chesina variable inko module lo automatically available undadu. Idi global scope pollution ni completely avoid chestundi. Manam `export` cheste ne, adi bayataki veltundi.

---

### 4. Dynamic `import()`

Chala sarlu, manaki oka module eppudu avasaram undadu. Oka specific condition meet ayinappudu or user oka button click chesinappudu matrame load cheyali anukuntam. Daanikosam dynamic `import()` vaadatharu.

Idi oka **Promise** ni return chestundi.

```javascript
const button = document.getElementById('myButton');

button.addEventListener('click', () => {
  import('./heavy-module.js')
    .then(module => {
      // Module has loaded successfully
      module.doSomething();
    })
    .catch(error => {
      console.error("Failed to load module:", error);
    });
});
```
Ee approach tho app initial load time thaggistam (code splitting).

**Note:** Browsers lo ES6 modules ni run cheyadaniki, `<script>` tag lo `type="module"` attribute pettali.
`<script type="module" src="./main.js"></script>`
