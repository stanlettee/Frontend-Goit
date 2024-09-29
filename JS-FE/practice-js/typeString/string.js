const message = 'I love Java Script';
const mesLength = message.length;
console.log(mesLength)

const letter = message[3];
console.log(letter)

const lastIndex = mesLength - 1;
console.log(lastIndex)

const lastLetter = message[lastIndex];
console.log(lastLetter)

// Конкатенація рядків(Зшивання або об'єднання)
const friendName = 'Діма ';
const friendAge = '15';
const info = friendName + friendAge;
console.log(info)
console.log('test'+ 1)
// Шаблонні рядки, використовиваємо їх тоді коли хочемо в середині рядка ставимо якісь змінну, тоді використоваємо не звичйні лапки
// ${} доллар ті фігурні дужки, не інтерполяція
const fullMessage = `My friend is ${friendName}, he is ${friendAge}`;

const myName = 'Станіслав Трунов';
const userName = prompt("Введіть ваше ім'я")
console.log(myName.length)

// привитати користувача, використоваючи його ім'я у такому форматі 'вітаємо, ім'я, ви зареєстровані
console.log(`Вітаємо, ${userName}, ви зареєстровані`)

