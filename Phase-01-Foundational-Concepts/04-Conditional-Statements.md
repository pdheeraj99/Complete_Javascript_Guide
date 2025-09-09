# 🚦 Phase 1: Conditional Statements 🚦

Decisions, decisions, decisions! Real life lo laage, programming lo kuda manam chala decisions teeskuntam. Ee conditions correct aite em cheyali, thappu aite em cheyali? Daanike manaki conditional statements unnayi.

---

### 1. The `if` Statement

`if` statement anedi basic conditional statement. Parentheses `()` lo unna condition `true` aite, curly braces `{}` lo unna code block execute avtundi.

```javascript
let temperature = 35;

if (temperature > 30) {
  console.log("It's a hot day! 🥵");
}
```
Ee example lo, `temperature > 30` anedi `true` kabatti, message print avtundi.

---

### 2. The `if...else` Statement

Condition `true` aite okati, `false` aite inkokati cheyali anukunte `if...else` vaadatham.

```javascript
let userAge = 16;

if (userAge >= 18) {
  console.log("You are eligible to vote. ✅");
} else {
  console.log("You are not eligible to vote yet. ❌");
}
```
`userAge >= 18` anedi `false` kabatti, `else` block lo unna code execute avtundi.

---

### 3. The `if...else if...else` Statement

Manaki multiple conditions check cheyalsi vasthe, `else if` vaadukovachu.

```javascript
let score = 85;

if (score >= 90) {
  console.log("Grade A+ ✨");
} else if (score >= 80) {
  console.log("Grade A 👍");
} else if (score >= 70) {
  console.log("Grade B 😊");
} else {
  console.log("Grade C or below. Keep trying! 💪");
}
```
JavaScript painunchi kindaki conditions check chestundi. Ekkada first `true` vastundo, aa block execute chesi, migitavi skip chestundi. Ekkada `score >= 80` `true` avtundi, so "Grade A" print ayyi, akkadi nunchi structure bayataki vachesindi.

---

### 4. The `switch` Statement

Chala `else if` statements unte code chala lengthy ga kanipinchachu. Alanti situation lo, oka variable value ni multiple possible values tho compare cheyadaniki `switch` statement vaadatam better.

```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week! 😩");
    break; // `break` chala important!
  case "Friday":
    console.log("Yay, it's the weekend soon! 🎉");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend! 🥳");
    break;
  default:
    console.log("It's a regular day.");
}
```
**How `switch` works:**
1.  `switch` anedi `day` variable value ni teeskuntundi.
2.  Adi prathi `case` tho `day` value ni strictly compare (`===`) chestundi.
3.  Ekkada match avtundo, aa `case` kindha unna code execute avtundi.
4.  **`break` keyword:** `break` chala mukhyam. Leka pothe, match ayina `case` tarvata unna anni cases execute aipotayi ("fall-through"). Idi manaki വേണ്ട.
5.  **`default` keyword:** Edi `case` match avakapothe, `default` block execute avtundi. Idi `else` laantidi anamata.
6.  Multiple cases ki same code run cheyali ante, cases ni group cheyochu (like "Saturday" and "Sunday").
