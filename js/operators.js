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