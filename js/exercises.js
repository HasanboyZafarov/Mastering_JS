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

// (1)
// function divide(a, b) {
//     // TODO: Agar b nol bo‘lsa, "Nolga bo‘lish mumkin emas" degan xatolikni throw qiling
//     // Aks holda, a / b qaytaring

//     if (a === 0 || b === 0) {
//         throw new Error("Nolga bo‘lish mumkin emas");
//     }
//     return a / b;
// }

// try {
//     let result = divide(10, 0)
//     console.log('Natija:', result);

// } catch (error) {
//     console.log('Xato:', error.message);

// }

// (2)
// function greet(name) {
//     // TODO: Agar name bo‘sh yoki undefined bo‘lsa, "Ism kiritilmadi" xatosini ot
//     // Aks holda, `console.log("Salom, " + name)`
//     if (name == undefined) {
//         throw new Error('Ism kiritilmadi!');
//     }
//     return name
// }

// try {
//     console.log('Hello!', greet('Hasanboy'));

// } catch (error) {
//     console.log(error.message);
// }


// (3)
// TODO: greet() funksiyasini name = null bilan chaqiring
// try/catch blokida uni ushlab, console.log orqali xato matnini chiqaring

// function greet(name) {
//     if (name == null) {
//         throw new Error("Name can't be Null");
//     }
//     return name
// }
// try {
//     console.log(greet(null));

// } catch (error) {
//     console.log(error.message);
// }

// (4)
// function checkPassword(pw) {
//     // TODO: Parol uzunligi 8 tadan kam bo‘lsa, throw new Error("Parol juda qisqa")
//     // Aks holda: "Parol qabul qilindi" ni qaytaring
//     if (pw.length < 8) {
//         throw new Error("Password is short");
//     }
//     return 'Good';
// }

// try {
//     console.log(checkPassword('12345678'));

// } catch (error) {
//     console.log(error.message)
// }


// (5)
// TODO: JSON.parse(data) bilan ishlang, try/catch orqali xatoni ushlang

// let data = '{name: "Ali"}'; // Bu noto‘g‘ri JSON
// try {
//     JSON.parse(data)
//     throw new Error('Wrong object model');
// } catch (error) {
//     console.log(error.message);
// }


// // (6)
// function square(n) {
//     // TODO: Agar n raqam bo‘lmasa, throw new Error("Faqat raqam kiriting")
//     // Aks holda, n * n qaytaring
//     if (typeof n !== 'number') {
//         throw new Error('N is not a Number');
//     }
//     return n * n
// }

// try {
//     console.log(square(5));
// } catch (error) {
//     console.log(error.message);
// }

// (7)
// try {
//     throw new Error("Bu xatolik")
// } catch (e) {
//     console.log("Xatolik ushlanib olindi:", e.message);
// }

// TODO: Bu qatorda "Dastur davom etmoqda..." chiqishi kerak


// // (8)
// try {
//     // throw new Error("Qandaydir xatolik")
// } catch (e) {
//     console.log("Xato:", e.message);
// } finally {
//     // TODO: Har doim ishlaydigan qator yozing (masalan: "Tugatildi")
// }


// // (9)
// function validateUser(user) {
//     // TODO: Agar user.name va user.age mavjud bo‘lmasa, xato oting
//     // Aks holda, "Foydalanuvchi to‘g‘ri" deb qaytaring
// }


// (10)

// function customThrow() {
//   // TODO: `throw { code: 403, message: "Taqiqlangan" }`
//   // try/catch orqali uni tuting va kodini, message'ini chiqaring
// }


// function validateUser(user) {
//     if (!user.name || !user.age) {
//         throw new Error("Wrong object!");

//     }
//     return 'Working!'
// }

// try {
//     user = {
//         name: 'Hasanboy',
//     };
//     console.log(validateUser(user));


// } catch (error) {
//     console.log(error.message);

// }

// (1)
// Create a function called helloWorld that returns the string "Hello, world!"

// function helloWorld() {
//     console.log('Hello World!');

