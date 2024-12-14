// 1

let button;
const buttonFunction = () => {
    while (true) {
        button = confirm('Підтвердити дію');
        if (button){
            console.log('Hello world')
            continue
        } else {
            break
        }
    }
};
buttonFunction()

// 2

const randomNumber = Math.floor(Math.random() * 100) + 1;
const userGuess = Number(prompt('Введіть число з 1 до 100'))
const checkGuess = () => {
    if (userGuess === randomNumber) {
        console.log('Вітаємо! Ви вгадали число!');
    } else if (userGuess < randomNumber) {
        console.log('Загадане число більше. Спробуйте ще раз!');
    } else if (userGuess > randomNumber) {
        console.log('Загадане число менше. Спробуйте ще раз!');
    } else {
        console.log('Будь ласка, введіть коректне число!');
    }
};
checkGuess()
console.log(randomNumber)

// 3

let userConfirm;
let i = 0;
while(true){
    userConfirm = confirm('Press the button')
    i += 1
    if (userConfirm === false){
        break;
    } else {
        continue
    }
}
console.log(i)

// 4

function applyCallbackToArray(array, callback) {
    const result = []; 
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result; 
}
const numbers = [1, 2, 3, 4, 5];
const multiplyByTwo = num => num * 2;
console.log(applyCallbackToArray(numbers, multiplyByTwo));

// 5

const calculateDiscountPrice = (price, discount, callback) => {
    const discountPrice = price - (price * discount / 100);
    callback(discountPrice);
};
const displayPrice = (discountPrice) => {
    console.log(`Ціна після знижки: ${discountPrice}грн.`);
};
const price = Number(prompt('Введіть ціну'));
const discount = Number(prompt('Введіть скидку'));
if (isNaN.price || isNaN.discount){
    alert('Ви ввели не число')
} else {
    calculateDiscountPrice(price, discount, displayPrice); 
}


 