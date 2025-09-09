# 🔍 Phase 3: Scope Deep Dive 🔍

Welcome to one of the most important concepts in JavaScript! Scope anedi variable visibility ni control chese set of rules. Scope ni ardham cheskunte, "Why is this variable `undefined`?" lanti common questions ki answer dorukutundi.

---

### 1. Review of Scope Types

Manam Phase 1 lo chusinaట్టుగా, JavaScript lo moodu rakala scope untayi:

*   **Global Scope 🌍:** Code lo ekkadaina, ഏ function bayata declare chesinaa, adi global scope lo untundi. Ee variables ni program lo ekkadinunchi aina access cheyochu. (Avoid creating too many global variables!)
*   **Function Scope 🏠:** `var`, `let`, or `const` tho function lopala declare chesina variables. Evi **aa function lopala matrame** accessible.
*   **Block Scope 🧱:** `let` and `const` tho `{}` block (like `if`, `for`, `while`) lopala declare chesina variables. Evi **aa block lopala matrame** accessible. `var` ki block scope undadu!

---

### 2. Lexical Scoping (The Golden Rule)

Idi scope lo golden rule anamata. **"Lexical Scoping" ante, oka function yokka scope, adi code lo ekkada raasamo (author-time) aadharanga untundi, daanini ekkada call chesamo (run-time) aadharanga kaadu.**

Ante, function ni create chesinappude daani scope fix aipotundi.

```javascript
function outer() {
  const outerVar = "I am from outer function";

  function inner() {
    // 'inner' function 'outer' function lopala raasi undi.
    // So, 'inner' ki 'outerVar' access untundi.
    console.log(outerVar);
  }

  inner();
}

outer(); // Output: "I am from outer function"
```
`inner` function `outer` function yokka variables ni access cheyagalugutundi endukante adi `outer` function lopala *physically* define cheyabaddadi.

---

### 3. The Scope Chain (How JS Finds Variables)

Oka variable ni access cheyadaniki try chesinappudu, JavaScript oka specific order lo vetukutundi. Ee process ne **Scope Chain** antaru.

1.  **Current Scope:** First, adi current function/block scope lo vetukutundi. Variable ikkada dorikite, search aagipotundi.
2.  **Outer Scope:** Ikkada dorakkapothe, adi bayata unna scope (parent scope) lo vetukutundi.
3.  **Keep Going Out...:** Ala bayataki veltu untundi, prathi outer scope lo check chestu.
4.  **Global Scope:** Final ga, Global scope lo vetukutundi.
5.  **Error!** Global scope lo kuda dorakkapothe, appudu `ReferenceError` vastundi.

```javascript
const globalVar = "Global";

function func1() {
  const func1Var = "Func1";

  function func2() {
    const func2Var = "Func2";

    // JS will look for 'globalVar' like this:
    // 1. Is it in func2's scope? No.
    // 2. Go to outer scope (func1). Is it there? No.
    // 3. Go to outer scope (Global). Is it there? Yes!
    console.log(globalVar); // "Global"
    console.log(func1Var);  // Found in func1's scope
    console.log(func2Var);   // Found in func2's scope
  }

  func2();
}

func1();
```

---

### 4. Variable Shadowing

Oka inner scope lo unna variable name, outer scope lo unna variable name tho match aite, inner scope lo unna variable outer scope variable ni "shadow" (or hide) chestundi.

```javascript
const shadowVar = "I am global";

function testShadow() {
  const shadowVar = "I am local"; // This "shadows" the global one.
  console.log(shadowVar); // Output: "I am local"
}

testShadow();
console.log(shadowVar); // Output: "I am global" (The global one is unaffected)
```
Inner scope lo, JavaScript local version ni first chusi, daanini use cheskuni aapestundi. Adi scope chain lo bayataki velladu.

---

### 5. Recap: Temporal Dead Zone (TDZ)

Idi `let` and `const` ki matrame apply avtundi.
`let` and `const` variables kuda hoist avtayi (vaati scope top ki veltayi), kani `var` laga `undefined` tho initialize avvavu. Avi "uninitialized" state lo untayi.

Declaration line ki mundu aa variable ni access cheyadaniki try cheste, aa time gap ne **Temporal Dead Zone** antaru. Appudu `ReferenceError` vastundi.

```javascript
function tdzExample() {
  // Start of TDZ for 'myVar'
  // console.log(myVar); // ReferenceError!
  // End of TDZ for 'myVar'
  let myVar = "Now I am accessible";
  console.log(myVar);
}
```
Idi manam accident ga variable ni declare cheyakmundu vaadakunda help chestundi.