// }
// helloWorld();

// (2)
// Create a function square that returns the square of a given number.

// function square(n) {
//     return n * n
// }

// console.log(square(4));


// (3)
// Create a function sum that takes two numbers and returns their sum.

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(5, 4));


// (4)
// Create an arrow function greet that takes a name and returns a greeting like "Hello, [name]".

// let name = prompt('Your name?')

// function greet(name) {
//     return `Hello ${name}`
// }
// console.log(greet(name));


// (5)
// Create a function isEvenOrOdd that returns "Even" if the number is even, otherwise "Odd".

// function isEvenOrOdd(n) {
//     if (n % 2 == 0) return 'Even'
//     return 'Odd'
// }

// console.log(isEvenOrOdd(7));


// (6)
// Create a function min that returns the smaller of two numbers.
// function backMin(a, b) {
//     if (a > b) return a
//     return b
// }

// console.log(backMin(10, 11));


// (7)
// Create a function count which includes a nested function plusOne that adds 1 to the input number.

// function countFunc(n) {
//     function plusOne(x) {
//         return x + 1
//     }
//     return plusOne(n);
// }

// let one = countFunc(0) // 1
// let another = countFunc(5) // 6

// console.log(one);
// console.log(another);




// (8)
// Create a function called multiplyArray that takes an array of numbers and returns the result of multiplying all elements together.

// function multiplyArray(arr) {
//     let box = 1; // so that, if we write 0, we cant actually multiply 0 to other numbers
//     for (let number of arr) {
//         console.log(number);
//         box *= number;
//     }
//     return box;
// }
// let array = [1, 2, 3, 4]

// console.log(multiplyArray(array));


// Example:
// multiplyArray([1, 2, 3, 4]) → 24

// (9)
// Create a function isEven that takes a number and returns true if it’s even, otherwise false.


// function isEven(n) {
//     return n % 2 == 0 ? true : false
// }
// console.log(isEven(7));

// (10)
// Create a function capitalize that takes a string and returns it with the first letter capitalized.
// function firstCap(string) {
//     let index = 0;
//     let objStr = [];
//     for (let letter of string) {
//         if (index == 0) {
//             objStr.push(letter.toUpperCase())
//         } else {
//             objStr.push(letter)
//         }
//         index++
//     }
//     let newStr = '';
//     return newStr = objStr.join('');
// }
// console.log(firstCap('hasanboy'));


// (11)
// Create a function reverseString that takes a string and returns it reversed.

// function reverseStr(string) {
//     let reversed = string.split('').reverse().join('');
//     return reversed
// }

// console.log(reverseStr('Hello World!'));

// (12)
// Write a function findMax that takes an array of numbers and returns the largest one.

// function findMax(arr) {
//     let box = 0;
//     for (let nums = 0; nums < arr.length; nums++) {
//         if (arr[nums] > box) {
//             box = arr[nums]
//         }
//     }
//     return box;
// }

// let array = [45, 2, 46, 4]
// console.log(findMax(array));



// (13)
// Create a function countVowels that takes a string and returns the number of vowels (a, e, i, o, u).

// function countVowels(text) {

//     let a = 0;
//     let e = 0;
//     let i = 0;
//     let o = 0;
//     let u = 0;
//     for (let letter of text) {
//         switch (letter) {
//             case 'a':
//                 a++
//                 break;
//             case 'e':
//                 e++
//                 break;
//             case 'i':
//                 i++
//                 break;
//             case 'o':
//                 o++
//                 break;
//             case 'u':
//                 u++
//                 break;
//         }
//     }
//     console.log(text);

//     console.log(`A: ${a}\nE: ${e}\nI: ${i}\nO: ${o}\nU: ${u}`);
// }
// countVowels('Hello World')

// (14)
// Create a function isPalindrome that takes a string and returns true if it’s a palindrome (reads the same forward and backward), otherwise false.


