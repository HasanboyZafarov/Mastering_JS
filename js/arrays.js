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


// const cources = [{
//         id: 1,
//         name: 'Node.js'
//     },
//     {
//         id: 2,
//         name: 'JavaScript'
//     }
// ]

// const numbers = [50, 30, 20, 11, 15]
// const sorted = numbers.sort((a, b) => a - b);

// cources.sort(function (a, b) {

// a < b => -1
// a > b => 1
// a === b => 0

//     let nameA = a.name.toLowerCase()
//     let nameB = b.name.toLowerCase()

//     if (nameA < nameB) return -1;
// })

// console.log(cources);

// console.log(sorted);


// Как работает sort()?
// Метод sort() в JavaScript сравнивает два элемента за раз — a и b.

// Функция сравнения должна возвращать:

// Отрицательное число (< 0) — если a должно быть перед b

// Положительное число (> 0) — если a должно быть после b

// 0 — если порядок не меняется





// Testing the elements of Array


// const numbers = [1, 0, 3, 1, 2, 3, 4]

// const allPositive = numbers.every(function (value) {
//     return value >= 0
// })

// every() - this call back function, it checks every element matches the criteria
// some() - this is also call back function, but it checks if it there, like it works same as LOGICAL OR - || - like this

// console.log(allPositive);


// Filtering an Array


// const numbers = [1, 2, -1, 3, 4, 5]

// let filtered = numbers.filter(n => n >= 0)


// console.log(filtered); // [1, 2, 3, 4, 5] - Here, the filter() - method -> deleted the -1


// Mapping an Array


// let numbers = [1, 2, 3, 4, 5]

// const doubled = numbers.map(num => num * 2)

// console.log(doubled);





// Здесь:

//     numbers— исходный массив.

//     .map()— метод, который перебирает каждый элемент.

//      num * 2— преобразование, которое мы делаем с каждым элементом.

//      doubled— новый массив с изменёнными значениями.


// let users = [{
//     name: 'Hasanboy',
//     age: 20
// }, {
//     name: 'John',
//     age: 35
// }]


// const user_Names = users.map(user => user.name)

// console.log(user_Names);


// let products = [{
//     id: 1,
//     name: 'Laptop',
//     price: 500
// }, {
//     id: 2,
//     name: 'Phone',
//     price: 250
// }, {
//     id: 3,
//     name: 'PC',
//     price: 750
// }]


// const id_And_Price = products.map(product => ({
//     id: product.id,
//     price: product.price
// }))

// console.log(id_And_Price);


// const id_And_Price = products.map(products => ([products.name, products.price]))

// console.log(id_And_Price);


// const product_info = products.map(product => `Id: ${product.id}, Цена: ${product.price}`)

// console.log(product_info);


// const idAndPrice = products.map(({ id, price }) => ({ id, price }));

// console.log(idAndPrice);
// [{ id: 1, price: 500 }, { id: 2, price: 1200 }]


// const items = ['Home', 'About', 'Contact']

// const htmlList = items.map(item => `<li>${item}</li>`).join('');

// console.log(htmlList);


// 🔹 Представь ситуацию
// Ты делаешь сайт. У тебя есть меню (или список товаров, постов, пользователей), и ты хочешь его показать на странице:

// const items = ['Главная', 'О нас', 'Контакты'];
// 🔸 Без .map() тебе пришлось бы писать вот так:

// <li>Главная</li>
// <li>О нас</li>
// <li>Контакты</li>

// Но что, если у тебя 50 пунктов? Или они приходят из сервера? Ручками писать — 💀.

// 🔸 С .map() — ты автоматизируешь:

// const htmlList = items.map(item => `<li>${item}</li>`).join('');
// 📌 Это создаёт HTML для каждого пункта — автоматически.

// 🔹 Зачем это нужно тебе?
// Ситуация	Что даёт .map()
// У тебя много данных (товары, пользователи, посты и т.д.)	Быстро превращаешь их в HTML
// Данные приходят с сервера (API)	Показываешь их на сайте
// Ты хочешь обновлять данные динамически	Без ручного кода всё работает
// Ты используешь React	.map() используется в каждом компоненте

// 🔸 Простой пример в жизни:
// Ты делаешь сайт для курсов. Курсы у тебя в массиве:


// const courses = ['HTML', 'CSS', 'JavaScript'];
// С помощью .map() ты за 1 строку кода получаешь список на экране:


// <ul>
//   ${courses.map(c => `<li>${c}</li>`).join('')}
// </ul>
// 🔚 Вывод:
// .map() — это как «копировать и вставить» для программиста:
// быстро создаёшь однотипные части, не повторяя код руками.

// Хочете — покажу реальный пример прямо в HTML-файле или в React.



// const numbers = [1, 2, 3, 4, -2, -5]

// const item = numbers.filter(n => n >= 0).map(n => ({
//     value: n
// }))

// console.log(item);


// Reducing an Array


// const numbers = [1, 2, 3]
// let sum = 0;

// for (let n of numbers) sum += n;

// console.log(sum);

// a = 0, c = 1 => a = 1
// a = 1, c = 2 => a = 3
// a = 3, c = 3 => a = 6

// let result = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// }, 0)

// console.log(result);