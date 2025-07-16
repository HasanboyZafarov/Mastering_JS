// Control Flow
// if, else, switch, for, while, do while, for of, for in


// If Else Statements

// Hour
// if hour between 6am and 12pm: Good Morning!
// if hour between 12pm and 6pm: Good Afternoon!

// if (condition) {
//     statement
// } else if (anotherCondition) {
//     statement
// } else if (yetAnotherCondition) {
//     statement
// } else {
//     statement
// }

// let hour = 13;
// if (hour >= 6 && hour < 12) {
//     console.log('Good Morning!');
// } else if (hour >= 12 && hour < 18) {
//     console.log('Good Afternoon!');
// } else {
//     console.log('Good Evening!');
// }


// Switch Statement

// let role;
// switch (role) {
//     case 'guest':
//         console.log('Guest User');
//     case 'moderator':
//         console.log('Moderator User');
//         break;
//     case 'admin':
//         console.log('Admin User');
//         break;
//     default:
//         console.log('Unknown User');
// }

// if (role === 'guest') console.log('Guest User');
// if (role === 'moderator') console.log('Moderator User');
// else if (role === 'admin') console.log('Admin User');
// else console.log('Unknown User');


// Loops -> For, While, Do While, For In, For Of

// For Loop

// console.log('Hello World!');
// console.log('Hello World!');
// console.log('Hello World!');
// console.log('Hello World!');
// console.log('Hello World!');

// We can write the same code 5 times, but it is not efficient
// Instead of writing this 5 times, we can use a loop

// Here is the example of a for loop

// for (let i = 0; i < 5; i++) {
//     console.log('Hello World!', i + 1);
// }

// for (let i = 5; i >= 0; i--) {
//     if (i % 2 !== 0) {
//         console.log(i, 'is odd');
//     } else {
//         console.log(i, 'is even');
//     }
// }


// While Loop

// let i = 9;
// while (i <= 5) {
//     if (i % 2 !== 0) console.log(i, 'is odd');
//     i++;
// }


// Do While Loop

// let i = 9;

// do {
//     if (i % 2 !== 0) console.log(i, 'is odd');
//     i++;
// } while (i <= 5);


// Infinite Loop

// let i = 0;
// let condition = false; // Change this to true to create an infinite loop
// while (condition) {
//     console.log(i);
//     // if (i > 5) break; // to stop the infinite loop
// }

// Avoid infinite loops by ensuring the condition will eventually become false.


// For In Loop

// person = {
//     name: 'Hasanboy',
//     age: 19
// }
// // The for...in loop is used to iterate over the properties of an object
// for (let key in person) {
//     // console.log(key); // key is the property name
//     // console.log(person[key]); // value of the property
//     // console.log(`${key}: ${person[key]}`); // key: value

//     console.log(person.key); // This will not work, key is a variable, not a string
//     console.log(person[key]); // This will work, key is a variable that holds the property name

// }

// // Dot Notation
// console.log(person.name); // Hasanboy

// // Bracket Notation
// console.log(person['age']); // 19

// const colors = ['red', 'green', 'blue'];

// for(let index in colors)
// console.log(index, colors[index]); // index is the index of the array, colors[index] is the value at that index


// For Of Loop

// The for...of loop is used to iterate over iterable objects like arrays, strings, etc

// const colors = ['red', 'green', 'blue'];
// for (let color of colors) {
//     console.log(color); // color is the value of the array
// }

// Break and Continue Statements
// Break statement is used to exit a loop prematurely
// Continue statement is used to skip the current iteration and continue with the next one

// let i = 0;
// while (i <= 10) {
//     // if (i === 5) {
//     //     break; // Exit the loop when i is 5
//     // }

//     if (i % 2 === 0) {
//         i++; // Skip the even numbers
//         continue; // Skip the rest of the loop and continue with the next iteration
//     }
//     console.log(i);
//     i++;
// }


// Exercise

// (1) function sumOfTwo(a, b) {
//     return a + b;
// }