// function isPalindrome(string) {
//     let right = string.length
//     for (let left = 0; left < string.length; left++) {
//         right--
//         if (string[left].toLowerCase() != string[right].toLowerCase()) {
//             return 'is not palindrome!'
//         }
//     }
//     return 'is palindrome!'
// }

// console.log(isPalindrome('check')); // is not palindrome!


// (15)
// Write a function removeDuplicates that takes an array and returns a new array with duplicates removed.

// let arr = [1, 2, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 5]
// let removeDups = []
// for (let i = 0; i < arr.length; i++) {
//     if (!removeDups.includes(arr[i])) {
//         removeDups.push(arr[i]);
//     }
// }

// console.log(removeDups);





// Object Exercises


// const address = {
//     street: 'Beshkoprik',
//     city: 'Tashkent',
//     zipCode: '123456',
// }

// function showAddress(address) {
//     for (let key in address)
//         console.log(`${key}: ${address[key]}`);
// }

// showAddress(address)


// function createAddress(street, city, zipCode) {
//     return {
//         street: street,
//         city: city,
//         zipCode: zipCode
//     }
// }

// const firstAdd = createAddress('Toshtemir', 'Buxoro', 1234)

// console.log(firstAdd);


function CreateAddress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

// const anotherAdd = new createAddress('Teshavoy', 'Andijon', 576)

// console.log(anotherAdd);



// let address1 = new CreateAddress('a', 'b', 'c')
// // let address2 = new CreateAddress('a', 'b', 'c')
// let address2 = address1

// function areEqual(address1, address2) {
//     for (let key in address1)
//         return address1[key] == address2[key]
// }

// function areSame(address1, address2) {
//     return address1 === address2
// }
// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));




// title
// body
// author
// views
// comments - (author, body)
// isLive

// const myBlog = {
//     title: 'Here is the new vocabs!',
//     body: 'Here is some lorem about course',
//     author: 'Hasanboy',
//     views: 100,
//     comments: [{
//         author: 'a',
//         body: 'b'
//     }, {
//         author: 'c',
//         body: 'd'
//     }],
//     isLive: true
// }

// console.log(myBlog);


// function BlogPost(title, body, author, views, comments, isLive) {
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = views;
//     this.comments = comments;
//     this.isLive = true
//     this.isPublished = false
// }


// const draft1 = new BlogPost('New post', 'This is Draft', 'Hasanboy', 99, [{
//     author: 'a',
//     body: 'b'
// }, {
//     author: 'c',
//     body: 'd'
//     }]);

// draft1.isPublished = true;
// console.log(draft1);


// let priceRanges = [{
//     label: '$',
//     tooltip: 'Inexpensive',
//     minPerPerson: 0,
//     maxPerPerson: 10,
// }, {
//     label: '$$',
//     tooltip: 'Moderate',
//     minPerPerson: 11,
//     maxPerPerson: 20,
// }, {
//     label: '$$$',
//     tooltip: 'Expensive',
//     minPerPerson: 21,
//     maxPerPerson: 50,
// }]


// Arrays


// arrayFromRange

// let numbers = arrayFromRange(-10, 5)

// function arrayFromRange(min, max) {
//     let array = []
//     for (let i = min; i <= max; i++) array.push(i)
//     return array
// }

// console.log(numbers);


// Includes - function

// let array = [1, 2, 3, 4, 42, 42, 442, 4, 324, 2, 432, 4, 24, 3, 24, 2, 42, 3, 4, 21, 2, 1, 31, 32, 14, 24, 5]

// let result = include(array,5)

// function include(array, searchElement) {
//     for (let key of array)
//         if (searchElement == key) return true
//     return false
// }

// console.log(result);




// Exclude - function

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const output = except(numbers, [1, 2, 7, 9])

// function except(array, excluded) {
//     let new_arr = []

//     for (let num of numbers) {
//         if (!excluded.includes(num)) new_arr.push(num)
//     }
//     return new_arr
// }

// console.log(output);



// Offset function

// const numbers = [1, 2, 3, 4, 5]
// const output = move(numbers, 2, -2)

