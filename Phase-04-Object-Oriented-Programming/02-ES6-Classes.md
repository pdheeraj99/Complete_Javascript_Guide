# 🍬 Phase 4: ES6+ Classes (Syntactic Sugar) 🍬

Prototypes and constructor functions chala powerful, kani vaati syntax konchem clunky ga anipinchachu. Anduke, ES6 (2015) lo `class` ane kottha syntax vachindi.

**Important:** JavaScript classes anevi kottha feature kaadu. Avi just manam nerchukunna **prototypal inheritance meeda oka clean layer (syntactic sugar)**. Behind the scenes, antha ade `prototype` magic!

---

### 1. Basic Class Definition

`class` keyword tho class ni define chestam. `constructor` anedi oka special method, `new` keyword tho object create chesinappudu adi automatically call avtundi.

```javascript
class Vehicle {
  // The constructor is called when we do `new Vehicle(...)`
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  // This is an instance method.
  // Behind the scenes, this is added to `Vehicle.prototype`.
  getDetails() {
    return `This is a ${this.make} ${this.model}.`;
  }
}

const myCar = new Vehicle("Tata", "Nexon");
console.log(myCar.getDetails()); // "This is a Tata Nexon."
```
Ee syntax chala cleaner and more organized ga undi kada!

---

### 2. Inheritance with `extends` and `super`

Inheritance ante inka easy aipoindi.
*   **`extends`:** Oka class inko class nunchi inherit cheskodaniki ee keyword vaadatharu.
*   **`super()`:** Child class constructor lo, parent class constructor ni call cheyadaniki `super()` vaadatharu. `this` keyword ni use cheyakmundu `super()` ni call cheyali.

```javascript
// Parent Class
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  getSummary() {
    return `${this.title} was written by ${this.author}.`;
  }
}

// Child Class
class EBook extends Book {
  constructor(title, author, fileSize) {
    // Call the parent constructor with super()
    super(title, author);
    this.fileSize = fileSize;
  }

  getDetails() {
    // We can also call parent methods with `super`
    const summary = super.getSummary();
    return `${summary} The file size is ${this.fileSize}MB.`;
  }
}

const myEBook = new EBook("The Alchemist", "Paulo Coelho", 2);
console.log(myEBook.getDetails());
// Output: The Alchemist was written by Paulo Coelho. The file size is 2MB.
```

---

### 3. Static Methods

`static` methods anevi class ke sontham, instance ki kaadu. Ante, `new` tho object create cheyakundane, direct ga class meeda call cheyochu. Ivi helper functions or utility functions ki chala useful.

```javascript
class MathHelper {
  static PI = 3.14159;

  static add(a, b) {
    return a + b;
  }
}

console.log(MathHelper.PI);       // 3.14159
console.log(MathHelper.add(5, 10)); // 15

// const mathInstance = new MathHelper();
// console.log(mathInstance.add(5, 10)); // Error! `add` is not a function on the instance.
```

---

### 4. Getters and Setters

`get` and `set` keywords tho, manam properties ni access chesinattu kanipinche methods ni create cheyochu. Ivi computed properties or validation ki useful.

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // This is a getter. It looks like a property when we use it.
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // This is a setter.
  set fullName(name) {
    const [first, last] = name.split(' ');
    this.firstName = first;
    this.lastName = last;
  }
}

const person = new Person("Allu", "Arjun");
console.log(person.fullName); // Calling it like a property, not a method `person.fullName()`

person.fullName = "Ram Charan"; // Using the setter
console.log(person.firstName); // "Ram"
```

---

### 5. Private Fields and Methods

Class bayata nunchi access cheyakunda undalsina properties or methods ni `private` ga cheyochu. Daanikosam `#` prefix vaadatharu.

```javascript
class BankAccount {
  // This is a private field. It can only be accessed inside the class.
  #balance = 0;

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      this.#logTransaction(`Deposited ${amount}`);
    }
  }

  getBalance() {
    return this.#balance;
  }

  // This is a private method
  #logTransaction(message) {
    console.log(`[LOG]: ${message}`);
  }
}

const myAccount = new BankAccount();
myAccount.deposit(1000);

console.log(myAccount.getBalance()); // 1000

// console.log(myAccount.#balance); // SyntaxError! Cannot access private field.
// myAccount.#logTransaction("test"); // SyntaxError!
```
Ee feature encapsulation ni (data hiding) chala easy ga implement cheyadaniki help chestundi.
