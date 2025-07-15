// Variables

// let name = 'david';
// console.log('Hello World!');


// let person = {
//     name: 'Hasanboy',
//     age: 19
// }
// // Dot Notation
// person.name = 'John';

// // Bracket Notation - if the user wants to select it
// // Its dynamic
// let selection = 'name';
// person[selection] = 'Mary';
// console.log(person.name);

// Arrays

// let selectedColors = ['red', 'blue', 'green'];
// selectedColors[3] = 1;
// // Length is dynamic
// console.log(selectedColors);

// // if u want to acces to array element, it starts with 0 to n
// console.log(selectedColors[0]); // red

// console.log(selectedColors.length); // 4


// Functions

// Performing function
// function greet(name, age, lastName) { // using paramatres
//     console.log('Hello ' + name + " " + lastName + `\nYou are ${age} years old`);
// }

// // Calculating function
// function square(number) {
//     return number * number;
// }

// greet('Hassen', 19, 'Zaffar'); // calling function + 'John' is the argument, not the parametr
// greet('Mary', 16, 'Smith')

// let number = square(2);
// console.log(number); // 4

// console.log(square(4)); // 16


// Operators

// Operators

// arithmetic, assignment, comprasion, logical, bitwise


// arithmetic

// let x = 10;
// let y = 3;

// // console.log(x + y);
// // console.log(x - y);
// // console.log(x / y);
// // console.log(x * y);
// // console.log(x % y);
// // console.log(x ** y);

// // Increment (++)
// console.log(x++);
// console.log(++x);


// // Decrement
// console.log(x--);
// console.log(x);



// // assignment

// let a = 10;
// a++; // 10 + 1 = 1
// a = a + 1; // 11 + 1 = 11
// a += 1; // 12 + 1 = 13

// // if we want to use math, we use

// a *= 2; // 13 * 2 = 26
// console.log(a);


// // comparision

// let b = 1;

// // relational
// console.log('------------------');
// console.log(b > 0); // true
// console.log(b >= 1); // true
// console.log(b < 1); // false
// console.log(b <= 1); // true

// // equality
// console.log('------------------');
// console.log(b === 1);
// console.log(b !== 1);


// console.log('------------------');

// // Strict equality operator
// console.log(1 === 1); // they must be equal to value and type

// // Strict equality operator
// console.log(1 == 1); // true
// console.log(1 == '1'); // true
// console.log(true == 1); // true, cuz 1 is true number
// console.log(true == 0); // false, cuz 0 is false number

// console.log('------------------');

// // Ternary operators

// let points = 90;
// let type = points > 100 ? 'gold' : 'silver';

// console.log(type);

// console.log('------------------');

// // Logical operator

// // logical AND (&&)
// // returns TRUE if both operands are TRUE
// console.log(true && true); // true
// console.log(true && false); // false


// console.log('------------------');

// // Logical OR (||)
// // returns TRUE if one of the operands is TRUE
// let highIncome = true;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore;

// console.log('Eligible', eligibleForLoan);
// console.log('------------------');

// // NOT (!)
// let applicationRefused = !eligibleForLoan;
// console.log('Application Refused', applicationRefused);


// Bitwise operators

// Bitwise operators work on bits and perform bit-by-bit operation

// 1 = 00000001
// 2 = 00000010
// result = 00000011 Bitwise OR
// result = 00000000 Bitwise AND

// console.log(1 | 2); // 00000011 = 3 // Bitwise OR
// console.log(1 & 2); // 00000000 = 0 // Bitwise AND


// // Read, Write, Execute
// // 00000100
// // 00000010
// // 00000001

// let readPermission = 4; // 00000100
// let writePermission = 2; // 00000010
// let executePermission = 1; // 00000001

// let myPermissions = 0; // 00000000

// myPermissions = myPermissions | readPermission | writePermission; // 00000110
// console.log(myPermissions); // 6

// let message = (myPermissions & readPermission) ? 'yes' : 'no';
// console.log(message); // yes


// Operator Precedence

// let x = (2 + 3) * 4; // 2 + 12 = 14 or 5 * 4 = 20
// console.log(x); // 14 or 20

// Exercise

// let a = 'red';
// let b = 'blue';
// let swap = a
// a = b;
// b = swap;
// console.log(a);
// console.log(b);



// HERE IS THE END OF SECTION OPERATORS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


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

let output = fizzBuzz(20) // true is not a number, so it should return 'Not a number'
console.log(output); // Not a number    

function fizzBuzz(input) {
    if (typeof (input) !== 'number') {
        return 'Not a number';
    } else {
        if (input % 3 === 0 && input % 5 === 0) {
            return 'FizzBuzz';

        } else {
            return input;
        }
        if (input % 3 === 0) {
            return 'Fizz';

        }
        if (input % 5 === 0) {
            return 'Buzz';

        }
    }
}