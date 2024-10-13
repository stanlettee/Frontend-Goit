// 1)

// const select = prompt('Введіть Кава, Чай або Сік');
// switch(select.toLowerCase()){
//     case 'кавa':
//         alert('Ви будете каву');
//         break;
//     case 'чай':
//         alert('Ви будете чай');
//         break;
//     case 'сік':
//         alert('Ви будете сік')
//         break;
//     default:
//         alert('Ви ввели не праивльно')
// }

// 2)

// const dayWeek = prompt('Введіть день тиждня');
// switch(dayWeek.toLowerCase()){
//     case 'понеділок':
//         alert('Рядок що ви ввели є днем тижня та цей день рабочій')
//         break;
//     case 'вівторок':
//         alert('Рядок що ви ввели є днем тижня та цей день рабочій')
//         break;
//     case 'середа':
//         alert('Рядок що ви ввели є днем тижня та цей день рабочій')
//         break;
//     case 'четвер':
//         alert('Рядок що ви ввели є днем тижня та цей день рабочій')
//         break;
//     case 'п ятниця':
//         alert('Рядок що ви ввели є днем тижня та цей день рабочій')
//         break;
//     case 'суббота':
//         alert('Рядок що ви ввели є днем тижня та цей день віхідний')
//         break;
//     case 'неділя':
//         alert('Рядок що ви ввели є днем тижня та цей день вихідний')
//         break;
//     default:
//         alert('Це не день тиждня')
// }

// 3) 

// const noMonth = Number(prompt('Введіть номер місяця'))
// switch(noMonth){
//     case 1:
//         alert('Зима')
//         break;
//     case 2:
//         alert('Зима')
//         break;
//     case 3:
//         alert('Весна')
//         break;
//     case 4:
//         alert('Весна')
//         break;
//     case 5:
//         alert('Весна')
//         break;
//     case 6:
//         alert('Літо')
//         break;
//     case 7:
//         alert('Літо')
//         break;
//     case 8:
//         alert('Літо')
//         break;       
//     case 9:
//         alert('Осінь')
//         break;
//     case 10:
//         alert('Осінь')
//         break;
//     case 11:
//         alert('Осінь')
//         break;  
//     case 12:
//         alert('Зима')
//         break;  
//     default:
//         alert('Це не номер місяцю')
// }

// 4)

// const noMonth = Number(prompt('Введіть номер місяця'))
// switch(noMonth){
//     case 1:
//         alert('31 день')
//         break;
//     case 2:
//         alert('28 днів')
//         break;
//     case 3:
//         alert('31 день')
//         break;
//     case 4:
//         alert('30 днів')
//         break;
//     case 5:
//         alert('31 день')
//         break;
//     case 6:
//         alert('30 днів')
//         break;
//     case 7:
//         alert('31 день')
//         break;
//     case 8:
//         alert('31 дунь')
//         break;       
//     case 9:
//         alert('30 днів')
//         break;
//     case 10:
//         alert('31 день')
//         break;
//     case 11:
//         alert('30 днів')
//         break;  
//     case 12:
//         alert('31 день')
//         break;  
//     default:
//         alert('Це не номер місяцю')
// }

// 5)

// const color = prompt('Введіть кольор');
// switch(color.toLowerCase()){
//     case 'червоний':
//         alert('Стойте');
//         break;
//     case 'зелений':
//         alert('Йдіть');
//         break;
//     case 'жовтий':
//         alert('Готуйтеся');
//         break;
//     default:
//         alert('Введіть інший кольор')
// }

// 6)

const number1 = parseFloat(prompt('Введіть преше число'))
const number2 = parseFloat(prompt('Введіть друге число'))
const operation = parseFloat(prompt('Введіть операцію: + - * /'))

switch(operation){
    case '+':
        alert(number1 + number2)
        break;
    case '-':
        alert(number1 - number2)
        break;
    case '*':
        alert(number1 * number2)
        break;
    case '/':
        alert(number1 / number2)
        break;
    default: 
        alert('Операція не була успешною')
}

