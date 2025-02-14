// Custom implementation of map, filter, and reduce without callback functions

Array.prototype.customMap = function() {
    let newArray = []; 
    for (let i = 0; i < this.length; i++) {
        newArray.push(this[i] * 2); 
    }
    return newArray; // Return new array
};


const numbers = [1, 2, 3, 4, 5];

// Using custom map function
const doubledNumbers = numbers.customMap();
console.log('Mapped Array:', doubledNumbers); // Output: [2, 4, 6, 8, 10]




// Custom filter function 
Array.prototype.customFilter = function() {
    let newArray = []; 
    for (let i = 0; i < this.length; i++) {
        if (this[i] > 2) { 
            newArray.push(this[i]);
        }
    }
    return newArray; // Return filtered array
};


// Using custom filter function
const greaterThanTwo = numbers.customFilter();
console.log('Filtered Array:', greaterThanTwo); // Output: [3, 4, 5]




// Custom reduce function without callback
Array.prototype.customReduce = function(initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        accumulator += this[i]; 
    }
    return accumulator; 
};


// Using custom reduce function
const sum = numbers.customReduce(0);
console.log('Reduced Value Sum: ', sum); // Output: 15