// function move(array, index, offset) {
//     const position = index + offset;
//     if (position >= array.length) {
//         console.error('Invailid Offset');
//         return;
//     }

//     const output = [...array]
//     const element = output.splice(index, 1)[0]
//     output.splice(position, 0, element)

//     return output;

// }

// console.log(output);


// Count Occurrences Function with Reduce


// const numbers = [5, 2, 2, 3, 4, 5, 6, 1]
// const count = countOccurrences(numbers, 1)

// function countOccurrences(array, searchElement) {
//     // let box = 0;
//     // for (let n = 0; n < array.length; n++)
//     //     if (array[n] == searchElement) box++
//     // return box

//     return array.reduce((accumulator, current) => {
//         const occurence = (current == searchElement) ? 1 : 0;
//         console.log(accumulator, current, searchElement);

//         return accumulator + occurence
//     }, 0)
// }


// console.log(count);




// Get Max

// const numbers = [5, 2, 100, 3, 4, 5, 6, 1, 21, 5125, 1, 512, 51, 5, 21, 512, 51, 9999]
// const max = getMax(numbers)

// console.log(max);


// function getMax(array) {
//     if (array.length === 0) return undefined;
//     return array.reduce((acc, current) => (acc > current) ? acc : current)
// }

// let box = array[0];
// array.reduce((acc, current) => {
//     current >= box ? box = current : box += 0;
//     return acc + current
// }, 0)
// return box



// Movies

// const movies = [{
//         title: 'a',
//         year: 2018,
//         rating: 4.5
//     },
//     {
//         title: 'b',
//         year: 2018,
//         rating: 4.7
//     },
//     {
//         title: 'c',
//         year: 2018,
//         rating: 3
//     },
//     {
//         title: 'd',
//         year: 2017,
//         rating: 4.5
//     }
// ]

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title


// const titles = movies
//     .filter(movie => movie.year === 2018 && movie.rating >= 4)
//     .sort((a, b) => a.rating - b.rating)
//     .reverse()
//     .map(movie => movie.title)

// console.log(titles);




// Beginner Lvl Tasks

// Create an array of 5 numbers and log it.

// let array = [1, 2, 3, 4, 5]

// console.log(array);


// Add a new element to the end of the array.

// let array = [1, 2, 3, 4, 5]

// array.push(6)

// console.log(array);


// Add a new element to the beginning of the array.

// let array = [2, 3, 4, 5, 6]

// array.unshift(1)

// console.log(array);


// Remove the last element from the array.

// let array = [1, 2, 3, 4, 5]

// array.pop()

// console.log(array);


// Remove the first element from the array.

// let array = [1, 2, 3, 4, 5]

// array.shift()

// console.log(array);


// Find the length of the array.

// let array = [1, 2, 3, 4, 5]

// console.log(array.length);


// Access the third element of the array.

// let array = [1, 2, 3, 4, 5]

// console.log(array[2]);


// Change the value of the second element.

// let array = [1, 2, 3, 4, 5]

// array[1] = 5

// console.log(array);


// Check if a certain element exists in the array.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(array.includes(7));


// Loop through the array and log each element.

// let array = [1, 2, 3, 4, 5, 6, 7, 8]

// for (let num of array) {
//     console.log(num);
// }



// Intermediate LVL Tasks

// Find the sum of all numbers in an array.

// let array = [1, 2, 3]

// const newVal = array.reduce((accumulator, current) => {
//     return accumulator + current
// }, 0)

// console.log(newVal);


// Create a new array with all elements doubled.

// let array = [1, 2, 3, 4, 5]

// let new_array = array.map(num => num * 2)
// console.log(new_array);


// Filter out numbers greater than 10.

// let array = [1, 2, 3, 11, 22, 33]

// const filtered_Arr = array.filter(num => num > 10)

// console.log(filtered_Arr) ;


// Sort an array of numbers in ascending order.

// let arr = [1, 3, 7, 2, 4, 6, 5]
// const sorted = arr.sort((a, b) => a - b)
// console.log(sorted);

