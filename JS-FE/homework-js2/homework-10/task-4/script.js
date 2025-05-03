const input = document.querySelector('#input');
const buttonClick = document.querySelector('#button');
const message = document.querySelector('#message');
buttonClick.addEventListener('click', () => {
    const seconds = Number(input.value);
    if (isNaN(seconds) || seconds <= 0) {
        message.textContent = 'Будь ласка, введіть правильну кількість секунд.';
    }
    message.textContent = `Очікуємо ${seconds} секунд...`;
    setTimeout(() => {
        message.textContent = `Час вийшов! Пройшло ${seconds} секунд.`;
    }, seconds * 1000);
});