// function max(a, b) {
//     // if (a > b) return a;
//     // return b;
//     return (a > b) ? a : b;
// }

// console.log(sumOfTwo(5, 10)); // 15

// console.log(max(21, 5));


// (2) function isLandscape(width, height) {

//     return (width > height) ? 'Landscape' : 'Portrait';
// }

// console.log(isLandscape(700, 500));

// (3)

// let output = fizzBuzz(12) // true is not a number, so it should return 'Not a number'
// console.log(output); // Not a number

// function fizzBuzz(input) {
//     if (typeof (input) !== 'number') {
//         return 'Not a number';
//     } else {
//         if (input % 3 === 0 && input % 5 === 0) {
//             return 'FizzBuzz';

//         } else if (input % 3 === 0) {
//             return 'Fizz';

//         } else if (input % 5 === 0) {
//             return 'Buzz';

//         } else {
//             return input;
//         }
//     }
// }

// (4)

// checkSpeed(75) // 12 points

// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const speedLimitPoints = 5;
//     if (speed < speedLimit + speedLimitPoints) {
//         console.log('Ok');
//         return;
//     } else {
//         let points = Math.floor((speed - 70) / speedLimitPoints)
//         if (points >= 12) {
//             console.log('Your licence suspended');
//         } else {
//             console.log(`You have: ${points} points!`);
//         }
//     }
// }

// (5)
// showNumbers(10)

// function showNumbers(limit) {
//     for (let i = 0; i <= limit; i++) console.log(i, i % 2 == 0 ? 'Even' : 'Odd');
// }


// (6)
// countTruthy([0, null, undefined, '', 'Hello World',2, 3, 4])

// function countTruthy(array) {
//     let count = 0;
//     for (let value of array) {
//         if (value) count++;
//     }
//     console.log(count);
// }


// (7)

// const movie = {
//     title: 'Avatar',
//     releaseYear: 2009,
//     rating: 8.0,
//     director: 'James Cameron',
// }
// showProperties(movie)

// function showProperties(obj) {
//     for (let key in obj) {
//         if (typeof (obj[key]) === 'string') console.log(`${key}:`, obj[key]);
//         }
// }


// (8)

// console.log(sum(5));
// // Multy to 3: 3, 6, 9, 12, 15
// // Multy to 5: 5, 10, 15

// function sum(limit) {
//     let box = 0;

//     for (let i = 0; i <= limit; i++) {
//         if (i % 3 == 0) box = box + i;
//         if (i % 5 == 0) box = box + i;
//     }

//     return box;
// }


// (9)
// const marks = [100];

// // 1-59: F
// // 60-69: D
// // 70-79: C
// // 80-89: B
// // 90-100: A
// function calculateGrade(marks) {
//     let box = 0;
//     for (let points of marks) {
//         box += points;
//     }
//     let avarageMark = Math.floor(box / marks.length);
//     if (avarageMark <= 59) {
//         return 'F';
//     } else if (avarageMark >= 60 && avarageMark <= 69) {
//         return 'D';
//     } else if (avarageMark >= 70 && avarageMark <= 79) {
//         return 'C';
//     } else if (avarageMark >= 80 && avarageMark <= 89) {
//         return 'B';
//     } else if (avarageMark >= 90 && avarageMark <= 100) {
//         return 'A';
//     }
// }
// console.log(calculateGrade(marks)); // A


// (10)
// showStars(3);

// function showStars(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let patter = '';
//         // console.log('*'.repeat(i)); // Using repeat method to print stars
//         for (let k = 0; k < i; k++) {
//             patter += '*'; // Concatenating stars to the pattern string
//         }
//         console.log(patter); // Printing the final pattern
//     }

// }


// (11)
// showPrimes(100)

// function showPrimes(limit) {
//     for (let number = 2; number <= limit; number++) {
//         let isPrime = true;
//         for (let factor = 2; factor < number; factor++) {
//             if (number % factor === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) console.log(number);
//     }
// }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// THIS IS THE END OF SECTION CONTROL FLOW
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>