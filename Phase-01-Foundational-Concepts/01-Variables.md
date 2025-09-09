# 🚀 Phase 1: Variables (var, let, const) 🚀

Hello! Welcome to our first lesson! Ee lesson lo manam JavaScript lo variables gurinchi nerchukundam. Variables ante data ni store chesukovadaniki oka container anamata. 📦

## 1. `var` (The Old Way 👴)

`var` anedi old style variable declaration. Idi function-scoped ga untundi.

```javascript
// 'var' ni ila declare chestam
var message = "Hello World!";
console.log(message); // Output: Hello World!
```

**Scope Issue:** `var` ki block scope (`{}`) undadu. Ante, `if` block or `for` loop lo declare chesina kuda, adi bayata accessible ga untundi. Idi konni sarlu confusion create chestundi. 🤔

```javascript
if (true) {
  var greeting = "Good morning";
}
console.log(greeting); // Output: Good morning (block bayata kuda work avtundi)
```

**Hoisting:** `var` variables "hoist" avtayi, ante declaration anedi file top ki move avtundi (value kaadu). So, declare cheyakmundu use cheste `undefined` vastundi, error raadu.

```javascript
console.log(myVar); // Output: undefined
var myVar = 10;
```

---

## 2. `let` (The Modern Way ✅)

`let` anedi ES6 (2015) lo vachina kottha feature. Idi `var` lo unna chala issues ni solve chestundi. `let` anedi **block-scoped**.

```javascript
let score = 100;
score = 110; // 'let' variables ni update cheyochu
console.log(score); // Output: 110
```

**Block Scope:** `let` variable `{}` block lopala matrame accessible ga untundi. Idi code ni predictable ga unchutundi. ✨

```javascript
if (true) {
  let secret = "My secret code";
  console.log(secret); // Output: My secret code
}
// console.log(secret); // Error! 'secret' is not defined (block bayata access cheyalem)
```

**Temporal Dead Zone (TDZ):** `let` variables kuda hoist avtayi, kani `var` laga `undefined` tho initialize avvavu. Declare cheyakmundu access cheste ReferenceError vastundi. Ee time zone ni "Temporal Dead Zone" antaru. 🚫

```javascript
// console.log(player); // ReferenceError! Cannot access 'player' before initialization
let player = "Virat";
```

---

## 3. `const` (The Constant Way 💎)

`const` ante constant. Okasari value assign chesaka, daanini malli **re-assign cheyalem**. Idi kuda `let` laaga **block-scoped**.

```javascript
const birthYear = 2000;
// birthYear = 2001; // TypeError: Assignment to constant variable. (Error vastundi!)
```

**Important Note:** `const` ante value "immutable" (marpuleni) ani kaadu. Just variable re-assignment cheyalem. For example, `const` object lo properties ni manam change cheyochu. 😉

```javascript
const person = {
  name: "Ram",
  age: 25
};

console.log(person.name); // Output: Ram

// Object property ni update cheyochu. Idi allowed! ✅
person.name = "Krishna";
console.log(person.name); // Output: Krishna

// Kani object ni re-assign cheyalem. Idi not allowed! ❌
// person = { name: "Sita" }; // TypeError!
```

## Summary Table 📊

| Feature | `var` | `let` | `const` |
| :--- | :--- | :--- | :--- |
| **Scope** | Function | Block | Block |
| **Re-assignable** | Yes ✅ | Yes ✅ | No ❌ |
| **Hoisting** | Hoisted (with `undefined`) | Hoisted (in TDZ) | Hoisted (in TDZ) |
| **Introduced** | 1995 | 2015 (ES6) | 2015 (ES6) |

**Modern Recommendation:** Eppudu `const` vaadataniki try cheyandi. Value ni update cheyalsi vasthe matrame `let` vaadandi. `var` ni avoid cheyadam better practice! 👍
