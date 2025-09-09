// ==================================================================
// 🚦 Phase 1: Conditional Statements - Code Examples 🚦
// ==================================================================

// --- 1. `if`, `else if`, and `else` ---
console.log("--- `if...else if...else` Example ---");

// Let's check the weather and decide what to wear.
let weather = "rainy";
let temperature = 15; // in Celsius

if (weather === "sunny" && temperature > 25) {
  console.log("It's sunny and hot! Wear shorts and a t-shirt. ☀️");
} else if (weather === "sunny" && temperature <= 25) {
  console.log("It's sunny but cool. A light jacket would be nice. 😎");
} else if (weather === "rainy") {
  console.log("It's raining! Don't forget your umbrella and raincoat. ☔");
} else if (weather === "snowy") {
  console.log("It's snowing! Wear a heavy coat, gloves, and a cap. ❄️");
} else {
  console.log("Check the weather app, it's an unusual day! 🤷");
}
console.log("\n");


// --- 2. `switch` statement ---
console.log("--- `switch` Example ---");

// Let's find out which planet is it based on its position from the sun.
let planetPosition = 3;
let planetName;

switch (planetPosition) {
  case 1:
    planetName = "Mercury";
    break;
  case 2:
    planetName = "Venus";
    break;
  case 3:
    planetName = "Earth"; // This case will match!
    break;
  case 4:
    planetName = "Mars";
    break;
  case 5:
    planetName = "Jupiter";
    break;
  default:
    planetName = "Unknown planet beyond Jupiter or not a planet.";
    break; // `break` in default is not mandatory, but good practice.
}

console.log(`Planet at position ${planetPosition} is ${planetName}. 🌍`);
console.log("\n");


// --- `switch` with fall-through ---
console.log("--- `switch` with Fall-Through Example ---");

// Let's determine if a character is a vowel or a consonant.
let character = 'a';
let charType;

switch (character.toLowerCase()) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    // If the character is any of these, it will "fall through" to this line.
    charType = "Vowel";
    break;
  default:
    charType = "Consonant";
}

console.log(`The character '${character}' is a ${charType}.`);
console.log("\n");


// --- `switch` without `break` (A common bug!) ---
console.log("--- `switch` without `break` (Bug Example) ---");

let fruit = "Apple";
console.log(`What happens if we forget 'break' for fruit = "${fruit}"?`);

switch (fruit) {
  case "Apple":
    console.log("Selected Apple."); // This runs...
  case "Banana":
    console.log("...and also selected Banana."); // ...and this runs too because there was no break.
  case "Orange":
    console.log("...and also selected Orange."); // ...and this also runs!
    break; // Stops here.
  default:
    console.log("No fruit selected.");
}
console.log("This is why `break` is so important in a `switch` statement!");
