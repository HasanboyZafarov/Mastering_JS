// let num = 11;
// let str = "11";
// let str2 = "eleven";
// let isPresent = true;
// let firstName = "Frodo";
// let lastName = "Baggins";
// let und = undefined;
// let notanumber = NaN;
// let nullValue = null;


// console.log(num + str); // 1111
// console.log(num + str2); // 11eleven
// console.log(num + isPresent); // 12
// console.log(str + isPresent); // 11true
// console.log(firstName + " " + lastName); // Frodo Baggins
// console.log(num + firstName); // NaN (Not a Number)
// console.log(num + und); // NaN
// console.log(num + notanumber); // NaN
// console.log(num + nullValue); // 11 (null is treated as 0 in arithmetic operations)
// console.log(str + und); // "11undefined"
// console.log(str + notanumber); // "11NaN"
// console.log(str + nullValue); // "11null"
// console.log(str2 + isPresent); // "eleventrue"
// console.log(str2 + und); // "elevenundefined"
// console.log(str2 + notanumber); // "elevenNaN"
// console.log(str2 + nullValue); // "elevennull"
// console.log(und + notanumber); // NaN
// console.log(und + nullValue); // NaN
// console.log(notanumber + nullValue); // NaN

// console.log(num * nullValue); // 0 (null is treated as 0 in multiplication)

// let a = 1;
// let b = 2;
// a + b, a - b, a * b, a / b, a % b find the answers

// a + b // 2
// a - b // -1
// a * b // 2
// a - b // 0.5
// a % b // 1


// let x = 7;
// x += 3; // 10
// x *= 2; // 14
// // find latest x value



// let num = 10;
// let str = "10";

// // Find the answers True/False
// num == str // true
// num === str // false
// num != str // false
// num !== str // true



// let age = 20;
// let status = (age >= 18) ? "Adult" : "Teen"; // Adult, we get true


// let a = true;
// let b = false;

// // Find the answers
// a && b // false
// a || b // true
// !a // false

// 00000001 - 1
// 00000010 - 2
// 00000011 - 3
// 00000100 - 4

// let a = 5;  // 0101
// let b = 3;  // 0011

// Find the answers:
// a & b
// a | b
// a ^ b

// I couldn't do it, i really need to recap the bitwise

// let name = null;
// let userName = name ?? "Guest"; // Guest

// what's the value of userName

// let x = 5;
// let y = x++; // 5
// let z = ++x; // 7


// y va z qiymatlari nima bo‘ladi?


// let score = 75;
// let grade = score >= 90 ? "A" :
//             score >= 80 ? "B" :
//             score >= 70 ? "C" : "F"; // C

// What's the grade ?


// function log() {
//   console.log('working');
//   return true;
// }

// let result = false && log();   // False
// What's on console ?

// let user = {
//   name: "Ali",
//   address: {
//     city: "Tashkent"
//   }
// };

// let street = user.address?.street; // its undefined, but i dont know why
// What's the value of street ?



// let a = 5;
// let b = a++ + ++a + a; // 19

// Find the value of b
// 000000001 - 1
// 000000010 - 2
// 000000011 - 3
// 000000100 - 4
// 000000101 - 5
// 000000110 - 6
// 000000111 - 7


// let a = 6; // 0110
// let b = 3; // 0011

// // find the results:
// let andResult = a & b; // 2
// let orResult = a | b; // 7
// let xorResult = a ^ b; // 5

// let day = 2;

// switch (day) {
//   case 1:
//     console.log("M");
//   case 2:
//     console.log("W");
//   case 3:
//     console.log("Th");
//     break;
//   default:
//     console.log("Undefined day");
// }

// outerLoop: for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         if (i === 2 && j === 2) break outerLoop;
//         console.log(`i=${i}, j=${j}`);
//     }
// }

// try {
//     let a = b + 1
// } catch (error) {
//     console.log('Xatolik yuz berdi: ', error.message);
// }


// function division(a, b) {
//     if (b === 0) {
//         throw new Error(`Bo'luvchi nol bo'lishi mumkin emas!`);
//     }
//     return a / b;
// }

// try {
//     let result = division(12, 0);
//     console.log('Natija: ', result);
// } catch (error) {
//     console.log('Xato:', error.message);
// }