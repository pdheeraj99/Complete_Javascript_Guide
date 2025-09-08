// ==================================================================
// 🗂️ Phase 2: Understanding Objects - Code Examples 🗂️
// ==================================================================

// --- 1. Object Creation (Literal Notation) ---
console.log("--- Object Creation ---");
const movie = {
  title: "Baahubali",
  director: "S. S. Rajamouli",
  releaseYear: 2015,
  genres: ["Action", "Drama", "Fantasy"],
  isHit: true
};
console.log("Movie Object:", movie);
console.log("\n");


// --- 2. Property Access (Dot vs. Bracket Notation) ---
console.log("--- Property Access ---");
// a) Dot Notation
console.log("Movie Title (Dot Notation):", movie.title);

// b) Bracket Notation
console.log("Movie Director (Bracket Notation):", movie['director']);

// When to use Bracket Notation:
// 1. Keys with spaces or special characters
const userProfile = {
  'full-name': 'Venkatesh Prasad',
  'login-count': 5
};
console.log("User's full name:", userProfile['full-name']);

// 2. Using a variable to access a key
let keyToAccess = 'releaseYear';
console.log(`The movie's ${keyToAccess} is:`, movie[keyToAccess]); // Correct: 2015
console.log("Trying with dot notation (incorrect):", movie.keyToAccess); // Incorrect: undefined
console.log("\n");


// --- 3. Object Methods and `this` Keyword ---
console.log("--- Object Methods & 'this' ---");
const smartphone = {
  brand: "Samsung",
  model: "Galaxy S24",
  storage: 256,
  battery: 100,

  // Method to display phone info
  displayInfo: function() {
    // `this` refers to the `smartphone` object
    return `${this.brand} ${this.model} with ${this.storage}GB storage.`;
  },

  // Method to simulate using the phone
  use: function(hours) {
    console.log(`Using the phone for ${hours} hours...`);
    this.battery -= hours * 5; // Let's say 5% battery drains per hour
  }
};

console.log(smartphone.displayInfo());
smartphone.use(4);
console.log(`Current battery level: ${smartphone.battery}%`);
console.log("\n");


// --- 4. Object Destructuring ---
console.log("--- Object Destructuring ---");
const student = {
  name: "Anjali",
  age: 21,
  major: "ECE",
  contact: {
    email: "anjali@example.com",
    phone: "1234567890"
  }
};

// Basic destructuring
const { name, age, major } = student;
console.log(`Student Name: ${name}, Major: ${major}`);

// Destructuring with renaming
const { name: studentName, age: studentAge } = student;
console.log(`Renamed - Name: ${studentName}, Age: ${studentAge}`);

// Destructuring nested objects
const { contact: { email } } = student;
console.log(`Student Email: ${email}`);

// Destructuring with default values
const { gpa = "Not Available" } = student;
console.log(`Student GPA: ${gpa}`);
console.log("\n");


// --- 5. Property Enumeration (`for...in` loop) ---
console.log("--- Property Enumeration ---");
const course = {
  courseId: "JS101",
  title: "Complete JavaScript",
  duration: "8 Weeks"
};

console.log("Course Details:");
for (const key in course) {
  // We check if the property belongs to the object itself (not from its prototype chain)
  if (Object.hasOwnProperty.call(course, key)) {
    console.log(`- ${key}: ${course[key]}`);
  }
}
console.log("\n");
