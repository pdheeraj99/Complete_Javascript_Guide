# 🧮 Phase 1: Operators in JavaScript 🧮

Welcome back! Mana daggara data undi, ippudu aa data tho pani cheyali. Adi cheyadaniki manaki operators kavali. Let's explore them!

---

### 1. Arithmetic Operators (అంకగణిత ఆపరేటర్లు) ➕➖

Basic mathematics cheyadaniki veetini vaadatharu.

| Operator | Name | Example | Result |
| :---: | :--- | :--- | :---: |
| `+` | Addition | `10 + 5` | `15` |
| `-` | Subtraction | `10 - 5` | `5` |
| `*` | Multiplication| `10 * 5` | `50` |
| `/` | Division | `10 / 5` | `2` |
| `%` | Modulus | `10 % 3` | `1` |
| `**` | Exponentiation| `10 ** 2`| `100` |

*   **Modulus (`%`)** ante division chesaka vache *remainder* (శేషం).
*   **Exponentiation (`**`)** ante power (ఘాతం). `10 ** 2` ante 10².

---

### 2. Assignment Operators (అసైన్‌మెంట్ ఆపరేటర్లు) ✍️

Oka variable ki value assign cheyadaniki veetini vaadatharu.

| Operator | Example | Equivalent To |
| :---: | :--- | :--- |
| `=` | `x = 10` | `x = 10` |
| `+=` | `x += 5` | `x = x + 5` |
| `-=` | `x -= 5` | `x = x - 5` |
| `*=` | `x *= 5` | `x = x * 5` |
| `/=` | `x /= 5` | `x = x / 5` |

Ee shortcut operators (`+=`, `-=`, etc.) code ni clean ga unchutayi.

---

### 3. Comparison Operators (పోలిక ఆపరేటర్లు) ⚖️

Rendu values ni compare chesi, `true` or `false` (boolean) result ivvadaniki veetini vaadatharu.

| Operator | Name | Example | Result |
| :---: | :--- | :--- | :---: |
| `==` | Equal to | `5 == "5"` | `true` |
| `===`| Strict Equal to| `5 === "5"`| `false` |
| `!=` | Not Equal to | `5 != 8` | `true` |
| `!==`| Strict Not Equal| `5 !== "5"`| `true` |
| `>` | Greater than | `10 > 5` | `true` |
| `<` | Less than | `10 < 5` | `false` |
| `>=` | Greater than or equal to | `10 >= 10`| `true` |
| `<=` | Less than or equal to | `5 <= 10` | `true` |

#### The Most Important Interview Question: `==` vs `===` 🤔

*   **`==` (Loose Equality):** Idi values ni compare chese mundu, vaati types ni okate laaga marchadaniki try chestundi (Type Coercion). `5 == "5"` lo, string `"5"` ni number `5` ga marchi, appudu compare chestundi. Anduke `true` vastundi.
*   **`===` (Strict Equality):** Idi **value AND type** rendu check chestundi. Type veru ga unte, direct ga `false` return chestundi. `5 === "5"` lo, number type and string type veru kabatti `false` vastundi.

**Golden Rule: Eppudu `===` vaadandi!** 👍 Idi unexpected bugs ni avoid chestundi.

---

### 4. Logical Operators (తార్కిక ఆపరేటర్లు) 🧠

Multiple conditions ni combine cheyadaniki veetini vaadatharu.

| Operator | Name | Description |
| :---: | :--- | :--- |
| `&&` | AND | Rendu conditions `true` aite ne, result `true` avtundi. |
| `||` | OR | Edoka condition `true` aina, result `true` avtundi. |
| `!` | NOT | `true` ni `false` ga, `false` ni `true` ga marchutundi. |

```javascript
let isAdult = true;
let hasTicket = false;

// AND Example
console.log(isAdult && hasTicket); // false (rendu true kaadu)

// OR Example
console.log(isAdult || hasTicket); // true (okati true kabatti)

// NOT Example
console.log(!isAdult); // false
```

---

### 5. Ternary Operator (టెర్నరీ ఆపరేటర్)❓

Idi `if/else` statement ki oka chinna shortcut.

**Syntax:** `condition ? value_if_true : value_if_false`

```javascript
let age = 20;
let message = (age >= 18) ? "You can vote" : "You cannot vote";
console.log(message); // Output: You can vote
```
Idi code ni chala short ga and readable ga unchutundi.
