// Arrays

// Adding Elements

// const numbers = [3, 4];


// // End
// numbers.push(5, 6)

// console.log(numbers);

// // Beginning
// numbers.unshift(1, 2)

// console.log(numbers);

// // Middle

// numbers.splice(2, 0, 'a', 'b')

// console.log(numbers);



// Finding Elements

// Primitive Arrays

// const numbers = [1, 2, 3, 4];


// console.log(numbers.indexOf(2)); // Type matter, if i pass '1', it returns -1 so that means it's false

// let's think we have 2 same variable, inder order to find lastest one, we use lastIndexOf() -> Method. Here is example


// const numbers = [1, 2, 3, 4, 5, 6, 7, 2, 3, 1]

// console.log(numbers.lastIndexOf(1)); // it's 9

// const numbers = [1, 2, 3, 4, 5, 6, 7]

// console.log(numbers.includes(5)); // true, number 5 includes


// When we use indexOf() -> here we can pass 2 values, that means indexOf(1 - the thing that should find, second value is -> the start index)

// console.log(numbers.indexOf(2, 4)); // it start finding from the 4 index



// Finding elements (reference types)

// let courses = [{
//         id: 1,
//         name: 'a'
//     },
//     {
//         id: 2,
//         name: 'b'
//     }
// ];

// console.log(
//     courses.includes({
//         id: 1,
//         name: 'a'
//     })
// );

// const course = courses.find(function (course) {
//     return course.name === 'a'
// })

// const courseIndex = courses.findIndex(function (course) {
//     return course.name === 'a'
// })

// console.log(course);

// console.log(courseIndex);



// Arrow Function

// const course = courses.findIndex(course => course.name === 'a')

// console.log(course);



// Removing Elements

// const numbers = [1, 2, 3, 4]

// console.log(numbers);

// // End
// const last = numbers.pop()

// console.log(last);

// // Beginning

// const first = numbers.shift()

// console.log(first);

// Middle

// const middle = numbers.splice(1, 1)

// console.log(numbers); // [1, 3, 4]



// Emptying an Arrays


// Solution 1
// const numbers = [1, 2, 3, 4]
// let another = numbers;
// numbers = []


// Solution 2
// numbers.length = 0 => the best way


// Solution 3
// numbers.splice(0, numbers.length)


// Solution 4
// while (numbers.length > 0) {
//     numbers.pop()
// }
// console.log(another);
// console.log(numbers);


// Combining Arrays

// const first = [{
//     id: 1
// }]
// const second = [4, 5, 6]

// let combined = first.concat(second)
// // if we go to the first array, we get reference type, if we pass the object
// let sliced = combined.slice(2, 4)
// let sliced_1 = combined.slice(2) // slicing it from 2 index
// let sliced_2 = combined.slice() // copying fully
// // If we use primitive types, it copies from value, if reference type, it copies by its reference

// // console.log(first);
// // console.log(second);

// console.log(combined);
// console.log(sliced);


// the Spread Operator

// const first = [1, 2, 3]

// const second = [4, 5, 6]

// const combined = [...first, 'a', ...second, 'b']

// console.log(combined);


// Iterating an Array


// In order to iterate array, we use for...of

// const numbers = [1, 2, 3]

// for (let number of numbers) {
//     console.log(number);
// }

// numbers.forEach((number, index) => console.log(index, number))




// Joining Arrays

// const numbers = [1, 2, 3]

// const joined = numbers.join(', ')

// console.log(joined);



// const message = 'This is my first message';

// const parts = message.split(' ')

// console.log(parts);

// const combined = parts.join('-')

// console.log(combined);



// Sorting Arrays

// const numbers = [2, 3, 1]

// console.log(numbers);
// numbers.sort()

// console.log(numbers);


// numbers.reverse()

// console.log(numbers);


const cources = [{
        id: 1,
        name: 'Node.js'
    },
    {
        id: 2,
        name: 'JavaScript'
    }
]

const numbers = [50, 30, 20, 11, 15]
const sorted = numbers.sort((a, b) => a - b);

cources.sort(function (a, b) {

    // a < b => -1
    // a > b => 1
    // a === b => 0
    
    let nameA = a.name.toLowerCase()
    let nameB = b.name.toLowerCase()

    if (nameA < nameB) return -1;
})

console.log(cources);

console.log(sorted);