// Reverse an array.

// let arr = [1, 2, 3, 4, 5]

// arr.reverse()
// console.log(arr);


// Find the maximum number in an array.

// let arr = [2, 3, 4, 5, 10, 1, 7]

// let max = arr.reduce((acc, current) => (acc > current) ? acc : current)

// console.log(max);


// Find the minimum number in an array.

// let arr = [2, 3, 4, 5, 10, 1, 7, -9]

// let min = arr.reduce((acc, current) => (acc > current) ? current : acc)

// console.log(min);


// Merge two arrays into one.

// let first_arr = [1, 2, 3]
// let second_arr = [4, 5, 6]

// let new_arr = [...first_arr, ...second_arr]

// console.log(new_arr);


// Remove duplicates from an array.

// let arr = [1, 2, 3, 2, 5, 8, 4, 4, 4]

// function removeDups(arr) {
//     let new_Array = []

//     for (let key of arr)
//         if (!new_Array.includes(key))
//             new_Array.push(key)

//     return new_Array;
// }

// console.log(removeDups(arr));




// Create a new array of only even numbers.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let evenNums = numbers.filter(num => num % 2 === 0)

// console.log(evenNums);



// 2. Create a new array where each number is squared
// Input: [1, 2, 3, 4] → Output: [1, 4, 9, 16]

// let numbers = [1, 2, 3, 4, 5]
// let result_Arr = numbers.map(num => num * num)

// console.log(result_Arr);


// 4. Sort an array of strings alphabetically
// Input: ['banana', 'apple', 'cherry'] → Output: ['apple', 'banana', 'cherry']

// let sort = ['banana', 'apple', 'cherry']
// let sorted = sort.sort()

// console.log(sorted);

// let cities = ['Ярославль', 'Москва', 'Архангельск']

// cities.sort((a, b) => a.localeCompare(b, 'ru'))

// console.log(cities);


// 6. Calculate the sum of all numbers using .reduce()
// Input: [1, 2, 3, 4] → Output: 10

// let numbers = [1, 2, 3, 4]

// let new_Arr = numbers.reduce((acc, current) => acc + current, 0)

// console.log(new_Arr);


// 9. Check if at least one element is divisible by 3
// Input: [2, 4, 7, 9] → Output: true (because 9 is divisible by 3)
// let arr = [2, 4, 7, 9]
//     .map(num => num % 3 == 0)
//     .filter(item => item == true)[0]

// console.log(arr);


// 10. Merge two arrays and remove duplicates
// Input: [1, 2, 3], [3, 4, 5] → Output: [1, 2, 3, 4, 5]


// let first_Arr = [1, 2, 3, 3, 5]
// let second_Arr = [3, 4, 5]

// function mergeTwo(first, second) {
//     const merged_Arr = [...first]
//     for (let key of second) {
//         if (!first.includes(key)) {
//             merged_Arr.push(key)
//         }
//     }
//     return merged_Arr;
// }

// console.log(mergeTwo(first_Arr, second_Arr));



