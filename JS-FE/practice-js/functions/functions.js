// функція не обгортка інструкції коду які стосуются певної дії
// є 2 способи створення функцій: 
// 1) Оголошення функції(function declaration)

// function назваФункції (параметри) {
//     тіло функції
//     return значення яке ми шукаємо
// }

// параметри це змінні в які призодять данні при створені функції

// оголосимо функцію

// function test(){
//     return 'test'
// }

// викличемо функцію
// назваФункції(аргументи)
// аргументи це кокретні данні які ми передємо при виклику функції

// const message = test()
// console.log(message)

// 2) Функціональний вираз(function expression)

// const test = function(){
//     return 'test'
// }
// console.log(test())

// 3) Стрілкова функція, це новий синтаксис 

// const test = () => {
//     return 'test'
//     // В цій функції явне повернення бо є return
// }
// console.log(test())

// Перепишемо стрілкову функцію на функцію з неявним поверненням

// const test = () => 'test'

// ПРАКТИКА

// створити функцію яка буде додавати 3 числа

// function sumNum(a, b, c){
//     const result = a + b + c;
//     return result
// }

// console.log(sumNum(34, 16, 47))

// function sumNum(a, b, c){
//     return a + b + c
// }

// console.log(sumNum(34, 16, 47))

// перепишемо на стрілкову функцію

// const sumNum = (a, b, c) => a + b + c
// console.log(sumNum(34, 16, 47))

// ------------------------

// якщо у функцію має приходити різне кількість аргументів у параметри
// то ми можемо використати псевдомасив arguments

// function sumNum(){
//     // console.log(arguments) у данному псевдомассиві arguments не працюють
//     // всі методи для работи з масивами;
//     // тому ми можемо с псевдомасиву зробити повнційний масив через матод Array.from
//     const numbers = Array.from(arguments)
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++){
//         sum += numbers[i]
//     }
//     return sum;
// }
// console.log(sumNum(37, 12, 87))
// console.log(sumNum(40, 20, 50, 90))
// console.log(sumNum(1454, 154))