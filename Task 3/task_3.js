// Variables & Data Types
let name = "John";       // String
const age = 25;          // Number
var isStudent = true;    // Boolean
let scores = [85, 90];   // Array
let person = {           // Object
  firstName: "Jane",
  lastName: "Doe",
  age: 22
};



// Operators
let sum = 10 + 5;       // Addition
let diff = 10 - 5;      // Subtraction
let product = 10 * 5;   // Multiplication
let quotient = 10 / 5;  // Division


// Comparison
console.log(10 > 5);    // true
console.log(10 === 5);  // false



// Logical Operators
console.log(true && false);  // false
console.log(true || false);  // true


// Functions
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Amar"));


const greetArrow = (name) => "Hello, " + name;
console.log(greetArrow("Amar"));


// Loops
for (let i = 0; i < 5; i++) {
  console.log(i);  // 0, 1, 2, 3, 4
}


let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}


i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);


// Conditionals
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}



let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("End of the week");
    break;
  default:
    console.log("Midweek");
}
