# 🧠 Phase 6: Memory Management 🧠

JavaScript lo manam memory gurinchi direct ga alochinchamu, kani adi ela pani chestundo telusukunte, manam better and faster applications build cheyochu.

---

### 1. Memory Life Cycle

Prathi programming language lo, memory life cycle ki 3 steps untayi:
1.  **Allocate:** Meeku కావలసిన memory ni programming language teeskuntundi.
2.  **Use:** Aa memory ni use cheskuni, data ni read/write chestaru.
3.  **Release:** Ika aa memory avasaram ledu anukunnappudu, daanini release chesi, vere daaniki use cheskovadaniki free chestaru.

JavaScript lo, `Allocate` and `Use` anevi manam code rastunappudu jarugutayi. `Release` anedi **Garbage Collection** ane process dwara automatically jarugutundi.

---

### 2. The Stack and The Heap

JavaScript engine (like V8 in Chrome) memory ni rendu chotla store chestundi:

*   **The Stack:**
    *   Idi static data kosam. Primitives (`number`, `string`, `boolean`) and function call frames ikkada store avtayi.
    *   Idi chala fast and organized (Last-In, First-Out).
    *   Fixed size per function call.

*   **The Heap:**
    *   Idi dynamic data kosam. Objects, Arrays, and Functions lanti complex data structures ikkada store avtayi.
    *   Ikkada memory allocation konchem slow.
    *   Size anedi dynamically maarutundi.

When you declare `const user = { name: 'Ram' };`, the variable `user` on the Stack holds a *reference* (an address) to the actual object `{ name: 'Ram' }` which lives on the Heap.

---

### 3. Garbage Collection (GC)

Garbage Collection anedi "is this memory still needed?" ane question ki answer vetukutundi. Avasaram leni memory ni "garbage" ga collect chesi, release chestundi.

Most modern JavaScript engines **Mark-and-Sweep** ane algorithm ni vaadathayi.
1.  **Root:** First, oka root object untundi (browser lo `window`, Node.js lo `global`).
2.  **Mark:** Garbage collector root nunchi start ayyi, root nunchi reach avvagala anni objects ni "mark" chestundi (ante, "these are alive").
3.  **Sweep:** Marking aipoyaka, garbage collector memory antha scan chesi, "unmarked" objects (ante, root nunchi reach kaleni objects) ni "garbage" ga consider chesi, aa memory ni free chestundi.

---

### 4. Memory Leaks

Oka memory leak ante, program lo ika avasaram leni memory, release avvakunda, app antha use cheskuntu undipovadam. Idi time గడిచేకొద్దీ app performance ni thaggistundi, and eventually crash ki daari teestundi.

**Common Causes of Memory Leaks:**

1.  **Accidental Global Variables:**
    `function foo() { myVar = "I am global"; }` // `let` or `const` lekapothe, idi global variable aipotundi.
2.  **Forgotten Timers:**
    `setInterval` ni start chesi, daanini `clearInterval` tho aapanapothe, adi eppatiki run avutu, daani lopala unna variables memory lo undipotayi.
3.  **Closures:**
    Closures vaalla parent scope lo unna variables ni gurthu pettukuntayi. Oka closure pedda object ni refer chestu, aa closure eppatiki active ga unte, aa pedda object garbage collect avvadu.
4.  **Detached DOM Elements:**
    Manam oka DOM element ni JavaScript variable lo store chesi, tarvata aa element ni DOM nunchi teesesina, aa variable inka aa element ni refer chestu unte, adi memory lo undipotundi.

---

### 5. `WeakMap` and `WeakSet`

Ee memory leak problems (especially with DOM elements and caching) ni solve cheyadaniki `WeakMap` and `WeakSet` vachayi.

*   **`Map` and `Set`:** Evi "strong" references ni hold chestayi. Ante, oka object ni Map lo key ga pedithe, aa object garbage collect avvadu.
*   **`WeakMap` and `WeakSet`:** Evi "weak" references ni hold chestayi. Ante, oka object ni `WeakMap` lo key ga pedithe, vere ekkada aa object ki reference lekapothe, garbage collector daanini **remove cheyagaladu**.

**Use Case:** Oka object ki metadata (extra information) attach cheyali anukunnappudu `WeakMap` chala useful. Aa original object delete aipothe, `WeakMap` lo unna metadata kuda automatically clean aipotundi, memory leak avvakunda.
