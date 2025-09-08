// ==================================================================
// 📜 Phase 6: Generators & Iterators - Code Examples 📜
// ==================================================================

// --- 1. Basic Generator Function ---
console.log("--- Basic Generator ---");

// A generator function is defined with `function*`
function* basicGenerator() {
  yield "First value";
  yield "Second value";
  yield "Third value";
}

// When you call a generator, it returns an iterator object. The code doesn't run yet.
const myIterator = basicGenerator();

console.log("Using the iterator manually with .next():");
console.log(myIterator.next()); // { value: 'First value', done: false }
console.log(myIterator.next()); // { value: 'Second value', done: false }
console.log(myIterator.next()); // { value: 'Third value', done: false }
console.log(myIterator.next()); // { value: undefined, done: true }
console.log("\n");


// --- 2. Using `for...of` with a Generator ---
console.log("--- Using for...of with a Generator ---");
// The for...of loop is the easiest way to consume a generator.
// It automatically calls .next() and stops when done is true.
for (const value of basicGenerator()) {
  console.log(value);
}
console.log("\n");


// --- 3. Example: Infinite Sequence Generator ---
console.log("--- Infinite Sequence Generator ---");
// Generators are great for sequences that are too large or infinite.
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const userIdGenerator = idGenerator();
console.log("Generating unique user IDs:");
console.log("New User ID:", userIdGenerator.next().value); // 1
console.log("New User ID:", userIdGenerator.next().value); // 2
console.log("New User ID:", userIdGenerator.next().value); // 3
// This could go on forever without crashing.
console.log("\n");


// --- 4. Making a Custom Object Iterable ---
console.log("--- Making a Custom Object Iterable ---");

const book = {
  title: "Sapiens",
  author: "Yuval Noah Harari",
  chapters: [
    "Chapter 1: An Animal of No Significance",
    "Chapter 2: The Tree of Knowledge",
    "Chapter 3: A Day in the Life of Adam and Eve",
    "Chapter 4: The Flood"
  ],

  // To make this object iterable, we implement the [Symbol.iterator] method.
  // Using a generator makes this incredibly easy.
  *[Symbol.iterator]() {
    for (const chapter of this.chapters) {
      yield chapter;
    }
  }
};

// Now we can use a for...of loop directly on our `book` object!
console.log(`Iterating through the chapters of '${book.title}':`);
for (const chapter of book) {
  console.log("-", chapter);
}
console.log("\n");

console.log("🎉 Phase 6 Advanced Concepts Complete! You are a JavaScript wizard! 🎉");
