// Objects
// Object oriented programming (OOP) is a programming paradigm that uses objects to represent data and methods to manipulate that data. In JavaScript, objects are a collection of key-value pairs.

// let circle = {
// radius: 1,
// location: {
//     x: 1,
//     y: 1
// },
// isVisible: true,
// draw: function () {
//     console.log('Draw');
// }
// }

// function draw() {}

// function move() {}

// circle.draw(); // Calling the draw method of the circle object

// If the function is part of the object, it is called a method
// Methods are functions that are properties of an object



// Factory Function

// A factory function is a function that returns an object. It is used to create multiple instances of an object with the same structure.



// console.log(createCircle(2, 5, 3, false, function () {
//     console.log('Draw Circle');
// })); // { radius: 1, location: { x: 1, y: 1 }, isVisible: true, draw: [Function] }

// function createCircle(radius, x, y, isVisible, drawFunction) {
//     return {
//         radius: radius,
//         location: {
//             x: x,
//             y: y
//         },
//         isVisible: isVisible,
//         draw: drawFunction, // Assigning the draw function to the draw property
//     }
// }


// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('Draw');
//         }
//     }
// }

// const circle1 = createCircle(1);

// console.log(circle1);



// Constructor Function

// When we create a constructor function, we have to use the PascalCase notation, OneTwoThreeFour
// to make understand that this is a constructor function to other JavaScript developers


// function Circle(radius) {
//     this.radius = radius; // this refers to the object being created
//     this.draw = function () {
//         console.log('Draw');
//     }
// }

// const circle2 = new Circle(1); // Creating a new instance of the Circle object

// console.log(circle2);


// Dynamic Nature of Objects
// Objects in JavaScript are dynamic, meaning we can add, remove, or modify properties and methods at any time.

// const circle = {
//     radius: 1
// };

// circle.color = 'red';

// circle.draw = function () {
//     console.log('Draw');
// }

// delete circle.color;
// delete circle.draw;

// console.log(circle);


// Constructor Property

// Every object in JavaScript has a constructor property that refers to the function that created the instance of the object.


// function createCircle(radius) {
//     return {
//         radius,
//         draw: function () {
//             console.log('Draw');
//         }
//     }
// }

// const circle = createCircle(1);


// // Constructor Function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('Draw');
//     }
// }

// const another = new Circle(1);


// let x = {};

// let x = new Object();, When we use "let x = {}", Javascript sees it as "let x = new Object();"



// Functions are Objects

// Functions in JavaScript are first-class objects, meaning they can be treated like any other object. They can have properties and methods, and can be passed as arguments to other functions or returned from functions.

// bv

// const Circle1 = new Function('radius', `
//     this.radius = radius;
//     this.draw = function () {
//         console.log('Draw');
//     }
// `);

// const circle = new Circle1(1); // Creating a new instance of the Circle1 object

// Circle.call({}, 3)
// Circle.apply({}, [3, 3, 4, 5, 6, 6]); // Using call and apply to invoke the Circle function with a specific context

// const another = new Circle(2); // Creating a new instance of the Circle object


// const PersonalInfo = {
//     fullName: function (city, country) {
//         return this.firstName + " " + this.lastName + ", " + city + ", " + country;
//     }
// };

// const person = {
//     firstName: "Hasanboy",
//     lastName: "Zafarov"
// };

// console.log(PersonalInfo.fullName.apply(person, ["Nukus", "Uzbekistan"]));



// Value types vs Reference types

// Value types: Number, String, Boolean, Undefined, Null, Symbol

// Reference types: Object, Array, Function

// let x = 10;
// let y = x; // y is a copy of x, so if we change y, x will not be affected

// x = 20; // Changing x will not affect y
// console.log(x); // 20

// Primitives are copied by value, meaning they are stored in a separate memory location.
// Objects are copied by reference, meaning they point to the same memory location.


// let obj = {
//     value: 10
// }; // Yet, when we use independent variable, it is a reference type
// If we change the value of obj, it will affect the original object

// function increase(obj) {
//     obj.value++;
// }

// increase(obj);

// console.log(obj.value);



// Enumerating Properties

// We can enumerate the properties of an object using a for...in loop or Object.keys() method.


// const circle = {
//     radius: 1,
//     draw() {
//         console.log('Draw');
//     }
// }

// for (let key in circle) {
//     console.log(key, circle[key]);
// }

// for (let key of Object.keys(circle)) { // it return an array of keys so that for..of loop can iterate over it
//     console.log(key);
// }

// console.log(Object.keys(circle));


// for (let entry of Object.entries(circle)) { // it returns an array of key-value pairs
//     console.log(entry);

//     // [Radius, 1]
//     // [Draw, function]
// }

// console.log('radius' in circle); // Checking if the property 'color' exists in the circle object




// Cloning an Object

// We can clone an object using Object.assign() or the spread operator (...).

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('Draw');
//     }
// }

// const move = {
//     x: 1,
//     y: 1
// }
// const anotherCircle = {};

// for (let key in circle) {
//     anotherCircle[key] = circle[key]; // Copying properties from circle to anotherCircle
// }
// Using for...in method is little bit old approach

// const another = Object.assign({}, circle, move); // Cloning circle and location into another object

// console.log(another); // { radius: 1, draw: [Function: draw] }

// console.log(circle); // { radius: 1, draw: [Function: draw] }

// console.log(anotherCircle); // { radius: 1, draw: [Function: draw] }

// const another = {
//     ...circle,
//     ...move
// }; // Using spread operator to clone circle and move into another object

// console.log(another); // { radius: 1, draw: [Function: draw], x: 1, y: 1 }



// Garbage Collection

// JavaScript has a garbage collector that automatically frees up memory by removing objects that are no longer referenced. This helps prevent memory leaks and optimizes performance.



// Math

// console.log(Math.random()); // Generates a random number between 0 and 1
// console.log(Math.floor(Math.random() * 10)); // Generates a random integer between 0 and 9

// console.log(Math.max(1, 2, 3, 4, 5)); // Returns the maximum value from the given numbers
// console.log(Math.min(1, 2, 3, 4, 5)); // Returns the minimum value from the given numbers
// console.log(Math.PI); // Returns the value of PI (3.14159...)

// console.log(Math.sqrt(16)); // Returns the square root of the given number (4)
// console.log(Math.pow(2, 3)); // Returns the result of raising the first argument to the power of the second argument (8)


// Strings
// Strings in JavaScript are immutable, meaning they cannot be changed after they are created. However, we can create new strings based on existing ones using various string methods.

// String primitive 
const message = 'This is my first message';


// String object
new String('Hello, World!'); // Creating a string object

