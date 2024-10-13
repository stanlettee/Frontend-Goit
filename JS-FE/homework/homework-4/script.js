// function checkFields() {
//     const field1 = document.getElementById('field1').value;
//     const field2 = document.getElementById('field2').value;
//     const message = document.getElementById('message');

//     if (field1 && field2) {
//         message.textContent = "Обидва поля заповнені";
//         alert("Обидва поля заповнені")
//     } else {
//         message.textContent = "Не всі поля заповнені";
//         alert("Не всі поля заповнені")
//     }
// }

// function checkSum() {
//     const number1 = parseFloat(document.getElementById('number1').value);
//     const number2 = parseFloat(document.getElementById('number2').value);
//     const message = document.getElementById('message');

//     if (!isNaN(number1) && !isNaN(number2) && (number1 + number2) > 10) {
//         message.textContent = "Сума більша за 10";
//         alert("Сума більша за 10")
//     } else {
//         message.textContent = "Сума менша або дорівнює 10";
//         alert("Сума менша або дорівнює 10")
//     }
// }


// 1)

// const field1 = prompt('Введіть перше поле');
// const field2 = prompt('Введіть друге поле');

// if (field1 && field2){
//     alert("Обидва поля заповнені")
// } else {
//     alert("Не всі поля заповнені")
// }

// 2)

// const number1 = parseFloat(prompt('Введіть перше число'));
// const number2 = parseFloat(prompt('Введіть перше число'));

// if (!isNaN(number1) && !isNaN(number2) && (number1 + number2) > 10) {
//     alert("Сума більша за 10")
// } else {
//     alert("Сума менша або дорівнює 10")
// }

// 3)

// const textInput = prompt('Введіть слово JavaScript')

// if (textInput.toLowerCase() === 'JavaScript'.toLowerCase()){
//     alert('Правильно')
// } else {
//     alert('Вам потрбно будо ввести слово JavaScript')
// }

// 4)

// const numInput = parseFloat(prompt('Введіть число'))

// if (numInput >= 10 && numInput <= 20) {
//     alert('Число входить в діапазон від 10 до 20')
// } else {
//     alert('Число не входить в діапазон від 10 до 20')
// }

// 5)

const userName = prompt('Введіть ім я');
const userEmail = prompt('Введіть email');
const userPassword = prompt('Введіть пароль');

if (userName.length >= 3 && userEmail.includes('@.') && userPassword.length >= 6) {
    alert('Bведені дані правильно заповнені')
} else {
    alert('Дані містять помилку')
}