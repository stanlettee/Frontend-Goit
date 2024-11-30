// const friends = ['Jack', 'John', 'Rick', 'Peter', 'Mark'];
// const friend = friends[0]
// console.log(friend)
// console.log(friends[2])

// const products = ['apple', 'banana', 'potato', 'carrot', 'strawberry'];
// products.push('tomato')
// console.log(products)

// const lastIndexElement = products.length - 1;
// const lastElement = products(lastIndexElement);
// console.log(lastElement)

// const animals = ['dog', 'cat', 'lion'];
// const newAnimals = [];
// for (let i = 0; i < animals.length; i++){
//     const text = `${animals[i]} is my friend`;
//     newAnimals.push(text)
// }

// console.log(newAnimals)

// const numbers = [3, 6, 9];
// let number = 0;
// for (let i = 0; i < numbers.length; i++){
//     number += numbers[i]
// }

// console.log(number)

// Напиши скрипт який рахує суму елементів двух масивів. Без методу concat()
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let sum = 0;

// // for (let i = 0; i < array1.length; i++){
// //     sum += array1[i]
// //     console.log(sum)
// //     for (let y = 0; y < array2.length; y++){
// //         sum += array2[y]
// //         console.log(sum)
// //     }
// // }

// for (let i = 0; i < array1.length; i++){
//     sum += array1[i]
// }

// for (let y = 0; y < array2.length; y++){
//     sum += array2[y]
// }

// console.log(sum)

// Напиши скрипт пошуку самого маленького числа в масиві,  
// при умові, що числа унікальні (не повторюються).
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber ;

// const numbers = [51, 18, 4, 1, 3, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (let i = 0; i < numbers.length; i++){
//     if (smallestNumber > numbers[i]){
//         smallestNumber = numbers[i];
//     }
// }

// console.log(smallestNumber)

// Напиши скрипт пошуку логіна. 
// Якщо логіна немає, вивести повідомлення
// 'Користувач [логін] не знайдено.' 
// Якщо знайшли логін, вивести повідомлення 
// 'Користувач [логін] знайдено.' 
//   - Спочатку через for
//   - Потім через for...of
//   - Логіка break
//   - Метод includes() з тернарним оператором

// const login = ['a', 'b', 'c'];
// const youLogin = prompt('Enter login');
// for (let i = 0; i<login.length;i++){
//     if (youLogin === login[i]){
//         console.log(`You are ${youLogin}`)
//     } else {
//         console.log('Your login is not found')
//     }
// }

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// // console.log(matrix[1][1])

// for (let i = 0; i < matrix.length; i++){
//     for (let y = 0; y < matrix[i].length; y++){
//         console.log(matrix[i][y])
//     }
// }

const message = 'I love javascript';
let split = message.split("");
console.log(split)

let friends = ['mark', 'jack', 'joe', 'peter', 'tony', 'bruce']
let join = friends.join(' ')
console.log(join)

let indexof = friends.indexOf('jack')
console.log(indexof)

let includes = friends.includes('Hello')
console.log(includes)

let push = friends.push('alice'); // додає в кінець
console.log(push) // виводе кількість, буде 7

let pop = friends.pop(); // видаляє останній елемент
console.log(pop) // повертає видаленний елемент
console.log(friends)

let shift = friends.shift() // видаляє перший елемент
console.log(shift) // повиртає видаленний елемент
console.log(friends)

let unshift = friends.unshift('owen'); // додаэ елемент на початку
console.log(unshift); // виводе кількість, буде 6
console.log(friends)

// метод slice вирізає елементи зі списку та робить іх окремим масивом, також може зробити копію масива
let slice = friends.slice(1, 3);
console.log(slice);
console.log(friends.slice(3, 5));
console.log(friends.slice(2, 4));

let friends2 = friends.slice(3, 5).join(', ');
let friends3 = friends.push(friends2)
console.log(friends3);
console.log(friends)

const copyFriends = friends.slice()
console.log(copyFriends)

// метод splice, може додавати, видаляти та заміняти елемент у масиві
const array = ['html', 'css', 'react', 'python', 'go', 'rust', 'javascript'];
// видалимо елемент до масиву
let deleteSplice = array.splice(4, 3)
console.log(array) // у splice 4 це індекс з якого починаємо видалення, а 3 це кількість елементів які треба видалити, починаючи з 4 індекса
// додамо елемент до масиву
let addSlice = array.splice(1, 0, 'javascript')
console.log(array)
// заміна елемента у масиві
let switchSlice = array.splice(4, 1, 'node.js')
console.log(array)

// метод concat, об'єднує кілька масивів в один
const numbers1 = [23, 13, 44, 52, 132, 7, 35, 87];
const numbers2 = [1, 54, 67, 24, 54, 76];
const numbers3 = numbers1.concat(numbers2);
console.log(numbers3)




