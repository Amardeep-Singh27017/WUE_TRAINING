// Custom implementation of map, filter, and reduce using arrow functions

// Custom map function using arrow function
Array.prototype.customMap = function() {   // using prototype object define customMap method , here customMap inherit the all property of the Array
    return this.map(num => num * 2); 
};

// Example usage
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.customMap();
console.log('Mapped Array:', doubledNumbers); 




// Custom filter function using arrow function
Array.prototype.customFilter = function() {
    return this.filter(num => num > 2); 
};

const numbers1 = [1, 2, 3, 4, 5];

const greaterThanTwo = numbers1.customFilter();
console.log('Filtered Array:', greaterThanTwo); 




// Custom reduce function using arrow function
Array.prototype.customReduce = function(initialValue) {
    return this.reduce((acc, num) => acc + num, initialValue); 
};

const numbers2 = [1, 2, 3, 4, 5];

const sum = numbers2.customReduce(0);
console.log('Reduced Value (Sum):', sum); 



// Another example 
function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function(){
    console.log("Hello, my name is " +
        this.name + " and I am " +
        this.age + " years old."); 
}

let person1 = new Person("Ram", 30);

person1.greet();

