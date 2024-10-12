let input = prompt('Який у вас тип підписка: free, pro, vip?');
let answer = input.toLowerCase();
// if (answer === 'pro'){
//     alert('Інформація')
// } else if (answer === 'vip'){
//     alert('Інформація')
// } else if (answer === 'free'){
//     alert('Потрібен інший тип підписки')
// } else {
//     alert('У доступі відмовлено')
// }

// switch(answer){
//     case 'pro':
//         alert('Інформація')
//         break;
//     case 'vip':
//         alert('Інформація')
//         break;
//     case 'free':
//         alert('Потрібен інший тип підписки')
//         break;
//     default:
//     alert('У доступі відмовлено')
// }

// Скоротимо приклад

// if (answer === 'pro' || answer === 'vip'){
//     alert('Інформація')
// } else if (answer === 'free'){
//     alert('Потрібен інший тип підписки')
// } else {
//     alert('У доступі відмовлено')
// }

// switch(answer){
//     case 'pro':
//     case 'vip':
//         alert('Інформація')
//         break;
//     case 'free':
//         alert('Потрібен інший тип підписки')
//         break;
//     default:
//     alert('У доступі відмовлено')
// }

// Змінна lang може приймати 4 значення:
// 'ua', 'en', 'ru', 'fr'.
// За допомогою конструкції switch виведи на екран 
// назву місяця в залежності від обраної мови.
// Наприклад, якщо lang = 'fr', то в консоль виводимо "Janvier".

let input2 = prompt('Введіть мову: ua, en, ru, fr');
let lang = input2.toLowerCase();

if (lang === 'ua'){
    alert('Привіт')
} else if (lang === 'ru'){
    alert('Привeт')
} else if (lang === 'en'){
    alert('Hello')
} else if (lang === 'fr'){
    alert('Janvier')
} else {
    alert('Це не мова')
}

switch(lang){
    case 'ua':
        alert('Місяць')
        break;
    case 'ru':
        alert('Месяц')
        break;
    case 'en':
        alert('Month')
        break;
    case 'fr':
        alert('Janvier')
        break;
    default:
    alert('Це не мова')
}
