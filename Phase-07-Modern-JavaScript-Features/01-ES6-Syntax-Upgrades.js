// ==================================================================
// 🚀 Phase 7: ES6+ Syntax Upgrades - Code Examples 🚀
// ==================================================================

// --- 1. Destructuring Assignment ---
console.log("--- Destructuring ---");
// a) Object Destructuring
const movie = {
  title: "RRR",
  director: "S. S. Rajamouli",
  year: 2022,
  lead_actors: {
    hero1: "N. T. Rama Rao Jr.",
    hero2: "Ram Charan"
  }
};

const { title, year } = movie;
console.log(`Movie: ${title} (${year})`);

// Renaming and Default Value
const { director: directorName, budget = "550 Crores" } = movie;
console.log(`Director: ${directorName}, Budget: ${budget}`);

// Nested Destructuring
const { lead_actors: { hero1, hero2 } } = movie;
console.log(`Lead Actors: ${hero1}, ${hero2}`);

// b) Array Destructuring
const team = ["India", "Cricket", "Men", "T20 World Cup"];
const [country, sport, , tournament] = team; // Skipping an element
console.log(`Team: ${country}, Sport: ${sport}, Tournament: ${tournament}`);
console.log("\n");


// --- 2. Spread Operator (`...`) ---
console.log("--- Spread Operator ---");
// a) In Array Literals
const southIndianStates = ["Andhra Pradesh", "Telangana", "Karnataka"];
const northIndianStates = ["Delhi", "Punjab", "Uttar Pradesh"];
const allStates = [...southIndianStates, ...northIndianStates, "Maharashtra"];
console.log("Combined States:", allStates);

// b) To copy an array
const originalFruits = ["Apple", "Mango"];
const copiedFruits = [...originalFruits];
console.log("Copied Fruits:", copiedFruits);

// c) In Function Calls
const numbers = [10, 5, 25, 15];
const maxNumber = Math.max(...numbers);
console.log("Max number in array:", maxNumber);

// d) In Object Literals
const userDetails = { name: "Vijay", age: 48 };
const userWithRole = { ...userDetails, role: "Actor", city: "Chennai" };
console.log("User with role:", userWithRole);
console.log("\n");


// --- 3. Rest Parameters (`...`) ---
console.log("--- Rest Parameters ---");
// Use `...` in a function definition to collect arguments into an array.
function listGroceries(mustHave1, mustHave2, ...otherItems) {
  console.log("Must-have items:", mustHave1, ",", mustHave2);
  console.log("Other items:", otherItems);
}

listGroceries("Milk", "Bread", "Eggs", "Cheese", "Butter");
console.log("\n");


// --- 4. Default Parameters ---
console.log("--- Default Parameters ---");
function createBooking(passengerName, seatType = "Economy", destination = "Hyderabad") {
  console.log(`Booking for ${passengerName}, Seat: ${seatType}, Destination: ${destination}`);
}

createBooking("Ramesh");
createBooking("Sita", "Business");
createBooking("Gopi", undefined, "Bengaluru"); // `undefined` will trigger the default
console.log("\n");
