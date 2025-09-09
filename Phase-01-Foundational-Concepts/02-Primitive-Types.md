# 🧱 Phase 1: Primitive Data Types 🧱

Manam variables lo ekkada aina data store cheyochu, kani aa data ఏ రకమైనదో teliyali kada? Ee lesson lo manam JavaScript lo unna primitive (basic) data types gurinchi nerchukundam.

`typeof` ane operator tho manam oka variable yokka data type ni kanukkovachu.

---

### 1. String (స్ట్రింగ్) 📝

Strings ante sequence of characters, basically text anamata. Manam single quotes (`''`), double quotes (`""`), or backticks (`` ``) lo pettali.

```javascript
let name = "Raju"; // Double quotes
let message = 'Welcome to JavaScript!'; // Single quotes
let greeting = `Hello, ${name}!`; // Backticks (Template Literal)
```
*   **Best Practice:** Backticks vaadatam chala powerful, endukante manam variables ni direct ga string lo embed cheyochu (`${variable}`).

---

### 2. Number (సంఖ్య) 🔢

JavaScript lo numbers anni `number` type lone untayi. Integers (purna sankhyalu like 10, -5) and floating-point numbers (dasamsa sankhyalu like 3.14) ki separate types undavu.

```javascript
let age = 30;
let price = 99.99;
let temperature = -10;
```
Special number values kuda unnayi: `Infinity`, `-Infinity`, and `NaN` (Not-a-Number).

---

### 3. Boolean (బూలియన్) ✅❌

Boolean ante just two values matrame untayi: `true` or `false`. Evi conditions check cheyadaniki chala useful.

```javascript
let isStudent = true;
let hasLicense = false;

if (isStudent) {
  console.log("You get a student discount!");
}
```

---

### 4. Undefined (నిర్వచించబడనిది) 🤷‍♂️

Oka variable ni declare chesi, daaniki em value ivakapothe, daani value automatically `undefined` avtundi.

```javascript
let city;
console.log(city); // Output: undefined
```
Idi "value has not been assigned yet" ani cheptundi.

---

### 5. Null (శూన్యం) 텅

`null` ante "no value" or "empty value". Idi manam intentionally oka variable ki assign chestam. `undefined` ki `null` ki teda enti ante, `null` anedi programmer intentionally set chesedi.

```javascript
let userProfile = null;
// User login avvaledu anuko, appudu userProfile ni null ki set cheyochu.
```
Idi "I know there is a value, but it is nothing right now" ani cheptundi.

**Fun Fact:** `typeof null` check cheste `'object'` ani vastundi. Idi JavaScript lo oka famous bug, kani legacy reasons valla alaane undipoindi! 🐞

---

### 6. Symbol (చిహ్నం) ⚛️

`Symbol` anedi ES6 lo vachindi. Idi oka **unique and immutable** value ni create chestundi. Evi object properties ki unique keys create cheyadaniki vaadatharu, property name conflicts rakunda.

```javascript
const id = Symbol('uniqueId');
const user = {
  name: "Sita",
  [id]: 12345 // Using symbol as a key
};

console.log(user[id]); // 12345
```

---

### 7. BigInt (పెద్ద పూర్ణాంకం) 🐘

JavaScript lo `number` type anedi oka certain pedda number varake safe ga store cheyagaladu. Daanikanna pedda numbers tho work cheyalsi vasthe `BigInt` vaadatham. Number ki `n` add cheste adi BigInt avtundi.

```javascript
const veryLargeNumber = 9007199254740991n; // 'n' at the end
const anotherLargeNumber = BigInt("9007199254740992");

console.log(veryLargeNumber + anotherLargeNumber);
```
`BigInt` ni `Number` type tho direct ga mix cheyalem.

Ee 7 types ni "Primitive" data types antaru. Endukante vaati values direct ga memory lo store avtayi.
