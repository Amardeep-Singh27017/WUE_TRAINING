// Declare an array using let
let numbers = [1, 2, 3, 4, 5];

// Using map() to multiply each element by 2
const multiplyByTwo = numbers.map(num => num * 2);
console.log(multiplyByTwo); // Output: [2, 4, 6, 8, 10]



// Using filter() to get numbers greater than 2
const greaterThanTwo = numbers.filter(num => num > 2);
console.log(greaterThanTwo); // Output: [3, 4, 5]


// Using reduce() to sum all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15



// Using object destructuring to extract values
const person = { name: 'Ram', age: 30 };
const { name, age } = person;
console.log(name, age); // Output: Ram 30


// Arrow function to add two numbers
const add = (a, b) => a + b;
console.log(add(5, 10)); // Output: 15
