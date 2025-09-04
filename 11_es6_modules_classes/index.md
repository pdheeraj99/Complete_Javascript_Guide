# Section 5.2: Modules and Classes 🏛️

Mawa, ee section lo manam large applications build cheyadaniki fundamental ayina rendu pedda concepts nerchukundam: Modules and Classes.

---

### Part 1: ES6 Modules (`import`/`export`) 📦

*   **The "Why": The Problem of Global Scope Pollution** 🌍
    *   **Analogy**: Imagine a large room where everyone is shouting variable names (`var user = ...`). It gets chaotic, and names clash! This was old JavaScript.
    *   **Solution - Modules**: Prathi module oka soundproof room anamata. Nothing gets in or out unless you explicitly open the door using `import` or `export`.

*   **How it Works: `export` and `import`**
    *   **`export` 🚪➡️ (Opening the door to let things out)**
        *   **Named Exports**: You can export many things by name. `export const PI = 3.14;`
        *   **Default Export**: You can only have ONE default export. It's for the "main" thing from the file. `export default function sayHi() { ... }`

    *   **`import` ⬅️🚪 (Bringing things into your room)**
        *   **Importing Named**: `{}` braces vadali, and perlu exactly match avvali. `import { PI } from './utils.js';`
        *   **Importing Default**: Braces avasaram ledhu, and manam manaku nachina peru pettukovachu. `import myGreetingFunction from './utils.js';`

⭐ **Important Note for Browsers**: HTML file lo modules ni use chesetappudu, `<script>` tag ki `type="module"` ani add cheyadam marchipokandi!
`<script type="module" src="main.js"></script>`

---

### Part 2: Classes 📐

*   **The "Why": Cleaner Object-Oriented Programming**
    *   Mundu rojullo, JS lo inheritance handle cheyalante "prototypes" tho chala confusing code rayalsi vachedi.
    *   **Solution**: `class` syntax! Idi prototype system meedha build chesina oka beautiful "syntactic sugar".
    *   **Analogy**: A `class` is like a **blueprint** 📐 for creating objects.

*   **The `class` Keyword & `constructor`**
    *   `constructor` anedhi oka special method. `new Person()` ani object create chesinapudu, ee constructor automatic ga call avuthundhi.

*   **Inheritance with `extends` and `super`**
    *   `extends`: Oka class, inko class yokka properties and methods ni inherit cheskovadaniki.
        *   **Analogy**: A blueprint for a "House with a Garage" which `extends` the original "House" blueprint.
    *   `super`: Parent class constructor ni or methods ni call cheyadaniki.
        *   **Analogy**: Child class constructor, parent class constructor ki `super()` call chesi, "mundu meeru basic house kattandi, tarvata nenu garage add chesta" ani cheppadam lantiది.

*   **Getters and Setters**
    *   Evi object properties ni read cheyadaniki (`get`) and write cheyadaniki (`set`) special methods.
    *   They give you more control over how properties are accessed and modified.

Let's see these concepts in action in the `.js` files.
