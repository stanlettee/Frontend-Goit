// Цикл з лічильником

// for (let e = 0; e < 5; e+=1){
//     console.log(e)
// }

// 1) Запускаємо цикл та ініціальзуємо лічильник let e = 0
// 2) Далі спрацює перевірка умови e < 5, буде true
// 3) Оскілки в умові true то виконаєтся код у фігурних дужках(тіло циклу), тобто console.log(e)
// 4) Спрацьовує е+=1, тобто е = 0 + 1
// 5) Тепер в і лежить 1, переходимо до наступного кроку
// 6) Спрацбовує перевірка е < 5, тобто 1 < 5, в результаті буде true та переходимо до 3 умови

// Виведіть в консоль всі непарні числа за допомогою циклу for

// for (let i = 1; i < 10; i+=2){
//     console.log(i)
// }

// Оператор break потрібен для того щоб перервати цикл

// for (let i = 5; i <= 75; i+=1){
//     console.log(i)
//     if (i === 25){
//         break;
//     }
// }

// Опертор continue пропускає ітерацію

// for (let i = 5; i <= 75; i+=1){
//     if (i % 2 === 0){
//         continue;
//     }
//     console.log(i)
// }

// while (умова){тіло з інструкцією}

// const age = Number(prompt('Скількі вам років'));
// while (age < 18){
// Тут буде зациклиння оскількі умова завжди буде true
//     alert('Ви малий')
// }

// let age = Number(prompt('Скількі вам років'));
// while (age < 18){
//     alert(`Ви малий, вам ${age} років`)
//     age += 1;
// }

// Цикл do {} while ()

// let password;
// const savedPassword = '31415926535';
// do {
//     password = prompt('Enter your password');
// } while (savedPassword !== password)

// Вивести в консоль числа від 1 до 5 всіма циклами

// for (let i = 1; i <= 5; i+=1){
//     console.log(i)
// }

// let f = 1;
// while (f <= 5){
//     console.log(f)
//     f += 1;
// }

// let c = 1
// do {
//     console.log(c)
//     c += 1;
// } while (c <= 5)

// Переписати на while

// for (let number = 0; number < 5;) {
//     console.log(`Число ${number}`);
// }

// let number = 0;
// while (number < 5){
//     console.log(`Число ${number}`)
//     number += 1;
// }

// Написати скрипт який буде перевіряти середній бал успішності учня.
// Прервати роботу циклу, коли середній бал буде меньше 7.

// for (let grade = 12; grade > 0; grade -= 1){
//     console.log(grade)
//     if (grade === 7){
//         break;
//     }
// }

// Цикл повинен питати число поки відвідувач не введе число,
// більше 100, або не натисне кнопку Відміна (ESC).

let number;
do {
    number = Number(prompt('Введіть число'));
    console.log(number)
} while (number < 100)