// 11. Удвоить только чётные числа
// Input: [1, 2, 3, 4] → Output: [1, 4, 3, 8]

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function returnDouble(array) {
//     let new_Arr = array.map(num => num % 2 == 0 ? num * 2 : num)
//     return new_Arr
// }
// console.log(returnDouble(numbers));


// 12. Найти индекс первого элемента, больше 10
// Input: [4, 9, 15, 2] → Output: 2

// let numbers = [1, 2, 0, 0, 10]

// function findTen(array) {
//     for (let key = 0; key < array.length; key++) {
//         if (array[key] >= 10) {
//             return key
//         }
//     }
// }


// console.log(findTen(numbers));


// 13. Преобразовать массив строк в один текст через запятую
// Input: ['apple', 'banana', 'cherry'] → Output: 'apple,banana,cherry'

// let fruits = ['apple', 'banana', 'cherry'];
// let str = fruits.join(',')

// console.log(str);


// 14. Найти среднее значение всех чисел в массиве
// Input: [2, 4, 6, 8] → Output: 5

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let box = 0
// for (let num of nums) {
//     box += num
// }
// console.log(box / nums.length);

// 15. Отсортировать массив объектов по значению свойства
// Input: [{name: 'Alex', age: 22}, {name: 'Ivan', age: 19}]
// Output: [{name: 'Ivan', age: 19}, {name: 'Alex', age: 22}]

// let users = [{
//     name: 'Alex',
//     age: 22
// }, {
//     name: 'Ivan',
//     age: 19
// }]

// let new_Arr = users.sort((a, b) => a.age - b.age)
// console.log(new_Arr);


// 1. Reverse an array without using .reverse()
// const originArr = [1, 2, 3, 4, 5];
// let reversedArr = []
// for (let key = originArr.length - 1; key >= 0; key--) {
//     reversedArr.push(originArr[key])
// }
// console.log(reversedArr);



// 2. Count how many times a specific value appears in an array
// const fruits = ['apple', 'banana', 'apple', 'orange', 'apple', 'banana'];
// // TODO: Count how many times 'apple' appears

// function countFrequence(array, string) {
//     let box = 0;
//     for (let key = 0; key < array.length; key++) {
//         if (array[key] == string) {
//             box++
//         }
//     }
//     return box
// }
// console.log(countFrequence(fruits, 'apple'));


// 3. Check if two arrays contain the same elements (regardless of order)
// const arrA = [1, 2, 3, 4];
// const arrB = [4, 3, 2, 1];

// const sortedA = [...arrA].sort()
// const sortedB = [...arrB].sort()


// function checkSame(srtdA, srtdB) {
//     for (let i = 0; i < sortedA.length; i++) {
//         if (sortedA[i] !== sortedB[i]) {
//             return false
//         }
//     }
//     return true
// }

// console.log(checkSame(sortedA, sortedB));


// TODO: Return true if they have the same elements, false otherwise

// 4. Remove all falsy values from an array
// const messyArray = [0, 'hello', false, null, 42, '', undefined, true];
// // TODO: Return a new array with only truthy values
// let new_Arr = []
// for (let key of messyArray) {
//     if (key) {
//         new_Arr.push(key)
//     }
// }

// console.log(new_Arr);

// 5. Sum all values in a 2D array
// const matrix = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];

// let sum = 0;
// for (let numbers of matrix) {
//     for (let num of numbers) {
//         sum += num
//     }
// }

// console.log(sum);

// TODO: Calculate the total sum of all numbers

// 6. Find the first non-repeating element in an array
// const letters = ['a', 'b', 'a', 'c', 'b', 'd'];
// const map = new Map()
// for (let letter of letters) {
//     if (map.has(letter)) {
//         map.set(letter, map.get(letter) + 1)
//     } else {
//         map.set(letter, 1)
//     }
// }
// for (let letter of letters) {
//     if (map.get(letter) === 1) {
//         console.log('Here is the letter: ', letter);
//         break
//     }
// }
// TODO: Find the first element that does not repeat

// 7. Merge two arrays and remove duplicates
// const x = [1, 2, 3];
// const y = [3, 4, 5];

// const merged = [...x, ...y]

// const unique = new Set(merged)


// const result = [...unique]

// console.log(result);




// TODO: Merge and return unique values

// 8. Filter out numbers less than 10
// const numbers = [5, 10, 15, 2, 20, 8];
// // TODO: Return array with only numbers >= 10

// let new_Arr = numbers.filter(num => num >= 10)

// console.log(new_Arr);


// Flatten a nested array (one level deep).

// Count the frequency of each element in an array.

// Find the second largest number in an array.

// Group array elements by type (e.g., numbers, strings, booleans).

// Rotate array elements to the right by 3 positions.

// Remove all falsy values from an array.

// Chunk an array into subarrays of length 3.

// Create a custom map function.

// Create a custom filter function.

// Use reduce to calculate the average of numbers.